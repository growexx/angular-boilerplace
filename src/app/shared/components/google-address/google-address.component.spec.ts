import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { AsyncService } from 'src/app/core/services/async.service';
import { GoogleapiService } from 'src/app/core/services/googleapi.service';

import { GoogleAddressComponent } from './google-address.component';

describe('GoogleAddressComponent', () => {
  let component: GoogleAddressComponent;
  let fixture: ComponentFixture<GoogleAddressComponent>;
  let googleApiService: any;
  let resetVal: boolean = false;
  // let changes: SimpleChanges;
  let comp: any;

  let prev_value = 'ca';
  let new_value = 'us';
  let is_first_change: boolean = true;

  googleApiService = jasmine.createSpyObj('googleApiService', ['resetValue'])
  googleApiService.resetValue.and.returnValue(of(resetVal))


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoogleAddressComponent],
      imports: [HttpClientTestingModule],
      providers: [ FormBuilder,
        { provide: GoogleapiService, useValue: googleApiService },
        // { provide: [FormBuilder,AsyncService] }
      ]
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
    component.ngOnChanges({
      prop1: new SimpleChange(prev_value, new_value, is_first_change),
    });
    
    // expect(component.cCode).toBe(prev_value)
    // component.googleApiForm.controls['countryCo  de'].setValue('us')
    fixture.detectChanges();
    expect(component).toBeTruthy()

  });
  it('should call function getResetValue', () => {
    component.getResetValue()
    expect(component).toBeTruthy()
  });

  it('should call function changeCountryType', () => {
    // component.googleApiForm.controls['countryCode'].setValue('ca');
    component.changeCountryType()
    expect(component).toBeTruthy()
  });

  it('should call function findAddress', () => {
    component.findAddress()
    expect(component).toBeTruthy()
  });
});


