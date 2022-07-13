import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GoogleapiService } from './googleapi.service';

describe('GoogleapiService', () => {
  let service: GoogleapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GoogleapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
