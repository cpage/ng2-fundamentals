import { Injectable } from '@angular/core';
import { IUser } from './user.models';


@Injectable()
export class AuthService {

    constructor() {
        this.currentUser = {
            id: 1,
            username: 'jpapa',
            firstname: 'John',
            lastname: 'Papa',
        }
     }

    currentUser: IUser;

    loginUser(username: string, password: string) {
        this.currentUser = {
            id: 1,
            username: username,
            firstname: 'John',
            lastname: 'Papa',
        }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstname: string, lastname: string) {
        this.currentUser.firstname = firstname;
        this.currentUser.lastname = lastname;
    }
}