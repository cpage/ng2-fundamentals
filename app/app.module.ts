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
    SessionListComponent,
    DurationPipe
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar.component';


import {
    Error404Component,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    TOASTR_TOKEN,
    JQ_TOKEN
} from './common/index';

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
        Error404Component,
        CollapsibleWellComponent,
        SimpleModalComponent,
        ModalTriggerDirective,
        DurationPipe
    ],
    providers: [
        EventService,
        { provide: TOASTR_TOKEN, useValue: toastr },
        { provide: JQ_TOKEN, useValue: jQuery },
        EventRouteActivator,
        EventListResolverService,
        AuthService
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {
}
