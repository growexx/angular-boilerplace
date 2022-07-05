import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call openProfilePanel function', () => {
    component.openProfilePanel();
    expect(component).toBeTruthy();
  })

  it('should call openSearchPanel function', () => {
    component.openSearchPanel();
    expect(component).toBeTruthy();
  })

  it('should call openSlider function', () => {
    component.openSlider();
    expect(component).toBeTruthy();
  })

  it('should call closeSlider function', () => {
    component.closeSlider();
    expect(component).toBeTruthy();
  })
});
