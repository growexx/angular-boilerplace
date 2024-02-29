import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { GuestGuard } from './guest.guard';

describe('GuestGuard', () => {
  let guard: GuestGuard;
  let router: Router;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    });
    guard = TestBed.inject(GuestGuard);
    router = TestBed.get(Router); 
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should not be able to activate when logged out', () => {
    window.localStorage.setItem('token', 'asdfghjkkl');
    expect(guard.canActivate()).toBe(false);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard']);
  });
  
  it('should be able to activate when logged in', () => {
    window.localStorage.removeItem('token');
    expect(guard.canActivate()).toBe(true);
  });
});
