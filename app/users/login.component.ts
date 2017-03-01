import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px; }
    `]
})
export class LoginComponent implements OnInit {
    constructor(private authSvc: AuthService, private router: Router) { }

    private loginInvalid: boolean;

    ngOnInit() {
        this.loginInvalid = false;
    }

    login(formValues) {
        this.authSvc.loginUser(formValues.userName, formValues.password)
            .subscribe(response => {
                if (!response) {
                    this.loginInvalid = true;
                } else {
                    this.gotoDefaultPage();
                }

            });
    }

    cancel() {
        this.gotoDefaultPage();
    }

    private gotoDefaultPage() {
        this.router.navigate(['/events']);
    }
}