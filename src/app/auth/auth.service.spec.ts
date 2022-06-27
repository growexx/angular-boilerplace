import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';

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
    const req = httpTestingController.expectOne('https://reqres.in/api/login');
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
    const req = httpTestingController.expectOne('https://reqres.in/api/login');
    expect(req.request.method).toEqual('POST');
    req.flush(expectedResponse);
  });

  it('should be called register() with success response', () => {
    let user = {
      email: 'eve.holt@reqres.in',
      password: 'pistol'
    };
    authService.register(user).subscribe(
      response => expect(response).toEqual(expectedResponse, 'should return expected response'),
      fail
    );
    const expectedResponse = { "id": 4, "token": "QpwL5tke4Pnpja7X4" };
    const req = httpTestingController.expectOne('https://reqres.in/api/register');
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
    );;
    const expectedResponse = { "error": "Missing password" };
    const req = httpTestingController.expectOne('https://reqres.in/api/register');
    expect(req.request.method).toEqual('POST');
    req.flush(expectedResponse);
  });

  it('should be called getAllUsers() with success response', () => {
    let user = {
      email: 'eve.holt@reqres.in',
      password: 'pistol'
    };
    authService.getAllUsers().subscribe(
      response => expect(response).toEqual(expectedResponse, 'should return expected response'),
      fail
    );
    const expectedResponse = { "page": 1, "per_page": 6, "total": 12, "total_pages": 2, "data": [{ "id": 1, "email": "george.bluth@reqres.in", "first_name": "George", "last_name": "Bluth", "avatar": "https://reqres.in/img/faces/1-image.jpg" }, { "id": 2, "email": "janet.weaver@reqres.in", "first_name": "Janet", "last_name": "Weaver", "avatar": "https://reqres.in/img/faces/2-image.jpg" }, { "id": 3, "email": "emma.wong@reqres.in", "first_name": "Emma", "last_name": "Wong", "avatar": "https://reqres.in/img/faces/3-image.jpg" }, { "id": 4, "email": "eve.holt@reqres.in", "first_name": "Eve", "last_name": "Holt", "avatar": "https://reqres.in/img/faces/4-image.jpg" }, { "id": 5, "email": "charles.morris@reqres.in", "first_name": "Charles", "last_name": "Morris", "avatar": "https://reqres.in/img/faces/5-image.jpg" }, { "id": 6, "email": "tracey.ramos@reqres.in", "first_name": "Tracey", "last_name": "Ramos", "avatar": "https://reqres.in/img/faces/6-image.jpg" }], "support": { "url": "https://reqres.in/#support-heading", "text": "To keep ReqRes free, contributions towards server costs are appreciated!" } };
    const req = httpTestingController.expectOne('https://reqres.in/api/users');
    expect(req.request.method).toEqual('GET');
    req.flush(expectedResponse);
  });

  it('should be called getUser() with success response', () => {
    const user_id = 2;
    authService.getUser(user_id).subscribe(
      response => expect(response).toEqual(expectedResponse, 'should return expected response'),
      fail
    );;
    const expectedResponse = {
      "data": {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
      },
      "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
      }
    };
    const req = httpTestingController.expectOne('https://reqres.in/api/user/' + user_id);
    expect(req.request.method).toEqual('GET');
    req.flush(expectedResponse);
  });

  it('should be called getUser() with error response', () => {
    const user_id = 23;
    authService.getUser(user_id).subscribe(
      response => expect(response).toEqual(expectedResponse, 'should return expected response'),
      fail
    );;
    const expectedResponse = {};
    const req = httpTestingController.expectOne('https://reqres.in/api/user/' + user_id);
    expect(req.request.method).toEqual('GET');
    req.flush(expectedResponse);
  });
});
