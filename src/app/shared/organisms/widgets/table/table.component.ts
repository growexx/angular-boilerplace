import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common/common.service';
import { UsersService } from 'src/app/users/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tableConfig: any;
  @Input() tableData: Array<any> = [];
  page: number = 1;
  itemsPerPage: number = 8;
  checkedList: any;
  error_message:any = ''
  toast:any;
  constructor(public commonService: CommonService, public usersService: UsersService) {
  }

  ngOnInit(): void {
    (async () => {
      for (var i = 0; i < this.tableData?.length; i++) {
        this.tableData[i].isSelected = this.commonService.checkAllCheckboxes;
      }
    })();
  }

  checkUncheckAll() {
    for (var i = 0; i < this.tableData.length; i++) {
      this.tableData[i].isSelected = !this.commonService.checkAllCheckboxes;
    }
    this.getCheckedItemList();
    this.commonService.checkAllCheckboxes = !this.commonService.checkAllCheckboxes;
  }

  isAllSelected() {
    this.commonService.checkAllCheckboxes = this.tableData.every(function (item: any) {
      return item.isSelected == true;
    })
    this.getCheckedItemList();
  }

  getCheckedItemList() {
    this.checkedList = [];
    for (var i = 0; i < this.tableData.length; i++) {
      if (this.tableData[i].isSelected)
        this.checkedList.push(this.tableData[i]);
    }
    this.checkedList = JSON.stringify(this.checkedList);
  }

  OnDelete(id: number) {
    var user = this.tableData.filter((ele: any) => ele.id == id);
    Swal.fire({
      title: 'Are you sure?',
      text: "Are you sure you want to delete " + user[0].name + "?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      focusConfirm: false,
      focusCancel: false,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        this.commonService.toggleActionDropdown(user[0].id);
        this.usersService.deleteUser(user[0].id).subscribe({
          next: (data: any) => {
            user.forEach(f => this.tableData.splice(this.tableData.findIndex(e => e.id === id), 1));
            this.toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true
            })
            this.toast.fire({
              icon: 'success',
              title: 'You have deleted ' + user[0].firstName + ' ' + user[0].lastName + ' !.',
            });
          },
          error: (error: any) => {
            this.errorToast(error);
          }
        });
      }
    });
  }

  errorToast(error: any){
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
}
