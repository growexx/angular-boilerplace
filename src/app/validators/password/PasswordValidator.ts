import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export function PasswordValidator(password: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const forbidden = password.test(control.value);
        return forbidden ? null : { PasswordValidator: { value: control.value } };
    };
}
