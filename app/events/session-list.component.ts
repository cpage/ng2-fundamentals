import { Component, OnInit, Input } from '@angular/core';
import { ISession } from './models/event.models';

@Component({
    moduleId: module.id,
    selector: 'session-list',
    templateUrl: 'session-list.component.html'
})
export class SessionListComponent implements OnInit {
    constructor() { }

    @Input() sessions: ISession[];
    ngOnInit() { }
}