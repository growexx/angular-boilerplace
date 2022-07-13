/// <reference types="@types/googlemaps" />
import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { GoogleapiService } from 'src/app/core/services/googleapi.service';
import { countryEnum } from 'src/app/core/constants/constant';
import { AsyncService } from 'src/app/core/services/async.service';

@Component({
  selector: 'app-google-address',
  templateUrl: './google-address.component.html',
  styleUrls: ['./google-address.component.scss']
})
export class GoogleAddressComponent implements OnInit, OnChanges {


  googleApiForm!: FormGroup;
  @Output() countrySelectionChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectedAddress: EventEmitter<any> = new EventEmitter<any>();
  private reqObject = { url: '', query: '', placeid: '' };
  public countryEnum = countryEnum;
  @Input() addressTypeDisabled: boolean = false;
  @Input() cCode: string = 'ca';

  constructor(private googleService: GoogleapiService, public asyncService: AsyncService) {
   this.googleApiForm = new FormGroup({
      'countryCode': new FormControl(['ca','us'], Validators.required),
      'searchField': new FormControl(null, Validators.required)
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if (changes['cCode'] && changes['cCode']['currentValue']) {
      this.cCode = changes['cCode']['currentValue'];
      this.googleApiForm.controls['countryCode']?.setValue(this.cCode)
    }
  }

  ngOnInit(): void {
    this.getResetValue()
    console.log(this.googleApiForm)
  }
  getResetValue(){
    this.googleService.resetValue.subscribe((res)=>{
      if(res===true){
        this.googleApiForm.controls['searchField']?.reset();
      }
    })
  }

  changeCountryType() {
    console.log('called')
    this.googleApiForm.controls['countryCode']?.setValue(this.googleApiForm.controls['countryCode'].value);
    this.googleApiForm.controls['searchField']?.setValue(null);
    this.countrySelectionChanged.emit(this.googleApiForm.controls['countryCode'].value)
  }

  findAddress() {
    this.reqObject.query = this.googleApiForm.controls['searchField']?.value;
    const autoComplete = new google.maps.places.Autocomplete(<HTMLInputElement>document.getElementById('searchbox'));
    autoComplete.setOptions({ types: ['geocode'] });
    autoComplete.setComponentRestrictions({ 'country': ['ca', 'us'] });
    const ac = autoComplete;
    const ref = this;
    autoComplete.addListener('place_changed', function () {
      const place = ac.getPlace();
      const response = ref.googleService.makeCustomAddressObject(place['address_components'])
      console.log(response)
      ref.selectedAddress.emit(response)
    })
  }

}


