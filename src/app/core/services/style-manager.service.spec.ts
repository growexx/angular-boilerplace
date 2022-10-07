import { TestBed } from '@angular/core/testing';

import { StyleManagerService } from './style-manager.service';

describe('StyleManagerService', () => {
  let service: StyleManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StyleManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be setStyle()', () => {
    const key = 'theme';
    const href= 'assets/styles/theme/pink-grey.css'
    service.setStyle(key,href)
    expect(service).toBeTruthy();
  });

  it('should be removeStyle', () => {
    const key = 'theme';
    service.removeStyle(key)
    expect(service).toBeTruthy();
  });
});
