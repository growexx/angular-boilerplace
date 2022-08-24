import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test createUser', ()=>{
    const expectedReq = {data:{}}
    const id = 10;
    service.createUser(expectedReq).subscribe(
      res => expect(res).toEqual(expectedReq, 'should return expectedRes'),
      fail
    );
  })

  it('should test viewUser', ()=>{
    const expectedRes = {data:{}}
    const id = 10;
    service.viewUser(id).subscribe(
      res => expect(res).toEqual(expectedRes, 'should return expectedRes'),
      fail
    );
  })

  it('should test getUserTask', ()=>{
    const expectedRes = {data:{}}
    const id = 10;
    service.getUserTask(id).subscribe(
      res => expect(res).toEqual(expectedRes, 'should return expectedRes'),
      fail
    );
  })
});
