import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {

    const mailRegex = RegExp('(?=.*[@])');
    const valid = mailRegex.test(control.value);

    const errors = {
        mail: {
            rules: ''
        }
    };

    return !valid ? errors : null;
}