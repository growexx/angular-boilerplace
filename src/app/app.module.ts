import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MainComponent } from './main/main.component';
import { CommonModule } from '@angular/common';
import { TaskService } from './task/task.service';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    CommonModule,
    // SharedModule,
    // RouterOutlet,
    AppRoutes,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    BrowserAnimationsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // AuthModule
  ],
  providers:[
    TaskService
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
