import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { ConfirmPasswordValidator } from 'src/app/validators/confirm-password/ConfirmPasswordValidator';
import { PasswordValidator } from 'src/app/validators/password/PasswordValidator';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerSwal')
  public readonly registerSwal!: SwalComponent;
  user:any = {};

  registerForm = new FormGroup({
    firstName: new FormControl('Pruthvi', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('Dhamecha', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('pruthvi.dhamecha@gmail.com', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    password: new FormControl('Asdf@1234', [Validators.required, PasswordValidator(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
    confirmpassword: new FormControl('Asdf@1234', [Validators.required, PasswordValidator(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
    termsAndConditions: new FormControl(true, [Validators.requiredTrue]),
  }, { validators: ConfirmPasswordValidator() });

  submitButton: any = {
    "text": "Sing Up",
    "id": "signup",
    "type": "submit",
    "btnClasses": "btn btn-lg btn-primary"
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onRegister() {

    this.submitButton = {
      text: "Please Wait...",
      type: "submit",
      btnClasses: "btn btn-lg btn-primary",
      iconClasses: 'fa fa-spinner fa-spin',
      iconPlace: 'after'
    };

    this.user = {
      email:'eve.holt@reqres.in',
      password :'pistol'
    };

    this.authService.register(this.user)
      .subscribe({
        next: data => {
          this.submitButton = {
            "text": "Sign Up",
            "id": "signup",
            "type": "submit",
            "btnClasses": "btn btn-lg btn-primary"
          };
          this.registerSwal.fire();
        },
        error: error => {
          console.error('There was an error!', error.message);
        }
      });
  }
}
