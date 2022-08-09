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
import { NgbAccordion, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

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
  ],
  exports: [
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class DashboardModule { }
