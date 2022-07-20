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
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MultiselectDropdownComponent } from './components/multiselect-dropdown/multiselect-dropdown.component';

@NgModule({
  declarations: [
    FilterPipe,
    TableComponent,
    DropdownComponent,
    DialogComponent,
    DatepickerComponent,
    MultiselectDropdownComponent,
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
    MatNativeDateModule
  ],
  exports: [
    FilterPipe,
    TableComponent,
    DropdownComponent,
    DialogComponent,
    DatepickerComponent,
    MultiselectDropdownComponent,
  ],
})
export class SharedModule { }
