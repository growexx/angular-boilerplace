import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import Swal from 'sweetalert2';
import { throwError } from 'rxjs';
import { AuthsidebarComponent } from 'src/app/shared/layout/authsidebar/authsidebar.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let location: Location;
  let router: Router;
  let submitButton: any;
  let expectedResponse: any;
  let expectedErrorResponse:any;
  let loginSpyOn:any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        {
          path: 'dashboard',
          component: DashboardComponent,
        }
      ]), HttpClientTestingModule, ReactiveFormsModule, FormsModule, SweetAlert2Module.forRoot()],
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
    expectedResponse = {
      "id": 15,
      "username": "kminchelle",
      "email": "kminchelle@qq.com",
      "firstName": "Jeanne",
      "lastName": "Halvorson",
      "gender": "female",
      "image": "https://robohash.org/autquiaut.png?size=50x50&set=set1",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs"
    };
    expectedErrorResponse = {
      "status": 400,
      "error": {
        "message": ""
      }
    };
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
      email: 'kminchelle',
      password: '0lelplR'
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
    const req = httpTestingController.expectOne(`${environment.apiUrl}auth/login`);
    expect(req.request.method).toEqual('POST');
    req.flush(expectedResponse);
    expect(Swal.isVisible()).toBeTruthy();
    expect(component.submitButton).withContext("button content should be changed").toEqual(submitButton);
  }));

  it('should called onLogin() and return failed', fakeAsync(() => {
    loginSpyOn = spyOn(authService,'login')
    loginSpyOn.and.returnValue(throwError(expectedErrorResponse));
    component.onLogin();
    expect(Swal.isVisible()).toBeTruthy();
    
    expectedErrorResponse.status = 401;
    loginSpyOn.and.returnValue(throwError(expectedErrorResponse));
    component.onLogin();
    expect(Swal.isVisible()).toBeTruthy();

    expectedErrorResponse.status = 403;
    loginSpyOn.and.returnValue(throwError(expectedErrorResponse));
    component.onLogin();
    expect(Swal.isVisible()).toBeTruthy();

    expectedErrorResponse.status = 404;
    loginSpyOn.and.returnValue(throwError(expectedErrorResponse));
    component.onLogin();
    expect(Swal.isVisible()).toBeTruthy();

    expectedErrorResponse.status = 502;
    loginSpyOn.and.returnValue(throwError(expectedErrorResponse));
    component.onLogin();
    expect(Swal.isVisible()).toBeTruthy();

    expectedErrorResponse.error.message = "Invalid credentials";    
    loginSpyOn.and.returnValue(throwError(expectedErrorResponse));
    component.onLogin();
    expect(Swal.isVisible()).toBeTruthy();
    fixture.detectChanges();
    submitButton = {
      "text": "Sign In",
      "id": "signin",
      "type": "submit",
      "btnClasses": "btn btn-lg btn-primary w-100 mb-5"
    }
    expect(component.submitButton).withContext("button content should be changed").toEqual(submitButton);
    flush(100);
  }));
});