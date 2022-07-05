import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { button } from '../../../core/interface/button';
import * as _ from 'lodash';


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Input() btnVal: any;
  @Output() btnClicked:EventEmitter<any> = new EventEmitter<any>();


  ngOnInit(): void {
  }

  openPopupData(event:any){
    this.btnClicked.emit(event);
  }

}
