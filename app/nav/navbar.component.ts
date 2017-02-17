import { Component } from '@angular/core';
import { AuthService } from '../users/auth.service';
import { EventService } from '../events/services/index';

import { ISession } from '../events/models/event.models';

@Component({
    selector: 'navbar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`
        .nav.navbar-nav { font-size: 15px; }
        #searchForm {margin-right: 100px; }
        @media (max-width: 1200px) {#searchForm {display:none}}
        li > a.active { color: #F97924; }
    `]
})
export class NavbarComponent {
    constructor(private authService: AuthService, private eventService: EventService) { }

    searchTerm: string = "";
    foundSessions: ISession[];

    searchSessions(searchTerm: string) {
        this.eventService.searchSessions(searchTerm).subscribe(sessions => {
            this.foundSessions = sessions;
        });

    }


}
