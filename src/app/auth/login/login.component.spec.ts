import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { AuthsidebarComponent } from 'src/app/includes/authsidebar/authsidebar.component';
import { SwalComponent, SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { RegisterComponent } from '../register/register.component';
import { ResetpasswordComponent } from '../resetpassword/resetpassword.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let location: Location;
  let router: Router;
  let submitButton: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule, FormsModule, SweetAlert2Module.forRoot(),
        RouterTestingModule.withRoutes([
          {
            path: '',
            component: LoginComponent
          }, {
            path: 'sign-up',
            component: RegisterComponent
          }, {
            path: 'password-reset',
            component: ResetpasswordComponent
          }, {
            path: 'dashboard',
            component: DashboardComponent
          }
        ])
      ],
      declarations: [LoginComponent, AuthsidebarComponent, ButtonComponent],
      providers: [{ provide: AuthService }],
    })
      .compileComponents();
  });

  beforeEach(() => {
    submitButton = {
      text: "Please Wait...",
      type: "submit",
      btnClasses: "btn btn-lg btn-primary w-100 mb-5",
      iconClasses: 'fa fa-spinner fa-spin',
      iconPlace: 'after'
    };

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.debugElement.componentInstance;
    authService = fixture.debugElement.injector.get(AuthService);
    fixture.detectChanges();
    httpTestingController = TestBed.inject(HttpTestingController);
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate login form', () => {
    component.loginForm.controls['email'].setValue('test');
    component.loginForm.controls['password'].setValue('test');
    expect(component.loginForm.valid).toBeFalsy();

    component.loginForm.controls['email'].setValue('eve.holt@reqres.in');
    component.loginForm.controls['password'].setValue('cityslicka');
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should called onLogin() and return success', (() => {
    const user = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    };
    component.loginForm.controls['email'].setValue(user.email);
    component.loginForm.controls['password'].setValue(user.password);
    component.onLogin();
    fixture.detectChanges();

    expect(component.submitButton).withContext("button content should be changed").toEqual(submitButton);
    submitButton = {
      "text": "Sign In",
      "id": "signin",
      "type": "submit",
      "btnClasses": "btn btn-lg btn-primary w-100 mb-5"
    }
    const expectedResponse = { token: 'QpwL5tke4Pnpja7X4' };
    const req = httpTestingController.expectOne('https://reqres.in/api/login');
    expect(req.request.method).toEqual('POST');
    req.flush(expectedResponse);
    expect(component.submitButton).withContext("button content should be changed").toEqual(submitButton);
  }));
});
