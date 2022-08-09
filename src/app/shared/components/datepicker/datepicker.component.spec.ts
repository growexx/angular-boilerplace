import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import * as moment from 'moment';

import { DatepickerComponent } from './datepicker.component';

describe('DatepickerComponent', () => {
  let component: DatepickerComponent;
  let fixture: ComponentFixture<DatepickerComponent>;
  let datepickerConfig: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatepickerComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerComponent);
    component = fixture.componentInstance;
    component.datepickerConfig = {
      minDate: '2022-01-01',
      maxDate: '2022-11-30',
      disabled: false,
      opened: false,
      touchUi: false,
      panelClasses: 'panelClasses',
      startView: 'month',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event and pass date to component', () => {
    spyOn(component.outputData, 'emit');
    component.output = moment();
    component.outputResponse();
    fixture.detectChanges();
    expect(component.outputData.emit).toHaveBeenCalledWith(component.output);
  });
});
