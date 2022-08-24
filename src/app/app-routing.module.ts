import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth/auth.guard';
import { GuestGuard } from './core/guard/guest/guest.guard';
import { AuthComponent } from './auth/auth/auth.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [{
  path: '',
  component: AuthComponent,
  canActivate: [GuestGuard],
  loadChildren: () => import('./auth/auth.module').then(auth => auth.AuthModule),
}, {
  path: 'admin',
  component: MainComponent,
  canActivate: [AuthGuard],
  data: {
    title: 'Dashboard',
  },
  children: [
    {
      path: '',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: 'users',
      loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
      data: {
        title: 'Users Management'
      }
    },
  ],
}, {
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
