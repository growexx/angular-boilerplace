import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit  {
  
 
  @Output() onChecked: EventEmitter<any> = new EventEmitter<boolean>();
  @Input() checkboxes:any;
  eliminatedValue:any;
  removedElement?:number;
  name? :string;
checkboxArray:any;

ngOnInit(){
  this.checkboxArray=[];
  
  for(let i=0; i<this.checkboxes.length;i++){
  if( this.checkboxes[i].checked===true){
    this.checkboxArray.push(this.checkboxes[i].name);
    }
  }
  this.onChecked.emit(this.checkboxArray)
}
  changeValue($event:any){
      if($event.checked===true){
 this.checkboxArray.push($event.source.name)
      }else{
        for(let i =0; i<this.checkboxArray.length;i++){
          if(this.checkboxArray[i]===$event.source.name){
            this.eliminatedValue=this.checkboxArray.splice(i,1);
            $event.source.name = this.eliminatedValue[0];
          }
        }
      }
       this.onChecked.emit(this.checkboxArray)
  }
}
