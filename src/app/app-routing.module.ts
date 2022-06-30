import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { RootComponent } from './components/root/root.component';

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
      loadChildren: () => import('./modules/auth/auth.module').then(m=>m.AuthModule)
    }]
  },

  {
    path: 'admin',
    component: RootComponent,
    children:[
      {
        path:'',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m=>m.DashboardModule)
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
