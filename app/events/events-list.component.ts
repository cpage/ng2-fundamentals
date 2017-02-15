import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from './services/event.service';
import { IEvent } from './models/event.models';

import { ToastrService } from '../common/toastr.service';

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list.component.html',
})
export class EventsListComponent implements OnInit {
    events: IEvent[];

    constructor(private eventSvc: EventService, private toastrSvc: ToastrService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
    }

    handleCardClick(event) {
        this.toastrSvc.success(event.name);
    }
}
