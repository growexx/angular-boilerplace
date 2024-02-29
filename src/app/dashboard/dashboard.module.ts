import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SidebarComponent } from '../shared/layout/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/layout/header/header.component';
import { FooterComponent } from '../shared/layout/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from '../shared/layout/toolbar/toolbar.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatDialogModule,
    NgbAccordionModule,
    NgChartsModule
  ],
  exports: [
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class DashboardModule { }
