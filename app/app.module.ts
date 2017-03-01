import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
    EventsListComponent,
    EventCardComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolverService,
    EventResolverService,
    EventService,
    VoterService,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe,
    LocationValidator
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar.component';


import {
    Error404Component,
    CollapsibleWellComponent,
    SimpleModalComponent,
    UpvoteComponent,
    ModalTriggerDirective,
    TOASTR_TOKEN,
    JQ_TOKEN
} from './common/index';

import { AuthService } from './users/auth.service';

import { appRoutes } from './routes';



@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventCardComponent,
        EventDetailsComponent,
        CreateEventComponent,
        CreateSessionComponent,
        SessionListComponent,
        NavbarComponent,
        Error404Component,
        CollapsibleWellComponent,
        SimpleModalComponent,
        UpvoteComponent,
        ModalTriggerDirective,
        DurationPipe,
        LocationValidator
    ],
    providers: [
        EventService,
        VoterService,
        { provide: TOASTR_TOKEN, useValue: toastr },
        { provide: JQ_TOKEN, useValue: jQuery },
        EventRouteActivator,
        EventListResolverService,
        EventResolverService,
        AuthService
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {
}
