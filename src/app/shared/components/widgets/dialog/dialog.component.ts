import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../comments/comments.component';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Output() onAdding: EventEmitter<any> = new EventEmitter<any>();
  commentForm! : FormGroup
  comment:any;
  textArea = 
  {label:'Description', placeholder: "Enter description" };

  constructor( public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(){
// this.commentForm=new FormGroup({
//   'comment':new FormControl()

    
  }
  // textAreaValue($event:any){
  //   console.log($event)
  //   this.comment=$event
    
  // }

  onCancel(){
     this.dialogRef.close();
  }

}
