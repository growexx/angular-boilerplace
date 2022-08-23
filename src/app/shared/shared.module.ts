import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FilterPipe } from './pipes/filter.pipe';
import { TableComponent } from './organisms/widgets/table/table.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

// import { NgxPaginationModule } from 'ngx-pagination';

import { DialogComponent } from './organisms/widgets/dialog/dialog.component';
import { DialogTextboxComponent } from './components/widgets/dialog-textbox/dialog-textbox.component';
import { MatSelectModule } from '@angular/material/select';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MultiselectDropdownComponent } from './components/multiselect-dropdown/multiselect-dropdown.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonComponent } from './components/button/button.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { GoogleAddressComponent } from './components/google-address/google-address.component';
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
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {DropdownModule} from 'primeng/dropdown';
import { UniquePipe } from '../core/pipes/unique.pipe';
import { CommentsComponent } from './components/comments/comments.component';
import { PasswordStrengthBarComponent } from './components/password-strength-bar/password-strength-bar.component';
import { ModalComponent } from './components/modal/modal.component';
import { AuthsidebarComponent } from './layout/authsidebar/authsidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialogModule } from '@angular/material/dialog';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  declarations: [
    FilterPipe,
    DialogTextboxComponent,
    DialogComponent,
    DatepickerComponent,
    MultiselectDropdownComponent,
    TableComponent,
    DropdownComponent,
    ToolbarComponent,
    ButtonComponent,
    ModalComponent,
    ButtonsComponent,
    GoogleAddressComponent,
    ImageUploadComponent,
    PasswordStrengthBarComponent,
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
    CommentsComponent,
    AuthsidebarComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    TooltipComponent
  ],
  imports:[
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    NgbModule,
    ChartModule,
    MatTabsModule,
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
    TableModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatTableModule,
    DropdownModule,
    NgxPaginationModule
  ],

  exports: [
    FilterPipe,
    TableComponent,
    DropdownComponent,
    DialogComponent,
    DatepickerComponent,
    MultiselectDropdownComponent,
    ButtonComponent,
    ModalComponent,
    ButtonsComponent,
    AuthsidebarComponent,
    GoogleAddressComponent,
    ImageUploadComponent,
    PasswordStrengthBarComponent,
    CheckboxComponent,
    CircleProgressBarComponent,
    CompChartsComponent,
    LineChartComponent,
    CompFilterComponent,
    RadioButtonComponent,
    SwitchComponent,
    TabsComponent,
    TextAreaComponent,
    FooterComponent,
    ToolbarComponent,
    HeaderComponent,
    TimelineComponent,
    SidebarComponent,
    TooltipComponent
  ],
  providers: [ UniquePipe,

    // ToolbarComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
})

export class SharedModule { }
