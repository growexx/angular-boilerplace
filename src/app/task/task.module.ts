import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { ViewTaskComponent } from './view-task/view-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { TaskService } from './task.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ViewTaskComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
  ],
  providers:[TaskService]
})
export class TaskModule { }
