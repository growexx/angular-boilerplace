import { ComponentFixture, TestBed } from '@angular/core/testing';


import { CheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on checked', () => {
    let checkboxArray:any = []
    let $event = {checked:true,
      source:{
        value:'Option 1'
      },
      }
      let value = $event.source.value;
if($event.checked===true){
checkboxArray.push(value)
}
    checkboxArray = ['Option 1'];
    component.checked.subscribe((res) => expect(res).toEqual(checkboxArray));
   component.changeValue($event);
   $event = {checked:false,
    source:{
      value:'Option 1'
    },
    }
    value =$event.source.value;
    if($event.checked===false){
      checkboxArray.pop(value)
    }
    checkboxArray = [];
    component.checked.subscribe((res) => expect(res).toEqual(checkboxArray));
   component.changeValue($event);
  });
});
