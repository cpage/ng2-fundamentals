import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { AuthService } from '../users/auth.service';

import { ISession } from './models/event.models';
import { VoterService } from './services/voter.service';

@Component({
    moduleId: module.id,
    selector: 'session-list',
    templateUrl: 'session-list.component.html'
})
export class SessionListComponent implements OnInit, OnChanges {
    constructor(private auth: AuthService, private voterService: VoterService) { }

    @Input() sessions: ISession[];
    @Input() activeFilter: string;
    @Input() activeSort: string;
    @Input() eventId: number;

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

    toggleVote(session: ISession) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.username);
        }
        else {
            this.voterService.addVoter(this.eventId, session, this.auth.currentUser.username);
        }

        if (this.activeSort === 'votes') {
            this.filteredSessions = this.sessions.sort(sortByVotesDesc);
        }
    }

    userHasVoted(session: ISession): boolean {
        return this.voterService.userHasVoted(session, this.auth.currentUser.username);
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