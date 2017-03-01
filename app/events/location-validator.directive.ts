import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[validateLocation]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true }
    ]
})
export class LocationValidator implements Validator {
    constructor() {

    }
    validate(group: FormGroup): { [key: string]: any } {
        let addressControl = group.controls['address'];
        let cityControl = group.controls['city'];
        let countryControl = group.controls['country'];
        let onlineUrlControl = (<FormGroup>group.root).controls['onlineUrl'];

        if ((addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value)
            || (onlineUrlControl && onlineUrlControl.value)) {
            console.log('location validator status: valid');
            return null;
        }

        console.log('location validator status: invalid');
        return { validateLocation: false }
    }
}
