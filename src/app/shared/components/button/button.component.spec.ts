import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raises the submitFormEvent event when clicked', () => {
    component.submitFormEvent.subscribe({
      next: (res: any) => { expect(res).toBeTruthy },
      error: (error: any) => { expect(error).toBeFalsy }
    });
    component.submitForm();
    expect(component.submitFormEvent.emit).toBeTruthy();
  });
});
