import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu'; 
import { MatSelectModule } from '@angular/material/select';
import { AddUsersComponent } from './add-users/add-users.component';
import { MatStepperModule } from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { SharedModule } from '../shared/shared.module';
// import { TableComponent } from '../shared/organisms/widgets/table/table.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};
@NgModule({
  declarations: [
    UsersListComponent,
    AddUsersComponent,
    ViewProfileComponent,
    
  ],
  imports: [
    UsersRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    MatDialogModule,
    MatMenuModule,
    MatSelectModule,
    MatStepperModule,
    FormsModule,
    MatInputModule,
    
    SharedModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
})

export class UsersModule { }
