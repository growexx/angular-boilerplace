import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as _ from 'lodash';
import { btn } from '../core/interface/button';
import { CommonService } from '../core/services/common/common.service';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { taskDetailsType } from '../task/task-modal';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private dialog: MatDialog, public taskService: TaskService,public commonService: CommonService) { }
  isOpen: boolean = false;
  btnHandelClick:any = [];
  btnClicked:EventEmitter<any> = new EventEmitter<any>();
  btnData: btn = {type:'small',btnClass:'btn-small btn-primary', btnText:'Open Modal', eventName: this.btnClicked,returnObj:['id']};
  taskDetails !: taskDetailsType;
  ngOnInit(): void {
    this.getAllTasks()
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


  getAllTasks() {
    this.taskService.getAllTodos().subscribe((res: any) => {
      this.taskDetails = res
    })
  }
}
