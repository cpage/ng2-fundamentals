import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { EventService } from './services/event.service';
import { IEvent, ISession } from './models/event.models';

@Component({
    selector: 'event-details',
    templateUrl: 'app/events/event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
        a { cursor: pointer; }
    `]
})
export class EventDetailsComponent implements OnInit {
    constructor(private eventSvc: EventService, private route: ActivatedRoute) {

    }

    event: IEvent;
    addMode: boolean = false;
    filterBy: string = 'all';
    sortBy: string = 'name';

    ngOnInit() {
        this.route.data.forEach((data) => {
            this.event = data['event'];
            this.addMode = false;
        });
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(newSession: ISession) {
        let nextId: number = Math.max.apply(null, this.event.sessions.map(s => s.id)) + 1;
        newSession.id = nextId;
        this.event.sessions.push(newSession);

        this.eventSvc.updateEvent(this.event);
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode = false;
    }

}