import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Data, Options } from 'src/app/core/interface/comp-charts';



@Component({
  selector: 'app-comp-charts',
  templateUrl: './comp-charts.component.html',
  styleUrls: ['./comp-charts.component.scss']
})
export class CompChartsComponent {
  @Output() changeData: EventEmitter<any> = new EventEmitter<number>();
  @Input() title: any;
  @Input() btnData?:any;
  @Input()buttonClass!:string;
  @Input() subTitle: any;  
  id:any;
  @Input() options!:Options;
  @Input() data!:Data;
  countries:any;
  selectedCountry:any;
  checkboxes:any;
  switches:any;
  constructor(){
    
  this.checkboxes = [
    {id:1,name:'Author', label: 'Author' , disabled: false , checked:false , labelPosition:'after',required: true, color:'primary'},
    {id:2,name:'Customer', label: 'Customer', disabled: false, checked:true, labelPosition:'after',required: true, color:'primary'},
     
  ];
  this.switches=[
    {id:1,
      name:'Enabled',
      label:'Enabled',
      required:true,labelPosition:"after",
    disabled:false,
    checked:true,
    color:'primary'},
    
      ]
  }
 
  task1() {
    this.id = 1;
    this.changeData.emit(1)
  }

  task2() {
    this.id = 2;
    this.changeData.emit(2)
  }

  task3() {
    this.id = 3;
    this.changeData.emit(3)
  }

  onChecked($event:any){

  }
  onSelectSwitch($event:any){

  }

  reset(){

  }
  apply(){}

}
