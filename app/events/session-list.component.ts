import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ISession } from './models/event.models';

@Component({
    moduleId: module.id,
    selector: 'session-list',
    templateUrl: 'session-list.component.html'
})
export class SessionListComponent implements OnInit, OnChanges {
    constructor() { }

    @Input() sessions: ISession[];
    @Input() activeFilter: string;
    @Input() activeSort: string;

    filteredSessions: ISession[];

    ngOnInit() {

    }

    ngOnChanges() {
        if (!this.sessions) return;

        this.filterSessions();
        this.filteredSessions.sort(
            this.activeSort === 'name' ? sortByNameAsc : sortByVotesDesc
        );
    }

    filterSessions() {
        if (this.activeFilter === 'all') {
            this.filteredSessions = this.sessions.slice(0);
        }
        else {
            this.filteredSessions = this.sessions.filter(s => {
                return s.level.toLocaleLowerCase() === this.activeFilter;
            });
        }
    }
}

function sortByNameAsc(s1: ISession, s2: ISession): number {
    return s1.name.localeCompare(s2.name);
}

function sortByVotesDesc(s1: ISession, s2: ISession): number {
    return s2.voters.length - s1.voters.length;
}