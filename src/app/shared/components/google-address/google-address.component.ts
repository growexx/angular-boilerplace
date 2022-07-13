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

  googleApiForm = new FormGroup({
    'countryCode': new FormControl('CA', Validators.required),
    'searchField': new FormControl(null, Validators.required)
  })

  @Output() countrySelectionChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectedAddress: EventEmitter<any> = new EventEmitter<any>();
  private reqObject = { url: '', query: '', placeid: '' };
  public countryEnum = countryEnum;
  @Input() addressTypeDisabled: boolean = false;
  @Input() cCode: string = 'CA';
  constructor(private googleService: GoogleapiService, public asyncService: AsyncService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if(changes['cCode'] && changes['cCode']['currentValue']){
      this.cCode = changes['cCode']['currentValue'];
      this.googleApiForm.get('countryCode')?.setValue(this.cCode)
    }
  }

  ngOnInit(): void {
  }

  changeCountryType() {
    console.log('called')
    this.googleApiForm.get('countryCode')?.setValue(this.googleApiForm.controls['countryCode'].value);
    this.googleApiForm.get('searchField')?.setValue(null);
    this.countrySelectionChanged.emit(this.googleApiForm.controls['countryCode'].value)
  }

  findAddress() {
    this.reqObject.query = this.googleApiForm.get('searchField')?.value;
    const autoComplete = new google.maps.places.Autocomplete(<HTMLInputElement>document.getElementById('searchbox'));
    autoComplete.setOptions({ types: ['geocode'] });
    autoComplete.setComponentRestrictions({ 'country': [this.googleApiForm.value['countrycode']] });
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


