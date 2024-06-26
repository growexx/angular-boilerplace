import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UntypedFormBuilder } from '@angular/forms';
import { observable, of } from 'rxjs';
import { GoogleAddressComponent } from './google-address.component';
import { GoogleapiService } from '../../../core/services/googleapi.service';

describe('GoogleAddressComponent', () => {
  let component: GoogleAddressComponent;
  let fixture: ComponentFixture<GoogleAddressComponent>;
  let googleApiService: any;
  let resetVal: boolean = false;
  let comp: any;
  let httpTestingController: HttpTestingController;


  let prev_value = 'ca';
  let new_value = 'us';
  let is_first_change: boolean = true;

  const autocomplete = {
    componentRestrictions: {country: ['ca','us']},
    gm_accessors_:{},
    gm_bindings_: {},
    types: ["geocode"]
  }


  googleApiService = jasmine.createSpyObj('googleApiService', ['resetValue'])
  googleApiService.resetValue.and.returnValue(of(false));


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoogleAddressComponent],
      imports:[HttpClientTestingModule],
      providers: [ UntypedFormBuilder,
        { provide: GoogleapiService, useValue: googleApiService },
      ],
      
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


  it('should call function changeCountryType', () => {
    component.changeCountryType()
    expect(component).toBeTruthy()
  });

  it('should call function findAddress', () => {
    component.findAddress()
    expect(component).toBeTruthy()
  });

});


