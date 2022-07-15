import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterTestingModule } from '@angular/router/testing';
import { SwalComponent, SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AuthsidebarComponent } from 'src/app/includes/authsidebar/authsidebar.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { DatepickerComponent } from 'src/app/shared/components/datepicker/datepicker.component';
import { PasswordStrengthBarComponent } from 'src/app/shared/components/password-strength-bar/password-strength-bar.component';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let httpTestingController: HttpTestingController;
  let authService: AuthService;
  let submitButton: any;
  let passwordStrengthBar: PasswordStrengthBarComponent;
  let expectedResponse: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        HttpClientTestingModule, 
        ReactiveFormsModule,
        FormsModule,
        MatDatepickerModule,
        MatNativeDateModule, 
        SweetAlert2Module.forRoot()],
      declarations: [RegisterComponent, AuthsidebarComponent, ButtonComponent, PasswordStrengthBarComponent, DatepickerComponent],
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
    expectedResponse = {
      "id": 101,
      "firstName": "Pruthvi",
      "lastName": "Dhamecha",
      "maidenName": "Smitham",
      "age": 50,
      "gender": "male",
      "email": "pruthvi.dhamecha@gmail.com",
      "phone": "+63 791 675 8914",
      "username": "pruthvidhamecha",
      "password": "Asdf@1234",
      "birthDate": "1999-03-31",
      "image": "https://robohash.org/hicveldicta.png?size=50x50&set=set1",
      "bloodGroup": "A−",
      "height": 189,
      "weight": 75.4,
      "eyeColor": "Green",
      "hair": {
        "color": "Black",
        "type": "Strands"
      },
      "domain": "slashdot.org",
      "ip": "117.29.86.254",
      "address": {
        "address": "1745 T Street Southeast",
        "city": "Washington",
        "coordinates": {
          "lat": 38.867033,
          "lng": -76.979235
        },
        "postalCode": "20020",
        "state": "DC"
      },
      "macAddress": "13:69:BA:56:A3:74",
      "university": "Capitol University",
      "bank": {
        "cardExpire": "06/22",
        "cardNumber": "50380955204220685",
        "cardType": "maestro",
        "currency": "Peso",
        "iban": "NO17 0695 2754 967"
      },
      "company": {
        "address": {
          "address": "629 Debbie Drive",
          "city": "Nashville",
          "coordinates": {
            "lat": 36.208114,
            "lng": -86.58621199999999
          },
          "postalCode": "37076",
          "state": "TN"
        },
        "department": "Marketing",
        "name": "Blanda-O'Keefe",
        "title": "Help Desk Operator"
      },
      "ein": "20-9487066",
      "ssn": "661-64-2976",
      "userAgent": "Mozilla/5.0 ..."
    };
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
    const req = httpTestingController.expectOne(`${environment.apiUrl}users/add`);
    expect(req.request.method).toEqual('POST');
    req.flush(expectedResponse);
    expect(component.submitButton).withContext("button content should be changed").toEqual(submitButton);
  }));

  it('should match password and confirmpassword', (() => {

    component.registerForm.controls['password'].setValue('123456');
    component.registerForm.controls['confirmpassword'].setValue('123456');
    fixture.detectChanges();
    expect(component.registerForm.valid).toBeFalsy();

    component.registerForm.controls['password'].setValue('Asdf@12345678');
    component.registerForm.controls['confirmpassword'].setValue('Asdf@12345678');
    fixture.detectChanges();
    expect(component.registerForm.valid).toBeTruthy();

    component.registerForm.controls['password'].setValue(null);
    component.registerForm.controls['confirmpassword'].setValue(null);
    expect(component.registerForm.valid).toBeFalsy();
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
      passwordToCheck: new SimpleChange(passwordToCheck, passwordToCheck, false)
    })
    passFixture.detectChanges();
    let strengthBar = Object.values(passComponent).filter(key => key.includes("#DDD"));
    expect(strengthBar.length).withContext('password\'s strength should be strong').toBeLessThanOrEqual(2);
  }));
});
