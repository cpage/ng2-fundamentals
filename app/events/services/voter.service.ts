import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/RX';

import { Http, RequestOptions, Request, Response, Headers } from '@angular/http';

import { ISession } from '../models/event.models';

@Injectable()
export class VoterService {

    constructor(private http: Http) { }

    deleteVoter(eventId: number, session: ISession, voterName: string) {
        this.http.delete(`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`)
            .catch(this.handleHttpError)
            .subscribe();

        session.voters = session.voters.filter(v => v !== voterName);
    }

    addVoter(eventId: number, session: ISession, voterName: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

        this.http.post(url, {}, options)
            .catch(this.handleHttpError)
            .subscribe();

        session.voters.push(voterName);
    }

    userHasVoted(session: ISession, voterName: string) {
        return session.voters.includes(voterName);
    }

    private handleHttpError(err: Response) {
        return Observable.throw(err.statusText);
    }
}
