import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/RX';

import { EventService } from './event.service';
import { IEvent } from '../models/event.models';

@Injectable()
export class EventResolverService implements Resolve<any> {
    constructor(private eventSvc: EventService, private router: Router) {

    }

    resolve(route: ActivatedRouteSnapshot): Observable<IEvent> {

        return this.eventSvc.getEvent(+route.params['id']).map(event => {
            if (event) {
                return event;
            }

            this.router.navigate(['/404']);
            return null;
        });
    }
}
