import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { EventService } from './services/event.service';
import { IEvent } from './models/event.models';

@Component({
    templateUrl: 'app/events/create-event.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px; }
        .error input { background-color: #E3C3C5; }
        .error ::-webkit-input-placeholder { color: #999; }
        .error ::-moz-placeholder { color: #999; }
        .error :-moz-placeholder { color: #999; }
        .error :ms-input-placeholder { color: #999; }
    `]

})
export class CreateEventComponent implements OnInit {

    isDirty: boolean = true;
    event: IEvent;

    constructor(private router: Router, private eventService: EventService) { }

    ngOnInit() {
        this.event = {
            id: -1,
            name: 'ng-RBC',
            date: new Date('2017/03/01'),
            time: '10:00 am',
            price: 199,
            location: {
                address: '88 QQ W',
                city: 'Toronto',
                country: 'Canada'
            },
            imageUrl: 'http://www.rbc.com/uos/_assets/images/logos/web/rbc.gif',
            sessions: []
        }
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues).subscribe((event: IEvent) => {
            this.isDirty = false;
            this.router.navigate(['/events']);
        });
    }

    cancel() {
        this.router.navigate(['/events']);
    }

    validateLocation(form: NgForm) {
        (<FormGroup>form.controls['location']).controls['address'].updateValueAndValidity();

    }
}
