import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordionComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should open()', () => {
    const accordion = [
      {
        title: 'Accordion Item #1',
        description: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.",
        active: true
      },
      {
        title: 'Accordion Item #2',
        description: "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.",
        active: false
      }
    ]
    const index = 1;
    // expect(accordion[0].active).toBeFalsy();
    component.open(index)
    expect(component).toBeTruthy();
  });
});
