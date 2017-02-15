import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/RX';

import { EventService } from './event.service';
import { IEvent } from '../models/event.models';

@Injectable()
export class EventListResolverService implements Resolve<any> {
    constructor(private eventSvc: EventService) {

    }

    resolve(): Observable<IEvent[]> {
        return this.eventSvc.getEvents().map(events => events);
    }
}
