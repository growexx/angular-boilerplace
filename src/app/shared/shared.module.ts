import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { PasswordStrengthBarComponent } from './components/password-strength-bar/password-strength-bar.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthsidebarComponent } from './layout/authsidebar/authsidebar.component';
import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { GoogleAddressComponent } from './components/google-address/google-address.component';
import {MatSelectModule} from '@angular/material/select';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { CircleProgressBarComponent } from './components/circle-progress-bar/circle-progress-bar.component';
import { CompChartsComponent } from './components/comp-charts/comp-charts.component';
import { CompFilterComponent } from './components/comp-filter/comp-filter.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { SwitchComponent } from './components/switch/switch.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import {ChartModule} from 'primeng/chart';
import {MatTabsModule} from '@angular/material/tabs';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {MatIconModule} from '@angular/material/icon';
import {TableModule} from 'primeng/table';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {MatTableModule} from '@angular/material/table';
import {DropdownModule} from 'primeng/dropdown';
import { UniquePipe } from '../core/pipes/unique.pipe';
import { CommentsComponent } from './components/comments/comments.component';
@NgModule({
  declarations: [
    ButtonComponent,
    PasswordStrengthBarComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AuthsidebarComponent,
    ModalComponent,
    ButtonsComponent,
    GoogleAddressComponent,
    ImageUploadComponent,
    CheckboxComponent,
    CircleProgressBarComponent,
    CompChartsComponent,
    LineChartComponent,
    CompFilterComponent,
    RadioButtonComponent,
    SwitchComponent,
    TabsComponent,
    TextAreaComponent,
    TimelineComponent,
    UniquePipe,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    MatDialogModule,
    MatSelectModule,
    ChartModule,
    MatTabsModule,
    MatIconModule,
    TableModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatTableModule,
    FormsModule,
    DropdownModule,
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
  ],
  exports:[
    ButtonComponent,
    PasswordStrengthBarComponent,
    SidebarComponent,
    AuthsidebarComponent,
    HeaderComponent,
    ModalComponent,
    ButtonsComponent,
    GoogleAddressComponent,
    ImageUploadComponent,
    CheckboxComponent,
    CircleProgressBarComponent,
    CompChartsComponent,
    LineChartComponent,
    CompFilterComponent,
    RadioButtonComponent,
    SwitchComponent,
    TabsComponent,
    TextAreaComponent,
    TimelineComponent
    
  ],
  providers: [ UniquePipe],
})
export class SharedModule { }
