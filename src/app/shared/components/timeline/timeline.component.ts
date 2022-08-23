import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTextboxComponent } from '../widgets/dialog-textbox/dialog-textbox.component';
import { Events } from './timeline.modal';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
@Input() events:Events[]=[];
@Input() title:any;
@Input() subtitle:any;

taskStatus:any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
 
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogTextboxComponent, {
      width: '325px',
    //   data: { roles: this.usersService.roles, gender: this.usersService.gender },
    });
  }
}
