import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbAccordion, NgbPanel, NgbPanelToggle } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from '../app.component';
import { FooterComponent } from '../includes/footer/footer.component';
import { HeaderComponent } from '../includes/header/header.component';
import { SidebarComponent } from '../includes/sidebar/sidebar.component';
import { ToolbarComponent } from '../includes/toolbar/toolbar.component';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, RouterModule, RouterTestingModule],
      declarations: [ DashboardComponent, NgbAccordion,NgbPanel, NgbPanelToggle, AppComponent, SidebarComponent, HeaderComponent, ToolbarComponent, FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
