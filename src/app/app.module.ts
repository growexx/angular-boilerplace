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
import {MatTabsModule} from '@angular/material/tabs';
import { CompChartsComponent } from './_shared/comp-charts/comp-charts.component';
import { CircleProgressBarComponent } from './_shared/circle-progress-bar/circle-progress-bar.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TabsComponent } from './_shared/tabs/tabs.component';
import {MatIconModule} from '@angular/material/icon';
 

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
    CircleProgressBarComponent,
    TabsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartModule,
    MatTabsModule,
    BrowserAnimationsModule,
    SweetAlert2Module.forRoot(),
    NgCircleProgressModule.forRoot({
      "radius": 60,
"space": -10,
// "percent":85,
"outerStrokeGradient": true,
"outerStrokeWidth": 12,
"outerStrokeColor": "#4882c2",
"outerStrokeGradientStopColor": "#53a9ff",
"innerStrokeColor": "#e7e8ea",
"innerStrokeWidth": 10,
"showTitle" : false,
"showSubtitle": false,
"showUnits" : false,

"animationDuration": 4000,

"showBackground": false,
"startFromZero": false,
"lazy": true

    }),
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
