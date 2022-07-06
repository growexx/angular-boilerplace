import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './auth/login/login.component';
import { AuthsidebarComponent } from './includes/authsidebar/authsidebar.component';
import { ButtonComponent } from './_shared/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './auth/register/register.component';
import { PasswordStrengthBarComponent } from './_shared/password-strength-bar/password-strength-bar.component';
import { ResetpasswordComponent } from './auth/resetpassword/resetpassword.component';
import { SweetAlert2LoaderService, SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ChartModule} from 'primeng/chart';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CompChartsComponent } from './_shared/comp-charts/comp-charts.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthsidebarComponent,
    ButtonComponent,
    RegisterComponent,
    PasswordStrengthBarComponent,
    ResetpasswordComponent,
    DashboardComponent,
    CompChartsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartModule,
    BrowserAnimationsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
