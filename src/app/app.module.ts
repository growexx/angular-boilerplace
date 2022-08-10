import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2LoaderService, SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { CompFilterPipe } from './core/pipes/comp-filter.pipe';
import {MatTableModule} from '@angular/material/table';
import { UniquePipe } from './core/pipes/unique.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    DashboardModule,
    MatTableModule,
    SweetAlert2Module.forRoot(),
    BrowserAnimationsModule,
   
  ],
  exports:[
    SharedModule
  ],
  providers: [CompFilterPipe, UniquePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
