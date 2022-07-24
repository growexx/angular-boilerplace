import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent {
  @Output() input: EventEmitter<any> = new EventEmitter<boolean>();
  @Input() textArea:any;
  inputValue:any;
  

 
  getInputValue($event:any){
   this.inputValue = $event.target.value;
   this.input.emit(this.inputValue)
  }
}
