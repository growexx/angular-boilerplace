import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  
  @Input() buttonsArray:any;
  @Input() isDisabled:any;
  @Output() submitFormEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
  }

  submitForm() {
    this.submitFormEvent.emit();
  }
}
