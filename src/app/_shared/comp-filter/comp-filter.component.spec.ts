import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFilterComponent } from './comp-filter.component';

describe('CompFilterComponent', () => {
  let component: CompFilterComponent;
  let fixture: ComponentFixture<CompFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit the word to be searched', () => {
    component.stringPassed.subscribe((res: any) => expect(res).toBe("Text"));
    component.valuePassed("Text");
  });

});
