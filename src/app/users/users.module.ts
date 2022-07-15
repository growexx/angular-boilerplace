import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu'; 
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    UsersListComponent,
  ],
  imports: [
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    MatDialogModule,
    MatMenuModule,
    MatSelectModule,
  ],
})
export class UsersModule { }
