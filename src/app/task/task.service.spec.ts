import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TaskService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(('should test getAllTask'), () => {
   
    const expectRes = { data: {} };
    service.getAllTodos().subscribe(
      res => expect(res).toEqual(expectRes, 'should return expectedRes')
    );
  });

  it(('should test addTodos'), () => {
    const reqBody = {
      todo: 'Use DummyJSON in the project',
      completed: false,
      userId: 5,
    }
    const expectRes = { data: {} };
    service.addTodos(reqBody).subscribe(
      res => expect(res).toEqual(expectRes, 'should return expectedRes')
    );
  })

  it(('should test deleteTodo'), () => {
    const id = 1;
    const expectRes = { data: {} };
    service.deleteTodos(id).subscribe(
      res => expect(res).toEqual(expectRes, 'should return expectedRes')
    );
  });

  it(('should test updateTodo'), () => {
    const id = 1;
    const reqBody = {
      completed: false,
    }
    const expectRes = { data: {} };
    service.updateTodo(id,reqBody).subscribe(
      res => expect(res).toEqual(expectRes, 'should return expectedRes')
    );
  });

  it(('should test getToDoById'), () => {
    const id = 1;
    
    const expectRes = { data: {} };
    service.getToDoById(id).subscribe(
      res => expect(res).toEqual(expectRes, 'should return expectedRes')
    );
  })


});
