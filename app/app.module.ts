import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    EventsListComponent,
    EventCardComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolverService,
    EventService,
    CreateSessionComponent,
    SessionListComponent
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar.component';

import { Error404Component } from './common/error-404.component';

import { ToastrService } from './common/toastr.service';
import { AuthService } from './users/auth.service';

import { appRoutes } from './routes';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventCardComponent,
        EventDetailsComponent,
        CreateEventComponent,
        CreateSessionComponent,
        SessionListComponent,
        NavbarComponent,
        Error404Component
    ],
    providers: [EventService, ToastrService, EventRouteActivator, EventListResolverService, AuthService],
    bootstrap: [EventsAppComponent]
})
export class AppModule {
}
