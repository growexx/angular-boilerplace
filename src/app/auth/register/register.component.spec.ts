import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SwalComponent, SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AuthsidebarComponent } from 'src/app/includes/authsidebar/authsidebar.component';
import { ConfirmPasswordValidator } from 'src/app/validators/confirm-password/ConfirmPasswordValidator';
import { ButtonComponent } from 'src/app/_shared/button/button.component';
import { PasswordStrengthBarComponent } from 'src/app/_shared/password-strength-bar/password-strength-bar.component';
import { AuthService } from '../auth.service';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let httpTestingController: HttpTestingController;
  let authService: AuthService;
  let submitButton: any;
  let passwordStrengthBar: PasswordStrengthBarComponent;
  let regSwal: SwalComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule, FormsModule, SweetAlert2Module.forRoot()],
      declarations: [RegisterComponent, AuthsidebarComponent, ButtonComponent, PasswordStrengthBarComponent],
      providers: [{ provide: PasswordStrengthBarComponent }],
    })
      .compileComponents();
  });

  beforeEach(() => {
    submitButton = {
      text: "Please Wait...",
      type: "submit",
      btnClasses: "btn btn-lg btn-primary",
      iconClasses: 'fa fa-spinner fa-spin',
      iconPlace: 'after'
    };
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    authService = fixture.debugElement.injector.get(AuthService);
    fixture.detectChanges();
    passwordStrengthBar = TestBed.inject(PasswordStrengthBarComponent);
    httpTestingController = TestBed.inject(HttpTestingController);
    // regSwal = TestBed.get(SwalComponent)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should called onRegister() and return success', (() => {
    component.user = {
      email: 'eve.holt@reqres.in',
      password: 'pistol'
    };
    component.onRegister();
    fixture.detectChanges();
    
    expect(component.submitButton).withContext("button content should be changed").toEqual(submitButton);
    submitButton = {
      "text": "Sign Up",
      "id": "signup",
      "type": "submit",
      "btnClasses": "btn btn-lg btn-primary"
    }
    const expectedResponse = { "id": 4, "token": "QpwL5tke4Pnpja7X4" };
    const req = httpTestingController.expectOne('https://reqres.in/api/register');
    expect(req.request.method).toEqual('POST');
    req.flush(expectedResponse);
    expect(component.submitButton).withContext("button content should be changed").toEqual(submitButton);
  }));

  it('should match password and confirmpassword', (() => {
    component.registerForm.controls['password'].setValue('asdf@123');
    component.registerForm.controls['confirmpassword'].setValue('asdf@123');
    expect(component.registerForm.valid).toBeFalsy();

    component.registerForm.controls['password'].setValue('Asdf@123');
    component.registerForm.controls['confirmpassword'].setValue('Asdf@123');
    expect(component.registerForm.valid).toBeTruthy();
  }));

  it('should validate form fields with validations', (() => {
    component.registerForm.controls['firstName'].setValue('Pr');
    expect(component.registerForm.valid).withContext('firstName should have minimum 3 length').toBeFalsy();
    component.registerForm.controls['firstName'].setValue('Pruthvi');
    expect(component.registerForm.valid).withContext('firstName should have minimum 3 length').toBeTruthy();

    component.registerForm.controls['lastName'].setValue('Dh');
    expect(component.registerForm.valid).withContext('lastName should have minimum 3 length').toBeFalsy();
    component.registerForm.controls['lastName'].setValue('Dhamecha');
    expect(component.registerForm.valid).withContext('lastName should have minimum 3 length').toBeTruthy();

    component.registerForm.controls['email'].setValue('pruthvi.d@');
    expect(component.registerForm.valid).withContext('email should be in proper format').toBeFalsy();
    component.registerForm.controls['email'].setValue('pruthvi@gmail.com');
    expect(component.registerForm.valid).withContext('email should be in proper format').toBeTruthy();

    component.registerForm.controls['password'].setValue('pruthvi.d@123');
    component.registerForm.controls['confirmpassword'].setValue('pruthvi.d@123');
    expect(component.registerForm.valid).withContext('password should contain at least 1 uppercase,1 lowercase,1 special character and 1 digit').toBeFalsy();
    
    component.registerForm.controls['password'].setValue('Pruthvi@123');
    component.registerForm.controls['confirmpassword'].setValue('Pruthvi@123');
    expect(component.registerForm.valid).withContext('password should contain at least 1 uppercase,1 lowercase,1 special character and 1 digit').toBeTruthy();

    component.registerForm.controls['termsAndConditions'].setValue(false);
    expect(component.registerForm.valid).withContext('should have accept terms and confitions').toBeFalsy();
    component.registerForm.controls['termsAndConditions'].setValue(true);
    expect(component.registerForm.valid).withContext('should have accept terms and confitions').toBeTruthy();
    
    component.registerForm.controls['password'].setValue('Pruthvi@123');
    component.registerForm.controls['confirmpassword'].setValue('Pruthvi@1234');
    expect(component.registerForm.errors?.['misMatch']).withContext('password and confirm password should be same').toBeTruthy();
  }));

  it('should validate password field with password-strength-bar', (() => {
    const passFixture = TestBed.createComponent(PasswordStrengthBarComponent);
    const passComponent = passFixture.componentInstance;
    component.registerForm.controls['password'].setValue('Asdf@123');
    let passwordToCheck = component.registerForm.controls['password'].value;
    passComponent.ngOnChanges({
      passwordToCheck: new SimpleChange(passwordToCheck,passwordToCheck,false)
    })
    passFixture.detectChanges();
    let strengthBar = Object.values(passComponent).filter(key => key.includes("#DDD"));
    expect(strengthBar.length).withContext('password\'s strength should be strong').toBeLessThanOrEqual(2);
  }));
});
