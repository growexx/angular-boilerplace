import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchComponent } from './switch.component';

describe('SwitchComponent', () => {
  let component: SwitchComponent;
  let fixture: ComponentFixture<SwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchComponent);
    component = fixture.componentInstance;
    component.switches=[
            {id:1,
              name:'Option 1',
              label:'Slide me',
              required:true,labelPosition:"before",
            disabled:false,
            checked:true,
            color:'primary'}, 
          ]
         
    fixture.detectChanges();
  });
it('should add in array if checked is true at initial', () => {
  let switchArray:any=[];
  
  for(let i=0; i<component.switches.length;i++){
  if( component.switches[i].checked===true){
    switchArray.push(component.switches[i].name);
    }
  }
  component.slide.subscribe((res) => expect(res).toEqual(switchArray));
  
  component.ngOnInit();
  component.switches= [
    {id:1,name:'Option 1', label: 'Option 1' , disabled: false , checked:false , labelPosition:'after',required: true, color:'primary'}, 
  ]
if(component.switches[0].checked===false){
  switchArray=[];
}
component.slide.subscribe((res) => expect(res).toEqual(switchArray));
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
component.switchArray.push($event.source.name)
     }
     component.slide.subscribe((res) => expect(res).toEqual(component.switchArray));
     component.onSelect($event);
     $event = {checked:false,
      source:{
        name:'Option 1'
      },
      }
      for(let i =0; i<component.switchArray.length;i++){
     if($event.checked===false && component.switchArray[i]===$event.source.name ){
           eliminatedValue=component.switchArray.splice(i,1);
           $event.source.name = eliminatedValue[0];
       }
      }
  component.slide.subscribe((res) => expect(res).toEqual(component.switchArray));
 component.onSelect($event);
});
});
