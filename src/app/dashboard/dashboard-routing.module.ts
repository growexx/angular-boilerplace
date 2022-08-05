import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from '../users/users-list/users-list.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'dashboard',
    pathMatch: 'full'
  },
  // {
  //   path: 'users',
  //   component: UsersListComponent,
  //   loadChildren: () => import('./../users/users.module').then(users => users.UsersModule),
  // },
  {
    path: '',
    component: DashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
