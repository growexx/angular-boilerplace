import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('successSwal')
  public readonly successSwal!: SwalComponent;
  @ViewChild('failedSwal')
  public readonly failedSwal!: SwalComponent;

  loginForm = new FormGroup({
    email: new FormControl('eve.holt@reqres.in', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    password: new FormControl('cityslicka', [Validators.required, Validators.pattern(/^(?=.*[a-z])[A-Za-z\d@$!%*?&]{8,}$/)]),
    // password: new FormControl('cityslicka', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
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
    this.authService.login(this.loginForm.value)
      .subscribe({
        next: data => {
          this.submitButton = {
            "text": "Sign In",
            "id": "signin",
            "type": "submit",
            "btnClasses": "btn btn-lg btn-primary w-100 mb-5"
          };
          if(data.error){
            this.failedSwal.fire();
          } else {
            this.successSwal.fire();
            localStorage.setItem('token', data.token);
            this.router.navigate(['/dashboard']);
          }
        }
      });
  }
}
