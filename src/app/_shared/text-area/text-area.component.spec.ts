import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaComponent } from './text-area.component';

describe('TextAreaComponent', () => {
  let component: TextAreaComponent;
  let fixture: ComponentFixture<TextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAreaComponent);
    component = fixture.componentInstance;
    component.textArea = 
  {label:'Description', placeholder: "Enter description" };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit input value', () => {
   let $event = {
      target:{
        value:"Anjali"
      }
    }
    let inputValue = $event.target.value;
    component.input.subscribe((res) => expect(res).toEqual(inputValue));
component.getInputValue($event);
  });
});
