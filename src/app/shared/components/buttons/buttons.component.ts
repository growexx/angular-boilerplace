import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { button } from '../../interface/button';
import { MatDialog } from '@angular/material/dialog';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { ModalComponent } from '../../modal/modal.component';
import * as _ from 'lodash';


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Input() btnVal: any;
  @Input() actions: button[] = [];
  @Output() btnClicked:EventEmitter<any> = new EventEmitter<any>();

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  // actionClick(actionObj: any, data: any) {
  //   console.log('called console')
  //   let dataObj: any = [];
  //   if (actionObj.hasOwnProperty('returnObj')) {
  //     if (actionObj.returnObj === '') {
  //       dataObj = data;
  //     } else if (Array.isArray(actionObj.returnObj)) {
  //       dataObj = [];
  //       actionObj.returnObj.forEach((dataKey: any) => {
  //         if (data.hasOwnProperty(dataKey)) {
  //           dataObj[dataKey] = data[dataKey];
  //         } else {
  //           dataObj[dataKey] = '';
  //         }
  //       });
  //     }
  //   }
  //   actionObj.eventName.emit(dataObj);
  // }

  openPopupData(event:any){
    this.btnClicked.emit();
  }

}
