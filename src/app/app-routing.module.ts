import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetpasswordComponent } from './auth/resetpassword/resetpassword.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent
}, {
  path: 'sign-up',
  component: RegisterComponent
}, {
  path: 'password-reset',
  component: ResetpasswordComponent
}, {
  path: 'dashboard',
  component: DashboardComponent
}, {
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
