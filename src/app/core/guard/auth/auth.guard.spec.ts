import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
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
    guard = TestBed.inject(AuthGuard);
    router = TestBed.get(Router); 
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should be able to activate when logged in', () => {
    window.localStorage.setItem('token', 'asdfghjkkl');
    guard.canActivate();
    expect(guard.canActivate()).toBe(true);
  });
  
  it('should not be able to activate when logged out', () => {
    window.localStorage.setItem('token', '');
    guard.canActivate();
    expect(guard.canActivate()).toBe(false);
    expect (routerSpy.navigate).toHaveBeenCalledWith(['/']);

  });
});
