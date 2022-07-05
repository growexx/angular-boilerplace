import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbAccordion, NgbPanel, NgbPanelToggle } from '@ng-bootstrap/ng-bootstrap';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, MatDialogModule, BrowserAnimationsModule],
      declarations: [DashboardComponent, NgbAccordion, NgbPanel, NgbPanelToggle]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should open modal', () => {
    const button = el.querySelector('button');
    button?.dispatchEvent(new Event('click'));
    component.openModal();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  })
});
