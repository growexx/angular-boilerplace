import { TestBed } from '@angular/core/testing';
import { Chart } from 'chart.js';

import { ChartsDataService } from './charts-data.service';

describe('ChartsDataService', () => {
  let service: ChartsDataService;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartsDataService);
  });

  it('chart should be created', () => {
    expect(service).toBeTruthy();
  });
 
});
