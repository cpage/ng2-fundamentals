import { Component, OnInit } from '@angular/core';

import { AuthService } from './users/auth.service';

@Component({
    selector: 'events-app',
    template: '<navbar></navbar><router-outlet></router-outlet>'
})
export class EventsAppComponent implements OnInit {
    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.authService.checkAuthStatus();
    }
}