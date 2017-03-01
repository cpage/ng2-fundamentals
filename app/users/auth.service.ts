import { Injectable } from '@angular/core';
import { Http, Headers, Request, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/RX';

import { IUser } from './user.models';



@Injectable()
export class AuthService {

    constructor(private http: Http) {
        // this.currentUser = {
        //     id: 1,
        //     username: 'jpapa',
        //     firstname: 'John',
        //     lastname: 'Papa',
        // }

    }

    currentUser: IUser;

    loginUser(username: string, password: string) {

        let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });
        let loginInfo = { username: username, password: password };
        return this.http.post('/api/login', JSON.stringify(loginInfo), options)
            .do((response: Response) => {
                if (response) {
                    this.currentUser = <IUser>response.json().user;
                }
            })
            .catch((err: Response) => {
                return Observable.of(false);
            });
        // this.currentUser = {
        //     id: 1,
        //     username: username,
        //     firstname: 'John',
        //     lastname: 'Papa',
        // }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    checkAuthStatus() {
        return this.http.get('/api/currentIdentity')
            .map((response: any) => {
                if (response._body) {
                    return response.json();
                }

                return {};
            })
            .do((currentUser: IUser) => {
                if (!!currentUser.username) {
                    this.currentUser = currentUser;
                }
            })
            .subscribe();
    }

    updateCurrentUser(firstname: string, lastname: string) {
        this.currentUser.firstname = firstname;
        this.currentUser.lastname = lastname;

        let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });

        return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options)
    }

    logoutUser() {
        let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });

        return this.http.post('/api/logout', {}, options)
            .do(response => {
                this.currentUser = undefined;
            });
    }
}