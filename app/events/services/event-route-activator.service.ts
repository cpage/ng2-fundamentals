import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { EventService } from './event.service';
import { CreateEventComponent } from '../create-event.component';

@Injectable()
export class EventRouteActivator implements CanActivate, CanDeactivate<CreateEventComponent> {
    constructor(private eventSvc: EventService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
        const eventExists: boolean = !!this.eventSvc.getEvent(+route.params['id']);

        if (!eventExists) {
            this.router.navigate(['/404']);
        }

        return eventExists;
    }

    canDeactivate(component: CreateEventComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (component.isDirty) {
            let cancel: boolean = window.confirm('Your have not saved this event, do you wish to continue?');
            if(!cancel) {
                this.router.navigate([state.url]);
            }

            return cancel;
        }

        return true;
    }
}
