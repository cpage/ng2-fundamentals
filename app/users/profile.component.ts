import { Component, OnInit, Inject } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

import { TOASTR_TOKEN } from '../common/toastr.service';


@Component({
    moduleId: module.id,
    templateUrl: 'profile.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px; }
        .error input { background-color: #E3C3C5; }
        .error ::-webkit-input-placeholder { color: #999; }
        .error ::-moz-placeholder { color: #999; }
        .error :-moz-placeholder { color: #999; }
        .error :ms-input-placeholder { color: #999; }
    `]
})
export class ProfileComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router, @Inject(TOASTR_TOKEN) private toastr: Toastr) { }

    profileForm: FormGroup;
    private firstname: FormControl;
    private lastname: FormControl;

    ngOnInit() {
        this.firstname = new FormControl(this.authService.currentUser.firstname, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
        this.lastname = new FormControl(this.authService.currentUser.lastname, Validators.required);

        this.profileForm = new FormGroup({
            firstname: this.firstname,
            lastname: this.lastname
        });
    }

    cancel() {
        this.router.navigate(['events']);
    }

    saveProfile(formValues) {
        if (this.profileForm.valid) {
            this.authService.updateCurrentUser(formValues.firstname, formValues.lastname)
                .subscribe(() => {
                    this.toastr.success('Profile updated');
                });

        }
    }

    logoutUser() {
        this.authService.logoutUser().subscribe(() => {
            this.router.navigate(['/user/login'])
        })
    }
    isFirstnameValid() {
        return this.firstname.valid || this.firstname.untouched;
    }

    isLastnameValid() {
        return this.lastname.valid || this.lastname.untouched;
    }

}
