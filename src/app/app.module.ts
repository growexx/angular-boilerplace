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
import {TableModule} from 'primeng/table';
import { CompFilterComponent } from './_shared/comp-filter/comp-filter.component';
import { CompFilterPipe } from './_shared/pipes/comp-filter.pipe';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from './_shared/checkbox/checkbox.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RadioButtonComponent } from './_shared/radio-button/radio-button.component';
import {MatRadioModule} from '@angular/material/radio';
import { TextAreaComponent } from './_shared/text-area/text-area.component';
import { SwitchComponent } from './_shared/switch/switch.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// import { ChartsDataService } from './charts-data.service';
import { TimelineComponent } from './_shared/timeline/timeline.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './_shared/widgets/dialog/dialog.component';
import { UniquePipe } from './_shared/pipes/unique.pipe';
import {MatTableModule} from '@angular/material/table';
import { LineChartComponent } from './_shared/line-chart/line-chart.component';
import {DropdownModule} from 'primeng/dropdown';
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
    CompFilterComponent,
    CompFilterPipe,
    CheckboxComponent,
    RadioButtonComponent,
    TextAreaComponent,
    SwitchComponent,
    TimelineComponent,
    DialogComponent,
    UniquePipe,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartModule,
    MatInputModule,
    MatTabsModule,
    DropdownModule,
    FormsModule,
    TableModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatTableModule,
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
    MatIconModule,
    
  ],
  providers: [CompFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
