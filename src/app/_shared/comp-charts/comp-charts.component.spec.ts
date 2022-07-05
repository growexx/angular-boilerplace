import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompChartsComponent } from './comp-charts.component';

describe('CompChartsComponent', () => {
  let component: CompChartsComponent;
  let fixture: ComponentFixture<CompChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
