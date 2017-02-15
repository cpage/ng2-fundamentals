import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-card',
    templateUrl: 'app/events/event-card.component.html',
    styles: [`
        .green { color: #003300 !important; }
        .card { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})
export class EventCardComponent {

    @Input() event: any;

}
