import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';

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

  it('should test viewUser', ()=>{
    const expectedRes = {data:{}}
    const id = 10;
    service.viewUser(id).subscribe(
      res => expect(res).toEqual(expectedRes, 'should return expectedRes'),
      fail
    );
    const req = httpTestingController.expectOne(`${environment.apiUrl1}/users/10`)
  })

  it('should test getUserTask', ()=>{
    const expectedRes = {data:{}}
    const id = 10;
    service.getUserTask(id).subscribe(
      res => expect(res).toEqual(expectedRes, 'should return expectedRes'),
      fail
    );
    const req = httpTestingController.expectOne(`${environment.apiUrl1}/users/10/posts`)
  })
});
