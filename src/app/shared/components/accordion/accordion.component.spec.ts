import { SimpleChange, SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FilterPipe } from '../../pipes/filter.pipe';
import { AccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;
  let index = 1;
  let openSpy: any;
  let accordion = [
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
  openSpy = jasmine.createSpyObj('component',['open']);
  openSpy.open.and.returnValue(of(index))

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordionComponent, FilterPipe],
      providers: [{ provide: AccordionComponent, useValue: openSpy }]
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

  it('should call ngOnChanges', () => {
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
    component.ngOnChanges({
      accordion: new SimpleChange(accordion, accordion, false)
    })
    expect(component).toBeTruthy();
  })


  it('should open()', () => {
    const index = 1;
    const accObj = {
      active: false,
      description: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.",
      title: "Accordion Item #1"
    }
    component.open(index)
    expect(component).toBeTruthy();
  });
});
