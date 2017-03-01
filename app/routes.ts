import { Routes } from '@angular/router';

import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolverService,
    EventResolverService,
    CreateSessionComponent
} from './events/index';

import { Error404Component } from './common/error-404.component';

export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolverService } },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: [EventRouteActivator] },
    { path: 'events/sessions/new', component: CreateSessionComponent },
    //{ path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolverService } },
    { path: '404', component: Error404Component },
    { path: 'user', loadChildren: 'app/users/user.module#UserModule' },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
];
