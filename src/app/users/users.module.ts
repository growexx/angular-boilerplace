import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AddUsersComponent } from './add-users/add-users.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { SharedModule } from '../shared/shared.module';
import { ViewProfileComponent } from './view-profile/view-profile.component';
const maskConfig: Partial<IConfig> = {
  validation: false,
};
@NgModule({
  declarations: [
    AddUsersComponent,
    ViewProfileComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    SharedModule,
    NgxMaskModule.forRoot(maskConfig)
  ]
  
})
export class UsersModule { }
