import { HttpHeaders } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';

import { GoogleapiService } from './googleapi.service';

describe('GoogleapiService', () => {
  let service: GoogleapiService;
  let googleService: any;
  const addressArray = [
    {
      long_name: "2348",
      short_name: "2348",
      types: ['street_number']
    }
  ]

  const countryArray = [
    {
      long_name: "Canada",
      short_name: "CA",
      types: ['country', 'political']
    }
  ]

  const countryArrayForUSA = [
    {
      long_name: "United States",
      short_name: "US",
      types: ['country', 'political']
    }
  ]

  const result = {
    aadministrative_area_level_1: "QC",
    administrative_area_level_2: "Montréal",
    administrative_area_level_3: "Montréal",
    country: "Canada",
    locality: "Montréal",
    postal_code: "H2Y 0A8",
    route: "R. Saint-François-Xavier",
    street_number: "888",
    sublocality_level_1: "Ville-Marie"
  };

  googleService = jasmine.createSpyObj('service', ['makeCustomAddressObject']);
  googleService.makeCustomAddressObject.and.returnValue(of(result))


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GoogleapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call function get address', () => {
    service.getAddress();
    expect(service).toBeTruthy();
  })

  it('should call function getActualAddress', () => {
    service.getActualAddress();
    expect(service).toBeTruthy()
  })

//Function call for makeCustomAddressObject

  it('should call function makeCustomAddressObject', () => {
    service.makeCustomAddressObject(countryArray);
    expect(service).toBeTruthy()
  })
  it('should call function makeCustomAddressObject', () => {
    service.makeCustomAddressObject(countryArray);
    expect(service).toBeTruthy()
  })
  it('should call function makeCustomAddressObject', () => {
    service.makeCustomAddressObject(countryArray);
    expect(service).toBeTruthy()
  })
  it('should call function makeCustomAddressObject', () => {
    service.makeCustomAddressObject(countryArray);
    expect(service).toBeTruthy()
  })

  it('should call function makeCustomAddress', () => {
    service.makeCustomAddress(addressArray);
    expect(service).toBeTruthy()
  })


  //Call for USA
  it('should call function makeCustomAddressObject', () => {
    service.makeCustomAddressObject(countryArrayForUSA);
    expect(service).toBeTruthy()
  })
  it('should call function makeCustomAddressObject', () => {
    service.makeCustomAddressObject(countryArrayForUSA);
    expect(service).toBeTruthy()
  })
  it('should call function makeCustomAddressObject', () => {
    service.makeCustomAddressObject(countryArrayForUSA);
    expect(service).toBeTruthy()
  })
  it('should call function makeCustomAddressObject', () => {
    service.makeCustomAddressObject(countryArrayForUSA);
    expect(service).toBeTruthy()
  })


  it('should call function makeCustomAddressObject', () => {
    service.makeCustomAddressObject(addressArray);
    expect(service).toBeTruthy()
  })
  

  //Function call for makeCustomAddress

  it('should call function makeCustomAddress', () => {
    service.makeCustomAddress(countryArray);
    expect(service).toBeTruthy()
  })
  it('should call function makeCustomAddress', () => {
    service.makeCustomAddress(countryArray);
    expect(service).toBeTruthy()
  })
  it('should call function makeCustomAddress', () => {
    service.makeCustomAddress(countryArray);
    expect(service).toBeTruthy()
  })
  it('should call function makeCustomAddress', () => {
    service.makeCustomAddress(countryArray);
    expect(service).toBeTruthy()
  })

  it('should call function makeCustomAddress', () => {
    service.makeCustomAddress(addressArray);
    expect(service).toBeTruthy()
  })


  //Call for USA
  it('should call function makeCustomAddress', () => {
    service.makeCustomAddress(countryArrayForUSA);
    expect(service).toBeTruthy()
  })
  it('should call function makeCustomAddress', () => {
    service.makeCustomAddress(countryArrayForUSA);
    expect(service).toBeTruthy()
  })
  it('should call function makeCustomAddress', () => {
    service.makeCustomAddress(countryArrayForUSA);
    expect(service).toBeTruthy()
  })
  it('should call function makeCustomAddress', () => {
    service.makeCustomAddress(countryArrayForUSA);
    expect(service).toBeTruthy()
  })

  it('should call function makeCustomAddress', () => {
    service.makeCustomAddress(addressArray);
    expect(service).toBeTruthy()
  })
  
});

