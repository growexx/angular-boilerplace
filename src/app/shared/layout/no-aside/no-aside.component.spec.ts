import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAsideComponent } from './no-aside.component';

describe('NoAsideComponent', () => {
  let component: NoAsideComponent;
  let fixture: ComponentFixture<NoAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoAsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
