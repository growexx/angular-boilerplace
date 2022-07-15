import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';
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
      email: 'eve.holt@reqres.in',
      password: 'pistol'
    };
    authService.register(user).subscribe(
      response => expect(response).toEqual(expectedResponse, 'should return expected response'),
      fail
    );
    const expectedResponse = { "id": 4, "token": "QpwL5tke4Pnpja7X4" };
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
    );;
    const expectedResponse = { "error": "Missing password" };
    const req = httpTestingController.expectOne(`${environment.apiUrl}users/add`);
    expect(req.request.method).toEqual('POST');
    req.flush(expectedResponse);
  });
});
