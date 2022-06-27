import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  buttons: any = [{
      "text": "Continue with Google",
      "id":"signinwithgoogle",
      "type":"button",
      "URL": "#",
      "imgURL": "assets/brand-logos/google-icon.svg",
      "imgClasses":"h-20px me-3",
      // "iconClasses":"fa-brands fa-google",
      "btnClasses": "btn btn-flex flex-center btn-light btn-lg w-100 mb-5"
    },
    {
      "text": "Continue with Facebook",
      "id":"signinwithfacebook",
      "type":"button",
      "URL": "#",
      "imgURL": "assets/brand-logos/facebook-icon.svg",
      "imgClasses":"h-20px me-3",
      "btnClasses": "btn btn-flex flex-center btn-light btn-lg w-100 mb-5"
    },
    {
      "text": "Continue with Apple",
      "id":"signinwithapple",
      "type":"button",
      "URL": "#",
      "imgURL": "assets/brand-logos/apple-icon.svg",
      "imgClasses":"h-20px me-3",
      "btnClasses": "btn btn-flex flex-center btn-light btn-lg w-100 mb-5"
    }
  ];

  loginForm = new FormGroup({
    email: new FormControl('eve.holt@reqres.in', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    password: new FormControl('cityslicka', [Validators.required, Validators.pattern(/^(?=.*[a-z])[A-Za-z\d@$!%*?&]{8,}$/)]),
    // password: new FormControl('cityslicka', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
  });

  loginFormFields = [{
    "type": "email",
    "id": "email",
    "label": "Email",
    "labelClasses": "form-label fs-6 fw-bolder text-dark",
    "placeholder": "Enter your email",
    "value": "",
    "validation": [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')],
    "classes": "form-control form-control-lg form-control-solid",
    "error": "",
    "errorClasses": "",
    "errorMessage": "Please enter a valid email address",
    "formControlName": "email"
  },
  {
    "type": "password",
    "id": "password",
    "label": "Password",
    "labelClasses": "form-label fs-6 fw-bolder text-dark",
    "placeholder": "Enter your password",
    "value": "",
    "validation": [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)],
    "classes": "form-control form-control-lg form-control-solid",
    "error": "",
    "errorClasses": "",
    "errorMessage": "Please enter a valid password",
    "formControlName": "email"
  }];

  submitButton: any = {
    "text": "Continue",
    "id":"signin",
    "type":"submit",
    "btnClasses": "btn btn-lg btn-primary w-100 mb-5"
  }
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    // this.authService.getUsers();
  }

  onLogin(){
    this.authService.login(this.loginForm.value)
    .subscribe({
      next: data => {
        // this.token = data.token;
        console.log(data);
        console.log("login success");
      },
      error: error => {
        console.error('There was an error!', error);
        console.log('Invalid Credentials');
      }
    });
    // if(this.authService?.token){
    //   console.log("Logged in");
    // } else{
    //   console.log("Not logged in");
    // }
  }
}
