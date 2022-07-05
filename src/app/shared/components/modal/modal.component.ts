import { Component, EventEmitter, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { modalType } from '../../../core/interface/modal';


interface DialogData{
  type: modalType,
  modalImg: any,
  modalTitle: string,
  modalText1: string,
  modalText2?: string,
  modalText3?: string,
  modalText4?: string,
  modalActions: EventEmitter<any> | any;
}

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
  }

}
