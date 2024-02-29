import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

describe('AuthService', () => {
  let httpTestingController: HttpTestingController;
  let user: any;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
    });
    authService = TestBed.inject(AuthService);
    user = {
      "email": 'eve.holt@reqres.in',
      "password": 'cityslicka'
    };
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(inject(
    [AuthService],
    (service: AuthService) => {
      service = service;
    }
  ));
  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('should be called login() with success response', () => {
    const currentUser = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    };
    authService.login(currentUser).subscribe(
      response => expect(response).toEqual(expectedResponse, 'should return expected response'),
      fail
    );
    const expectedResponse = { token: 'QpwL5tke4Pnpja7X4' };
    const req = httpTestingController.expectOne(`${environment.apiUrl}auth/login`);
    expect(req.request.method).toEqual('POST');
    req.flush(expectedResponse);
  });

  it('should be called login() with error response', () => {
    const currentUser = {
      email: 'eve.holt@reqres.in'
    };
    authService.login(currentUser).subscribe(
      response => expect(response).toEqual(expectedResponse, 'should return expected response'),
      fail
    );;
    const expectedResponse = { "error": "Missing password" };
    const req = httpTestingController.expectOne(`${environment.apiUrl}auth/login`);
    expect(req.request.method).toEqual('POST');
    req.flush(expectedResponse);
  });

  it('should be called register() with success response', () => {
    let user = {
      "id": 1,
      "firstName": "Pruthvi",
      "lastName": "Dhamecha",
      "maidenName": "Smitham",
      "age": 50,
      "gender": "male",
      "email": "pruthvi@gmail.com",
      "phone": "+63 791 675 8914",
      "username": "pruthvidhamecha",
      "password": "12345678",
      "birthDate": "31-03-1999",
      "image": "https://robohash.org/hicveldicta.png?size=50x50&set=set1",
      "bloodGroup": "A−",
      "height": 189,
      "weight": 75.4,
      "eyeColor": "Green",
      "hair": {
        "color": "Black",
        "type": "Strands"
      },
      "domain": "slashdot.org",
      "ip": "117.29.86.254",
      "address": {
        "address": "1745 T Street Southeast",
        "city": "Washington",
        "coordinates": {
          "lat": 38.867033,
          "lng": -76.979235
        },
        "postalCode": "20020",
        "state": "DC"
      },
      "macAddress": "13:69:BA:56:A3:74",
      "university": "Capitol University",
      "bank": {
        "cardExpire": "06/22",
        "cardNumber": "50380955204220685",
        "cardType": "maestro",
        "currency": "Peso",
        "iban": "NO17 0695 2754 967"
      },
      "company": {
        "address": {
          "address": "629 Debbie Drive",
          "city": "Nashville",
          "coordinates": {
            "lat": 36.208114,
            "lng": -86.58621199999999
          },
          "postalCode": "37076",
          "state": "TN"
        },
        "department": "IT",
        "name": "Blanda-O'Keefe",
        "title": "Help Desk Operator"
      },
      "ein": "20-9487066",
      "ssn": "661-64-2976",
      "userAgent": "Mozilla/5.0 ..."
    };
    authService.register(user).subscribe(
      response => expect(response).toEqual(expectedResponse, 'should return expected response'),
      fail
    );
    const expectedResponse = {
      "id": 101,
      "firstName": "Pruthvi",
      "lastName": "Dhamecha",
      "maidenName": "Smitham",
      "age": 50,
      "gender": "male",
      "email": "pruthvi@gmail.com",
      "phone": "+63 791 675 8914",
      "username": "pruthvidhamecha",
      "password": "12345678",
      "birthDate": "31-03-1999",
      "image": "https://robohash.org/hicveldicta.png?size=50x50&set=set1",
      "bloodGroup": "",
      "height": null,
      "weight": null,
      "eyeColor": "",
      "hair": {
        "color": "",
        "type": ""
      },
      "domain": "",
      "ip": "",
      "address": {
        "address": "",
        "city": "",
        "coordinates": {
          "lat": null,
          "lng": null
        },
        "postalCode": "",
        "state": ""
      },
      "macAddress": "",
      "university": "",
      "bank": {
        "cardExpire": "",
        "cardNumber": "",
        "cardType": "",
        "currency": "",
        "iban": ""
      },
      "company": {
        "address": {
          "address": "",
          "city": "",
          "coordinates": {
            "lat": null,
            "lng": null
          },
          "postalCode": "",
          "state": ""
        },
        "department": "",
        "name": "",
        "title": ""
      },
      "ein": "",
      "ssn": "",
      "userAgent": ""
    };
    const req = httpTestingController.expectOne(`${environment.apiUrl}users/add`);
    expect(req.request.method).toEqual('POST');
    req.flush(expectedResponse);
  });

  it('should be called register() with error response', () => {
    const currentUser = {
      email: 'eve.holt@reqres.in'
    };
    authService.register(currentUser).subscribe(
      response => expect(response).toEqual(expectedResponse, 'should return expected response'),
      fail
    );
    const expectedResponse = { "error": "Missing password" };
    const req = httpTestingController.expectOne(`${environment.apiUrl}users/add`);
    expect(req.request.method).toEqual('POST');
    req.flush(expectedResponse);
  });
});
