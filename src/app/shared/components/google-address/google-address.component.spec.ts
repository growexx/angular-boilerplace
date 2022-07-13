import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAddressComponent } from './google-address.component';

describe('GoogleAddressComponent', () => {
  let component: GoogleAddressComponent;
  let fixture: ComponentFixture<GoogleAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoogleAddressComponent],
      imports:[HttpClientTestingModule]
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
});
