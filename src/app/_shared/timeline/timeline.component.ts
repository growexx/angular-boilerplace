import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../widgets/dialog/dialog.component';
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
  //   console.log(this.events);
  // this.taskStatus = this.events;
  // console.log(this.taskStatus);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '325px',
    //   data: { roles: this.usersService.roles, gender: this.usersService.gender },
    });
  }
}
