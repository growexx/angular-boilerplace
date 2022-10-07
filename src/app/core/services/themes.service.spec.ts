import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ThemesService } from './themes.service';

describe('ThemesService', () => {
  let service: ThemesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ThemesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should be setTheme', () => {
  //   const themeSet = 'theme';
  //   service.setTheme(themeSet)
  //   expect(service).toBeTruthy();
  // });
});
