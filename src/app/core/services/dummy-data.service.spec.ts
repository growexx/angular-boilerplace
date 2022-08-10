import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

import { DummyDataService } from './dummy-data.service';

describe('DummyDataService', () => {
  let service: DummyDataService;
let httpMock:HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [ DummyDataService ]
    });
    service = TestBed.inject(DummyDataService);
    httpMock = TestBed.inject(HttpTestingController);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should return events data', () => {
  //   let mockResponse = [
  //     {
  //       "id": 1,
  //       "todo": "Do something nice for someone I care about",
  //       "completed": true,
  //       "userId": 26
  //     },
  //   ]
  //   let response:any;
  //   spyOn(service,'getAllTodos').and.returnValue(of(mockResponse))
  //   service.getAllTodos().subscribe(res=>{response=res});
  //   expect(response).toEqual(mockResponse);
   
  // }); 
  // it('should return user list data', () => {
  //   let mockResponse = {
  //     "users": [
  //       {
  //         "id": 1,
  //         "firstName": "Terry",
  //         "lastName": "Medhurst",
  //         "maidenName": "Smitham",
  //         "age": 50,
  //         "gender": "male",
  //         "email": "atuny0@sohu.com",
  //         "phone": "+63 791 675 8914",
  //         "username": "atuny0",
  //         "password": "9uQFF1Lh",
  //         "birthDate": "2000-12-25",
  //         "image": "https://robohash.org/hicveldicta.png?size=50x50&set=set1",
  //         "bloodGroup": "A−",
  //         "height": 189,
  //         "weight": 75.4,
  //         "eyeColor": "Green",
  //         "hair": {
  //           "color": "Black",
  //           "type": "Strands"
  //         },
  //         "domain": "slashdot.org",
  //         "ip": "117.29.86.254",
  //         "address": {
  //           "address": "1745 T Street Southeast",
  //           "city": "Washington",
  //           "coordinates": {
  //             "lat": 38.867033,
  //             "lng": -76.979235
  //           },
  //           "postalCode": "20020",
  //           "state": "DC"
  //         },
  //         "macAddress": "13:69:BA:56:A3:74",
  //         "university": "Capitol University",
  //         "bank": {
  //           "cardExpire": "06/22",
  //           "cardNumber": "50380955204220685",
  //           "cardType": "maestro",
  //           "currency": "Peso",
  //           "iban": "NO17 0695 2754 967"
  //         },
  //         "company": {
  //           "address": {
  //             "address": "629 Debbie Drive",
  //             "city": "Nashville",
  //             "coordinates": {
  //               "lat": 36.208114,
  //               "lng": -86.58621199999999
  //             },
  //             "postalCode": "37076",
  //             "state": "TN"
  //           },
  //           "department": "Marketing",
  //           "name": "Blanda-O'Keefe",
  //           "title": "Help Desk Operator"
  //         },
  //         "ein": "20-9487066",
  //         "ssn": "661-64-2976",
  //         "userAgent": "Mozilla/5.0 ..."
  //       },]}
  //   let response:any;
  //   spyOn(service,'getAllUsers').and.returnValue(of(mockResponse))
  //   service.getAllUsers().subscribe(res=>{response=res});
  //   expect(response).toEqual(mockResponse);
  // });   
  it('should return events data', () => {
   let apiUrl = environment.apiUrl1;
    let url2 = 'todo/';
   let url=service.apiUrl+ service.url2;
   let response = service.http.get(url)
    
    expect(service.getAllTodos()).toEqual(response);
   
  }); 
  it('should return user list data', () => {
    let apiUrl = environment.apiUrl1;
     let url2 = 'users/';
    let url=service.apiUrl+ service.url2;
    let response = service.http.get(url)
     
     expect(service.getAllUsers()).toEqual(response);
    
   }); 
});
