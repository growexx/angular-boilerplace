import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetsRoutingModule } from './widgets-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    SharedModule
  ]
})
export class WidgetsModule { }
