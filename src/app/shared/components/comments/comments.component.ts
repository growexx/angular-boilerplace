import { Component, OnInit } from '@angular/core';
import { DummyDataService } from 'src/app/core/services/dummy-data.service';
import { DialogComponent } from '../widgets/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';



export interface DialogData{
  type:string,
  label:string;
  text:string;
  placeholder:string
}
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  allComments: any;
  response:any;
  comment:any;
  label='Comment';
  deletedComment:any;
  placeholder='Enter comment';
  commentBody!:string;
  index!:number;
  constructor(private dummyDataService : DummyDataService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
   this.dummyDataService.getAllComments().subscribe(data=>{
    this.response= data;
    this.allComments=this.response.comments;
    console.log(this.allComments)
   })
  }





  deleteSelectedComment($event:any){
    debugger
console.log($event)
this.comment= $event;
this.index = this.allComments.indexOf($event)
this.dummyDataService.deleteComment(this.comment).subscribe();
    this.allComments.splice(this.index,1);

  }





  editComment($event:any){
    let editText;
console.log($event);
this.comment = $event;
editText = $event.body; 

const dialogRef = this.dialog.open(DialogComponent, {
  width: '325px',
  data: {type:'edit', label:this.label,text:editText,placeholder:this.placeholder },
  disableClose:true
})
dialogRef.afterClosed().subscribe(result=>{
  console.log('this dialog was closed');
  editText = result;
  console.log(editText);
  this.comment.body=editText;
  console.log(this.comment);
  this.dummyDataService.editComment(this.comment).subscribe()
  })
  }





  clickAdd(){
    let addText;
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '325px',
      data: { type:'add', label:this.label,text:addText,placeholder:this.placeholder},
      disableClose:true
    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log('this dialog was closed');
      addText = result;
      console.log(addText);
      this.comment={
    
          body:addText,
          postId:3,
          userId:5
      }
      this.dummyDataService.addComment(this.comment).subscribe(data=>{
       this.allComments.push(data);
      })

            
    })
  }

 
  }


