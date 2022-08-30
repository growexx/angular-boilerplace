import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'widgets',
    pathMatch: 'full'
  },
  {
    path: 'calendar',
    component: CalendarComponent,
    data: {
      title: 'Calendar',
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetsRoutingModule { }
