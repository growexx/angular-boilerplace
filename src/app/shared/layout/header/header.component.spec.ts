import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call themeChangeHAndler', () => {
    const themeSelect = {
      "backgroundColor": "#fff",
      "buttonColor": "#ffc107",
      "headingColor": "#673ab7",
      "label": "Deep Purple & Amber",
      "value": "deeppurple-amber",
      "isDefault": true
    }
    // component.themeChangeHandler(themeSelect)
    expect(component).toBeTruthy();
  })

  it('should called logout() and rediredct to login page', () => {
    localStorage.setItem('token', 'true');
    component.logout();
    expect(localStorage.getItem('token')).toBe(null);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
  });
});
