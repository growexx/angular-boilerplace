import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export function ConfirmPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value.password && control.value.confirmpassword) {
      if (control.value.password === '') {
        return { misMatch: true };
      } else {
        if (control.value.password !== control.value.confirmpassword) {
          return { misMatch: true };
        } else {
          return null;
        }
      }
    } else {
      return { misMatch: true };
    }
  };
}
