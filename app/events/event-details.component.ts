import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from './services/event.service';
import { IEvent } from './models/event.models';

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

    ngOnInit() {
        let id: number = +this.route.snapshot.params['id'];
        this.event = this.eventSvc.getEvent(id);

    }

    addSession() {
        this.addMode = true;
    }

}