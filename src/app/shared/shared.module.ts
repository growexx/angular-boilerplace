import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { TableComponent } from './organisms/widgets/table/table.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    FilterPipe,
    TableComponent,
    DropdownComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule,
  ],
  exports: [
    FilterPipe,
    TableComponent,
    DropdownComponent,
  ],
})
export class SharedModule { }
