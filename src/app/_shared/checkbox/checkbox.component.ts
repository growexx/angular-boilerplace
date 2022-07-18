import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent  {
 
  @Output() checked: EventEmitter<any> = new EventEmitter<boolean>();
  @Input() isChecked?:boolean;
  @Input() label?:string;
  @Input() disable?:boolean;
  @Input() color:ThemePalette;
  @Input() checkboxes:any;
  
 
  value? :string;
checkboxArray:any= [];

  changeValue($event:any){
    console.log($event)
      this.value = $event.source.value
      if($event.checked===true){
this.checkboxArray.push(this.value)
      }else{
        this.checkboxArray.pop(this.value)
      }
       this.checked.emit(this.checkboxArray)
  }
}
