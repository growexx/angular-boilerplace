import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error_message: any = ''
  toast: any;
  loginForm = new UntypedFormGroup({
    email: new UntypedFormControl('kminchelle', [Validators.required]),
    password: new UntypedFormControl('0lelplR', [Validators.required, Validators.pattern(/^(?=.*[a-z])[A-Za-z\d@$!%*?&]{8,}$/)]),
  });

  submitButton: any = {
    "text": "Sign In",
    "id": "signin",
    "type": "submit",
    "btnClasses": "btn btn-lg btn-primary w-100 mb-5"
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void { }

  onLogin() {
    this.submitButton = {
      text: "Please Wait...",
      type: "submit",
      btnClasses: "btn btn-lg btn-primary w-100 mb-5",
      iconClasses: 'fa fa-spinner fa-spin',
      iconPlace: 'after'
    };
    let creds = {
      username: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.authService.login(creds).subscribe({
      next: data => {
        this.submitButton = {
          "text": "Sign In",
          "id": "signin",
          "type": "submit",
          "btnClasses": "btn btn-lg btn-primary w-100 mb-5"
        };
        this.toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true
        });

        this.toast.fire({
          icon: 'success',
          title: "You have successfully logged in!",
        });
        localStorage.setItem('token', data.token);
        this.router.navigate(['/admin']);
      },
      error: (error: any) => {
        this.errorToast(error);
        this.submitButton = {
          "text": "Sign In",
          "id": "signin",
          "type": "submit",
          "btnClasses": "btn btn-lg btn-primary w-100 mb-5"
        };
      }
    });
  }

  errorToast(error: any) {
    if (!error.error.message) {
      if (error.status === 400) {
        this.error_message = 'Bad Request';
      } else if (error.status === 401) {
        this.error_message = 'Unauthorized';
      } else if (error.status === 403) {
        this.error_message = 'Forbidden';
      } else if (error.status === 404) {
        this.error_message = 'Not Found';
      } else if (error.status === 502) {
        this.error_message = 'Bad Gateway';
      }
    } else {
      this.error_message = error.error.message;
    }

    this.toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    })
    this.toast.fire({
      icon: 'error',
      title: error.status + '! ' + this.error_message,
    });
  }
}
