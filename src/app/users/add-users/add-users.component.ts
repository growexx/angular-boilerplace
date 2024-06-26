import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { AppConstant } from '../../core/constants/app.constant';
import { AsyncService } from '../../core/services/async.service';
import { UserService } from '../user.service';
import { createUser } from '../usermodal';
@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {

  public firstFormGroup: UntypedFormGroup | any;
  public secondFormGroup: UntypedFormGroup | any;
  private userFormGroup: UntypedFormArray | any;
  public userModal: createUser | any;
  isLinear: boolean = false;
  imagePath: string = 'hello';
  userVal: createUser = {
    image: 'data:/image/jpeg;base64 jdkajska',
    firstName: 'Nirvi', lastName: 'Shah', phone: '87694657834', email: 'abc@growexx.com,',
    address: {
      address: 'ddf',
      city: 'toronto',
      state: 'DC',
      postalCode: 'wb3245',
      country: 'canada'
    }
  };
  firstFormVal: any;
  secondFormVal: any;
  public isaddressTypeDisabled: boolean = false;
  countryEnum = AppConstant
  .countryEnum;
  constructor(private formBuilder: UntypedFormBuilder, private userService: UserService, public asyncService: AsyncService) { }

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails() {
    this.firstFormGroup = new UntypedFormGroup({
      firstName: new UntypedFormControl('', [Validators.required]),
      lastName: new UntypedFormControl('', [Validators.required]),
      phone: new UntypedFormControl('', [Validators.required]),
      email: new UntypedFormControl('', [Validators.email, Validators.required])
    });
    this.secondFormGroup = this.formBuilder.group({
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: ['', Validators.required],
      customerAddressDTO: new UntypedFormArray([])
    });
  }

  goToStep2() {
    const firstFormVal = this.firstFormGroup.value;
    const control = this.secondFormGroup.get("customerAddressDTO") as UntypedFormArray;
    control.push(this.getAddressForm)
    this.getAllControls();

  }

  goToStep3() {
    this.secondFormVal = this.secondFormGroup.value;
    this.firstFormVal = this.firstFormGroup.value;
  }

  get getAddressForm() {
    return new UntypedFormGroup({
      id: new UntypedFormControl(null),
      addressLine1: new UntypedFormControl(['', Validators.required]),
      addressLine2: new UntypedFormControl(['', Validators.required]),
      city: new UntypedFormControl(['', Validators.required]),
      state: new UntypedFormControl(['', Validators.required]),
      postalCode: new UntypedFormControl(['', Validators.required]),
      country: new UntypedFormControl(['ca', Validators.required]),
    })
  }

  getAllControls() {
    const firstName = this.firstFormGroup.value['firstName']
  }



  addUser() {
    console.log(this.imagePath)
    this.userVal.image = this.userVal.image;
    this.userVal.firstName = this.firstFormGroup.value['firstName'];
    this.userVal.lastName = this.firstFormGroup.value['lastName'];
    this.userVal.phone = this.firstFormGroup.value['phone'];
    this.userVal.address.address = this.secondFormGroup.value['addressLine1'];
    this.userVal.address.city = this.secondFormGroup.value['city'];
    this.userVal.address.state = this.secondFormGroup.value['state'];
    this.userVal.address.country = this.secondFormGroup.value['country'];

    this.userService.createUser(this.userVal).subscribe({
      next: (res) => {
        const data = _.cloneDeep(res);
      }
    })
  }

  setSelectedAddress(address: any, index: number) {
    this.secondFormGroup.controls['addressLine1']?.setValue((address['street_number'] + ',' + address['route']) ? address['street_number'] + ',' + address['route'] : '')
    this.secondFormGroup.controls['addressLine2']?.setValue((address['administrative_area_level_2']) ? address['administrative_area_level_2'] : '')
    this.secondFormGroup.controls['city']?.setValue((address['locality']) ? address['locality'] : '')
    this.secondFormGroup.controls['state']?.setValue((address['administrative_area_level_1']) ? address['administrative_area_level_1'] : '')
    this.secondFormGroup.controls['postalCode']?.setValue((address['postal_code']) ? address['postal_code'] : '')
    this.secondFormGroup.controls['country'].setValue((address['country']) ? address['country'] : '')
  }


  changeImage(event: any) {
    this.userVal.image = event;
  }

}
