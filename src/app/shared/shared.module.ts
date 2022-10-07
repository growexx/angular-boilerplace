import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { TableComponent } from './organisms/widgets/table/table.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './organisms/widgets/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
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
import { ModalComponent } from './components/modal/modal.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ThemeButtonComponent } from './layout/theme-button/theme-button.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CalendarComponent } from './components/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ChartsComponent } from './components/charts/charts.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProgressBarsComponent } from './components/progress-bars/progress-bars.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
])

@NgModule({
  declarations: [
    FilterPipe,
    TableComponent,
    DropdownComponent,
    DialogComponent,
    DatepickerComponent,
    MultiselectDropdownComponent,
    ButtonComponent,
    ModalComponent,
    ButtonsComponent,
    GoogleAddressComponent,
    ImageUploadComponent,
    ToolbarComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ThemeButtonComponent,
    CalendarComponent,
    ProgressBarComponent,
    ChartsComponent,
    AccordionComponent,
    ProgressBarsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgbModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    FullCalendarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
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
    GoogleAddressComponent,
    ImageUploadComponent,
    ToolbarComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    CalendarComponent,
    ProgressBarComponent,
    ChartsComponent,
    MatToolbarModule,
    AccordionComponent,
    ProgressBarsComponent
  ],
})

export class SharedModule { }
