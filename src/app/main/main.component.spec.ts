import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { TaskService } from '../task/task.service';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let taskService: any;
  let todosVal = {
    "todos": [
      {
        "id": 1,
        "todo": "Do something nice for someone I care about",
        "completed": true,
        "userId": 26
      },
      {
        "id": 2,
        "todo": "Memorize the fifty states and their capitals",
        "completed": false,
        "userId": 48
      },
      {
        "id": 3,
        "todo": "Watch a classic movie",
        "completed": false,
        "userId": 4
      },
    ],
    "total": 150,
    "skip": 0,
    "limit": 30
  }
  taskService = jasmine.createSpyObj('TaskService', ['getAllTodos']);
  
  taskService.getAllTodos.and.returnValue(of(todosVal));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainComponent],
      imports: [MatDialogModule, HttpClientTestingModule, BrowserAnimationsModule],
      providers: [{ provide: TaskService, useValue: taskService }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call openModal', () => {
    component.openModal()
    expect(component).toBeTruthy();
  });

  it('should call getAllTasks', () => {
    component.getAllTasks();
    expect(component).toBeTruthy();
  });
});
