

import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import moment from 'moment';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { UsersService } from '../../users/users.service';
import { ConfirmPasswordValidator } from '../../core/validators/confirm-password/ConfirmPasswordValidator';
import { PasswordValidator } from '../../core/validators/password/PasswordValidator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user: any = {};
  departments: any = [];
  error_message:any = '';
  toast:any;

  datepickerConfig: any = {
    minDate: '2022-01-01',
    maxDate: '2022-11-30',
    disabled: false,
    opened: false,
    touchUi: false,
    panelClasses: 'panelClasses',
    startView: 'month',
  }
  dropdownSettings: any = {
    placeholder: "Select Departments",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
    classes: "form-control form-control-lg form-control-solid",
    maxHeight: '300px',
    maxBadgeLimit: 1,
  };

  registerForm = new UntypedFormGroup({
    firstName: new UntypedFormControl('Pruthvi', [Validators.required, Validators.minLength(3)]),
    lastName: new UntypedFormControl('Dhamecha', [Validators.required, Validators.minLength(3)]),
    email: new UntypedFormControl('pruthvi.dhamecha@gmail.com', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    dob: new UntypedFormControl(moment(), [Validators.required]),
    department: new UntypedFormControl('', [Validators.required]),
    password: new UntypedFormControl('Asdf@1234', [Validators.required, PasswordValidator(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
    confirmpassword: new UntypedFormControl('Asdf@1234', [Validators.required, PasswordValidator(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
    termsAndConditions: new UntypedFormControl(true, [Validators.requiredTrue]),
  }, { validators: ConfirmPasswordValidator() });

  submitButton: any = {
    "text": "Sing Up",
    "id": "signup",
    "type": "submit",
    "btnClasses": "btn btn-lg btn-primary"
  }

  constructor(private authService: AuthService, public usersService: UsersService, private router: Router) { }

  getDepartments(data: any) {
    this.registerForm.value.department = data;
  }

  getDateOfBirth(data: any) {
    let birthDate = moment(data).format('YYYY-MM-DD');
    this.registerForm.value.dob = birthDate;
  }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe({
      next: (data: any) => {
        this.usersService.usersData = data.users;
        this.usersService.usersData.filter((item: any) => {
          if (!this.departments.find((ele: any) => ele.itemName === item.company.department)) {
            this.departments.push({
              id: item.id,
              image: item.image,
              itemName: item.company.department,
              isSelected: false
            });
          }
        });
      },
      error: (error: any) => {
        this.errorToast(error);
      }
    });
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
      "id": 1,
      "firstName": this.registerForm.value.firstName,
      "lastName": this.registerForm.value.lastName,
      "maidenName": "Smitham",
      "age": 50,
      "gender": "male",
      "email": this.registerForm.value.email,
      "phone": "+63 791 675 8914",
      "username": this.registerForm.value.firstName.toLowerCase() + this.registerForm.value.lastName.toLowerCase(),
      "password": this.registerForm.value.password,
      "birthDate": this.registerForm.value.dob,
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
        "department": this.registerForm.value.department,
        "name": "Blanda-O'Keefe",
        "title": "Help Desk Operator"
      },
      "ein": "20-9487066",
      "ssn": "661-64-2976",
      "userAgent": "Mozilla/5.0 ..."
    };

    this.authService.register(this.user).subscribe({
        next: data => {
          this.submitButton = {
            "text": "Sign Up",
            "id": "signup",
            "type": "submit",
            "btnClasses": "btn btn-lg btn-primary"
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
            title: "You have successfully registered!",
          });
          this.router.navigate(['/']);
        },
        error: (error: any) => {
          this.errorToast(error);
          this.submitButton = {
            "text": "Sign Up",
            "id": "signup",
            "type": "submit",
            "btnClasses": "btn btn-lg btn-primary"
          };
        }
      });
  }
  errorToast(error: any){
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
