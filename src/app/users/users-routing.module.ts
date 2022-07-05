import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
