import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../comments/comments.component';
@Component({
  selector: 'app-dialog-textbox',
  templateUrl: './dialog-textbox.component.html',
  styleUrls: ['./dialog-textbox.component.scss']
})
export class DialogTextboxComponent implements OnInit {
  @Output() onAdding: EventEmitter<any> = new EventEmitter<any>();
  commentForm! : FormGroup
  comment:any;
  textArea = 
  {label:'Description', placeholder: "Enter description" };

  constructor( public dialogRef: MatDialogRef<DialogTextboxComponent>,
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
