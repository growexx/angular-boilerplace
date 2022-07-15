import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from 'src/app/core/services/common/common.service';
import { UsersService } from '../users.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/organisms/widgets/dialog/dialog.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  roles: Array<string> = [];
  gender: Array<string> = [];
  constructor(public commonService: CommonService, public usersService: UsersService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe(res => {
      this.usersService.usersData = res.users;
      this.usersService.usersData.filter((ele: any) => {
        (this.usersService.roles.indexOf(ele.company.department)) ? this.usersService.roles.push(ele.company.department) : '';
      });
      this.usersService.usersData.filter((ele: any) => {
        (this.usersService.gender.indexOf(ele.gender)) ? this.usersService.gender.push(ele.gender) : '';
      });
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '325px',
      data: { roles: this.usersService.roles, gender: this.usersService.gender },
    });
  }
}