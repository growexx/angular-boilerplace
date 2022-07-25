import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { TaskService } from '../task.service';

import { ViewTaskComponent } from './view-task.component';

describe('ViewTaskComponent', () => {
  let component: ViewTaskComponent;
  let fixture: ComponentFixture<ViewTaskComponent>;
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
      declarations: [ViewTaskComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: TaskService, useValue: taskService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllTasks', () => {
    component.getAllTasks()
    expect(component).toBeTruthy();
  })
});
