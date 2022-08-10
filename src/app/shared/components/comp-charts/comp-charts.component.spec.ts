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
  
  it('should emit on clicking button1', () => {
    component.changeData.subscribe((res) => expect(res).toBe(1));
    component.task1();
  });

  it('should emit on clicking button2', () => {
    component.changeData.subscribe((res) => expect(res).toBe(2));
    component.task2();
  });

  it('should emit on clicking button3', () => {
    component.changeData.subscribe((res) => expect(res).toBe(3));
    component.task3();
  });
  
});
