import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import * as _ from 'lodash';
import { MatDialog } from '@angular/material/dialog';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { button } from 'src/app/shared/interface/button';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isOpen: boolean = false;
  btnHandelClick:any = [];
  btnClicked:EventEmitter<any> = new EventEmitter<any>();
  btn: any = {type:'small',btnClass:'btn-small btn-primary', btnText:'Open Modal', eventName: this.btnClicked,returnObj:['id']};

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}


  handleBtnClicked(){
    this.btnClicked.emit(); 
  }

  openModal(data?:any) {

    let actions = [];
    const successModelActions = [
      {
        label: 'View all activities >>',
        type: 'NORMAL',
        isDisable: false
      }
    ]

    actions = _.cloneDeep(successModelActions);
    const modalType = 'userList';
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        type: 'userList',
        modalImg: 'assets/images/avtaar.jpg',
        modalTitle: 'User List',
        modalText1: 'BoomApp by Keenthemes',
        modalText2: '#45789',
        modalText3: '$23,000',
        modalText4: 'Sales',
        modalActions: actions
      }
    })
  }


}
