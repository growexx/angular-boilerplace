import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './main-pages/home/home.component';
import { RootComponent } from './main-pages/root/root.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'auth',
    pathMatch:'full'
  },
  {
    path: 'auth',
    component: HomeComponent,
    children:[{
      path: '',
      loadChildren: () => import('./auth/auth.module').then(m=>m.AuthModule)
    }]
  },

  {
    path: 'admin',
    component: RootComponent,
    children:[
      {
        path:'',
        loadChildren: () => import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
