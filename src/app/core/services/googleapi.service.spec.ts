import { HttpHeaders } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';

import { GoogleapiService } from './googleapi.service';

describe('GoogleapiService', () => {
  let service: GoogleapiService;

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
    expect(service).toBeTruthy();
  })

  it('should call function makeCustomAddressObject and check result for country to be equal to canada', fakeAsync(() => {
    service.result=[{ "types": "street_number"},{ "types": "route"}]
    const array:any = [];
    
    spyOn(array,service.makeCustomAddressObject(array))
    expect(service.result.length).toBeGreaterThanOrEqual(1)
    expect(service.result).toEqual('New York')
  }));

  it('should call function makeCustomAddressObject and check result for country to be equal to canada', fakeAsync(() => {
    service.result={ "country": "Canada"}
    service.result={ "country": "CANADA"}
    const array:any = [];
    spyOn(array,service.makeCustomAddressObject(array)).and.returnValue(of(service.result));
  }));

  it('should call function makeCustomAddressObject and check result for country to be equal to US', fakeAsync(() => {
    service.result={ "country": "usa"}
    service.result={ "country": "USA"}
    const array:any = [];
    spyOn(array,service.makeCustomAddressObject(array)).and.returnValue(of(service.result));

  }));

  it('should call function makeCustomAddressObject and check result for country to be equal to US', fakeAsync(() => {
    service.result={}
    const array:any = [];
    spyOn(array,service.makeCustomAddressObject(array)).and.returnValue(of(service.result));

  }));


  it('should call function makeCustomAddress and check result for country to be equal to canada', fakeAsync(() => {
    service.result={ "country": "Canada"}
    service.result={ "country": "CANADA"}
    const array:any = [];
    spyOn(array,service.makeCustomAddress(array)).and.returnValue(of(service.result));
  }));

  it('should call function makeCustomAddress and check result for country to be equal to US', fakeAsync(() => {
    service.result={ "country": "usa"}
    service.result={ "country": "USA"}
    const array:any = [];
    spyOn(array,service.makeCustomAddress(array)).and.returnValue(of(service.result));

  }));
  it('should call function makeCustomAddressObject and check result for country to be equal to US', fakeAsync(() => {
    service.result={}
    const array:any = [];
    spyOn(array,service.makeCustomAddress(array)).and.returnValue(of(service.result));

  }));
});

