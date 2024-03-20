import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { AuthsidebarComponent } from './layout/authsidebar/authsidebar.component';
import { PasswordStrengthBarComponent } from './components/password-strength-bar/password-strength-bar.component';

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
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ToolbarComponent,
    PasswordStrengthBarComponent,
    AuthsidebarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxPaginationModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgbModule,
  ],
  exports: [
    CommonModule,
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
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ToolbarComponent,
    PasswordStrengthBarComponent,
    AuthsidebarComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})

export class SharedModule { }
