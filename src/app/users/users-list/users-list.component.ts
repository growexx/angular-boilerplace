import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/organisms/widgets/dialog/dialog.component';
import { CommonService } from 'src/app/core/services/common/common.service';
import { UsersService } from '../users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  error_message: any = '';
  roles: Array<string> = [];
  gender: Array<string> = [];
  toast: any;
  constructor(public commonService: CommonService, public usersService: UsersService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe({
      next: (data: any) => {
        this.usersService.usersData = data.users;
        this.usersService.usersData.filter((ele: any) => {
          (this.usersService.roles.indexOf(ele.company.department) === -1) ? this.usersService.roles.push(ele.company.department) : '';
        });
        this.usersService.usersData.filter((ele: any) => {
          let gender = ele.gender.charAt(0).toUpperCase() + ele.gender.slice(1);
          (this.usersService.gender.indexOf(gender) === -1) ? this.usersService.gender.push(gender) : '';
        });
      },
      error: (error: any) => {
        this.errorToast(error);
      }
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '325px',
      data: { roles: this.usersService.roles, gender: this.usersService.gender },
    });
  }

  errorToast(error: any) {
    if (!error.error.message) {
      if (error.status === 400) {
        this.error_message = 'Bad Request';
      } else if (error.status === 401) {
        this.error_message = 'Unauthorized';
      } else if (error.status === 403) {
        this.error_message = 'Forbidden';
      } else if (error.status === 404) {
        this.error_message = 'Not Found';
      } else if (error.status === 502) {
        this.error_message = 'Bad Gateway';
      }
    } else {
      this.error_message = error.error.message;
    }

    this.toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    })
    this.toast.fire({
      icon: 'error',
      title: error.status + '! ' + this.error_message,
    });
  }

  onSearchFilter(){
    this.usersService.searchUser(this.commonService.searchFilter).subscribe({
      next: (data: any) => {
        this.usersService.usersData = data.users;
      },
      error: (error: any) => {
        this.errorToast(error);
      }
    });
  }

  onClearAllSearchFilter(){
    this.commonService.searchFilter = '';
    this.commonService.filterForm = {
      role: "",
      gender: ""
    }
    this.usersService.searchUser(this.commonService.searchFilter).subscribe({
      next: (data: any) => {
        this.usersService.usersData = data.users;
      },
      error: (error: any) => {
        this.errorToast(error);
      }
    });
  }
}