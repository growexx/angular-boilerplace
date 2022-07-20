import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import * as moment from 'moment';
import { ConfirmPasswordValidator } from 'src/app/core/validators/confirm-password/ConfirmPasswordValidator';
import { PasswordValidator } from 'src/app/core/validators/password/PasswordValidator';
import { UsersService } from 'src/app/users/users.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerSwal')
  public readonly registerSwal!: SwalComponent;
  user: any = {};
  departments:any = [];

  datepickerConfig: any = {
    minDate: '2022-01-01',
    maxDate: '2022-11-30',
    disabled: false,
    opened: false,
    touchUi: false,
    panelClasses: 'panelClasses',
    startView:'month',
  }
  dropdownSettings:any= {
    placeholder: "Select Departments",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
    classes: "form-control form-control-lg form-control-solid",
    maxHeight:'300px',
    // maxBadgeLimit: 4,
  };

  registerForm = new FormGroup({
    firstName: new FormControl('Pruthvi', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('Dhamecha', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('pruthvi.dhamecha@gmail.com', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    dob: new FormControl(moment(), [Validators.required]),
    department: new FormControl('', [Validators.required]),
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

  constructor(private authService: AuthService, public usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe(res => {
      this.usersService.usersData = res.users;
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
    });
  }
  onRegister() {
    console.log(this.registerForm.value);
    this.submitButton = {
      text: "Please Wait...",
      type: "submit",
      btnClasses: "btn btn-lg btn-primary",
      iconClasses: 'fa fa-spinner fa-spin',
      iconPlace: 'after'
    };

    let birthDate = moment(this.registerForm.value.dob).format('YYYY-MM-DD');
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
      "birthDate": birthDate,
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
      });
  }
}
