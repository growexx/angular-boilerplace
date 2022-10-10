import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FileService } from './file.service';

describe('FileService', () => {
  let service: FileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FileService]
    });
    service = TestBed.inject(FileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test viewFiles', () => {
    const expectedRes = { data: {} }
    const id = 10;
    service.viewFiles(id).subscribe(
      res => expect(res).toEqual(expectedRes, 'should return expectedRes'),
      fail
    );
  })
});
