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
    component.checkboxes = [
      {id:1,name:'Option 1', label: 'Option 1' , disabled: false , checked:true , labelPosition:'after',required: true, color:'primary'}, 
    ]
    fixture.detectChanges();
  });


it('should add in array if checked is true at initial', () => {
  let checkboxArray:any=[];
  for(let i=0; i<component.checkboxes.length;i++){
  if( component.checkboxes[i].checked===true){
    checkboxArray.push(component.checkboxes[i].name);
    }
  }
  component.onChecked.subscribe((res) => expect(res).toEqual(checkboxArray));
  component.ngOnInit();
  component.checkboxes= [
    {id:1,name:'Option 1', label: 'Option 1' , disabled: false , checked:false , labelPosition:'after',required: true, color:'primary'}, 
  ]
if(component.checkboxes[0].checked===false){
checkboxArray=[];
}
component.onChecked.subscribe((res) => expect(res).toEqual(checkboxArray));
component.ngOnInit();
});

it('should add and remove from array on checked', () => {
  let eliminatedValue:any;
  let $event = {checked:true,
    source:{
      name:'Option 1'
    },
    };
if($event.checked===true){
component.checkboxArray.push($event.source.name)
     }
     component.onChecked.subscribe((res) => expect(res).toEqual(component.checkboxArray));
     component.changeValue($event);
     $event = {checked:false,
      source:{
        name:'Option 1'
      },
      }
      for(let i =0; i<component.checkboxArray.length;i++){
     if($event.checked===false && component.checkboxArray[i]===$event.source.name ){
           eliminatedValue=component.checkboxArray.splice(i,1);
           $event.source.name = eliminatedValue[0];
       }
      }
  component.onChecked.subscribe((res) => expect(res).toEqual(component.checkboxArray));
 component.changeValue($event);
});
});
