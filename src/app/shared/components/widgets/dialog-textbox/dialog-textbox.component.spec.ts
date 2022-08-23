import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTextboxComponent } from './dialog-textbox.component';

describe('DialogComponent', () => {
  let component: DialogTextboxComponent;
  let fixture: ComponentFixture<DialogTextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTextboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
