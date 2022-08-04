import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetpasswordComponent } from './auth/resetpassword/resetpassword.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './core/guard/auth/auth.guard';
import { GuestGuard } from './core/guard/guest/guest.guard';
import { AuthComponent } from './auth/auth/auth.component';

const routes: Routes = [{
  path: '',
  component: AuthComponent,
  canActivate: [GuestGuard],
  loadChildren: () => import('./auth/auth.module').then(auth => auth.AuthModule),
  // path: '',
  // component: LoginComponent,
  // canActivate: [GuestGuard],
// }, {
//   path: 'sign-up',
//   component: RegisterComponent,
//   canActivate: [GuestGuard],
// }, {
//   path: 'password-reset',
//   component: ResetpasswordComponent,
//   canActivate: [GuestGuard],
}, {
  path: 'dashboard',
  component: DashboardComponent,
  canActivate: [AuthGuard],
  loadChildren: () => import('./users/users.module').then(users => users.UsersModule),
}, {
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
