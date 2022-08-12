import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: UsersListComponent,
    data: {
      title: 'Users List'
    },
  },
  {
    path:'add',
    component:AddUsersComponent,
    data: {
      title: 'Add User'
    },
  },
  {
    path:'view',
    component:ViewProfileComponent,
    data: {
      title: 'View User'
    },
  },
  {
    path:'view/:id',
    component:ViewProfileComponent,
    data: {
      title: 'View User'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
