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

  taskService = jasmine.createSpyObj('TaskService', ['getAllTodos','deleteTodos']);
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

  const delTodo = {
    "id": 1,
    "todo": "Do something nice for someone I care about",
    "completed": true,
    "userId": 26,
    "isDeleted": true,
    "deletedOn": "2022-07-27T06:44:31.974Z"
  }

  taskService.getAllTodos.and.returnValue(of(task));
  taskService.deleteTodos.and.returnValue(of(delTodo));

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
  it('should call createTodo', () => {
    component.createTodo()
    expect(component).toBeTruthy();
  })
  it('should call deleteTodo', () => {
    const id = 1;
    component.deleteTodo(id)
    expect(component).toBeTruthy();
  });
  it('should call routeToEdit', () => {
    const id = 1;
    component.routeToEdit(id)
    expect(component).toBeTruthy();
  })
});
