import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { TaskService } from '../task.service';

import { AddTaskComponent } from './add-task.component';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;
  const addRes = {
    completed: false,
    id: 151,
    todo: "Use DummyJSON in the project",
    userId: 5
  };
  const updateRes = {
    "id": "1",
    "todo": "Do something nice for someone I care about",
    "completed": false,
    "userId": 26
  }

  const getTodo = {
    "id": 1,
    "todo": "Do something nice for someone I care about",
    "completed": true,
    "userId": 26
  }

  let taskService: any;


  taskService = jasmine.createSpyObj('TaskService', ['addTodos', 'updateTodo', 'getToDoById']);
  taskService.addTodos.and.returnValue(of(addRes))
  taskService.updateTodo.and.returnValue(of(updateRes))
  taskService.getToDoById.and.returnValue(of(getTodo))


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTaskComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: { params: of({ id: '1' }) } },
        { provide: TaskService, useValue: taskService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call submitTodo', () => {
    component.submitTodo()
    expect(component).toBeTruthy();
  });

  it('should call clearTodo', () => {
    component.clearTodo()
    expect(component).toBeTruthy();
  });

  it('should call cancelTodo', () => {
    component.cancelTodo()
    expect(component).toBeTruthy();
  });

  it('should call editTodo', () => {
    const id = 1;
    component.editTodo(id)
    expect(component).toBeTruthy();
  });

  it('should call getToDoById', () => {
    const id = 1;
    component.getToDoById(id)
    expect(component).toBeTruthy();
  });


});
