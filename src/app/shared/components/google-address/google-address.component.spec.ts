import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoogleapiService } from 'src/app/core/services/googleapi.service';

import { GoogleAddressComponent } from './google-address.component';

describe('GoogleAddressComponent', () => {
  let component: GoogleAddressComponent;
  let fixture: ComponentFixture<GoogleAddressComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoogleAddressComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check onChanges value', () => {
    let prev_value = 'ca';
    let new_value = 'us';
    let is_first_change: boolean = false;

    component.ngOnChanges({
      prop1: new SimpleChange(prev_value, new_value, is_first_change),
    });
  })
  it('should call function getResetValue', () => {
    const response: any = [];
    const array: any = [];
    component.getResetValue()
  })
  it('should call function changeCountryType', () => {
    component.googleApiForm.controls['countryCode']?.setValue(component.googleApiForm.controls['countryCode'].value)
    component.changeCountryType()
  })
  it('should call function findAddress', () => {
  var google: any;

    component.findAddress()    
  })
});


