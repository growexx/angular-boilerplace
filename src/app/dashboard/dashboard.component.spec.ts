import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
// import { NgbAccordion, NgbPanel, NgbPanelToggle } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from '../app.component';
import { DashboardComponent } from './dashboard.component';
import { FooterComponent } from '../shared/layout/footer/footer.component';
import { HeaderComponent } from '../shared/layout/header/header.component';
import { SidebarComponent } from '../shared/layout/sidebar/sidebar.component';
import { ToolbarComponent } from '../shared/layout/toolbar/toolbar.component';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskService } from '../task/task.service';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let el: HTMLElement;
  let taskService: any;

  taskService = jasmine.createSpyObj('TaskService', ['getAllTodos']);
  const task = {
    "todos": [
      {
        "id": 1,
        "todo": "Do something nice for someone I care about",
        "completed": true,
        "userId": 26
      },

    ],
    "total": 150,
    "skip": 0,
    "limit": 30
  }

  taskService.getAllTodos.and.returnValue(of(task))

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, RouterModule, RouterTestingModule, MatDialogModule, BrowserAnimationsModule, HttpClientTestingModule],
      declarations: [ DashboardComponent, AppComponent, SidebarComponent, HeaderComponent, ToolbarComponent, FooterComponent ],
      providers: [
        { provide: TaskService, useValue: taskService }
      ]
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
  });

  it('should call getAllTasks', () => {
    component.getAllTasks()
    expect(component).toBeTruthy();
  })
});
