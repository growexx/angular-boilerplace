import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(TaskService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(('should test getAllTask'),()=>{
    const expectRes = {data:{}};
    service.getAllTodos().subscribe(
      res => expect(res).toEqual(expectRes,'should return expectedRes')
    );
    const req = httpTestingController.expectOne(`${environment.apiUrl1}/todos`)

  })
});
