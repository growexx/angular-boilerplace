import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from 'src/app/core/services/common/common.service';
import { UsersService } from 'src/app/users/users.service';
import Swal from 'sweetalert2';

export interface FilterDialogData {
  roles: Array<string>;
  gender: Array<string>;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  error_message:any = '';
  toast:any;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FilterDialogData,
    public usersService: UsersService,
    public commonService: CommonService,
  ) { }

  filterForm = new UntypedFormGroup({
    role: new UntypedFormControl('Select option', [Validators.required]),
    gender: new UntypedFormControl('Select option', [Validators.required]),
  });

  ngOnInit(): void { }

  onSubmitFilter() {
    if (this.filterForm.value.role === "Select option" && this.filterForm.value.gender === "Select option") {
      this.usersService.getAllUsers().subscribe({
        next: (data: any) => {
          this.usersService.usersData = data.users;
          this.usersService.usersData.filter((ele: any) => {
            (this.usersService.roles.indexOf(ele.company.department) === -1) ? this.usersService.roles.push(ele.company.department) : '';
          });
          this.usersService.usersData.filter((ele: any) => {
            (this.usersService.gender.indexOf(ele.gender) === -1) ? this.usersService.gender.push(ele.gender) : '';
          });
        },
        error: (error: any) => {
          this.errorToast(error);
        }
      });
    } else {
      this.usersService.filterUser('company.department', this.filterForm.value.role)
      .subscribe({
        next: (data: any) => {
          this.usersService.usersData = data.users;
          this.usersService.usersData = this.usersService.usersData.filter((ele: any) => (ele.gender === this.filterForm.value.gender.toLowerCase()));
        },
        error: (error: any) => {
          this.errorToast(error);
        }
      })

    }
    this.dialogRef.close();
  }

  onResetFilter() {
    this.filterForm.reset();
    this.usersService.getAllUsers().subscribe({
      next: (data: any) => {
        this.usersService.usersData = data.users;
        this.usersService.usersData.filter((ele: any) => {
          (this.usersService.roles.indexOf(ele.company.department) === -1) ? this.usersService.roles.push(ele.company.department) : '';
        });
        this.usersService.usersData.filter((ele: any) => {
          (this.usersService.gender.indexOf(ele.gender) === -1) ? this.usersService.gender.push(ele.gender) : '';
        });
      },
      error: (error: any) => {
        this.errorToast(error);
      }
    });
    this.dialogRef.close();
  }

  errorToast(error:any){
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
