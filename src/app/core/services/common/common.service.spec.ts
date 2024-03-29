import { TestBed } from '@angular/core/testing';

import { CommonService } from './common.service';

describe('CommonService', () => {
  let service: CommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be showSidebar() function works as expected', () => {
    service.showSidebar();
    expect(service.isSideBar).toBeFalsy();
  });

  it('should be toggleActionDropdown() function works as expected', () => {
    service.toggleActionDropdown(1)
    expect(service.showActionDropdown).toBeTruthy();
    expect(service.index).toBe(1);
  });

  it('should be toggleActionDropdown() function works as expected', () => {
    service.index = 2;
    service.toggleActionDropdown(1)
    expect(service.showActionDropdown).toBeFalsy();
    expect(service.index).toBe(1);
  });
});
