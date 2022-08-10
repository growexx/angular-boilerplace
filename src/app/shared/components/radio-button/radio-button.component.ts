import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent {
  
  @Input() color:ThemePalette;
  @Input() radioButtons:any;
  @Output() selected: EventEmitter<any> = new EventEmitter<any>();
  

 

 

  onSelect($event:any){
console.log($event)
this.selected.emit($event.value)

  }

}
