/// <reference types="@types/googlemaps" />
import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { AppConstant } from '../../../core/constants/app.constant';
import { GoogleapiService } from '../../../core/services/googleapi.service';
import { AsyncService } from '../../../core/services/async.service';

@Component({
  selector: 'app-google-address',
  templateUrl: './google-address.component.html',
  styleUrls: ['./google-address.component.scss']
})
export class GoogleAddressComponent implements OnInit {


  googleApiForm!: UntypedFormGroup;
  @Output() selectedAddress: EventEmitter<any> = new EventEmitter<any>();
  private reqObject = { url: '', query: '', placeid: '' };
  public countryEnum = AppConstant.countryEnum;
  @Input() addressTypeDisabled: boolean = false;
  @Input() cCode!: string ;
  autoComplete: any;
  google: any;

  constructor(public googleService: GoogleapiService, public asyncService: AsyncService) {
    this.googleApiForm = new UntypedFormGroup({
      'countryCode': new UntypedFormControl(['ca', 'us'], Validators.required),
      'searchField': new UntypedFormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
  }
  changeCountryType() {
    this.googleApiForm.controls['countryCode']?.setValue(this.googleApiForm.controls['countryCode'].value);
    this.googleApiForm.controls['searchField']?.setValue(null);
  }

  findAddress() {
    this.reqObject.query = this.googleApiForm.controls['searchField']?.value;
    const autoComplete = new google.maps.places.Autocomplete(<HTMLInputElement>document.getElementById('searchbox'));
    console.log(autoComplete, 'AUTOCOMPLETE')
    autoComplete.setOptions({ types: ['geocode'] });
    autoComplete.setComponentRestrictions({ 'country': ['ca', 'us'] });
    const ac = autoComplete;
    this.autoComplete = ac;
    const ref = this;
    autoComplete.addListener('place_changed', function () {
      const place = ac.getPlace();
      const response = ref.googleService.makeCustomAddressObject(place['address_components'])
      console.log('response===', response);
      
      ref.selectedAddress.emit(response)
    })
  }
}