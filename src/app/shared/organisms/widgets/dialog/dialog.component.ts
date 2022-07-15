import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from 'src/app/core/services/common/common.service';
import { UsersService } from 'src/app/users/users.service';

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

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FilterDialogData,
    public usersService: UsersService,
    public commonService: CommonService,
  ) { }

  filterForm = new FormGroup({
    role: new FormControl('Select option', [Validators.required]),
    gender: new FormControl('Select option', [Validators.required]),
  });

  ngOnInit(): void { }

  onSubmitFilter() {
    if (this.filterForm.value.role === null && this.filterForm.value.gender === null) {
      this.usersService.getAllUsers().subscribe(res => {
        this.usersService.usersData = res.users;
        this.usersService.usersData.filter((ele: any) => {
          (this.usersService.roles.indexOf(ele.company.department) === -1) ? this.usersService.roles.push(ele.company.department) : '';
        });
        this.usersService.usersData.filter((ele: any) => {
          (this.usersService.gender.indexOf(ele.gender) === -1) ? this.usersService.gender.push(ele.gender) : '';
        });
      });
    } else {
      this.usersService.usersData = this.usersService.usersData.filter((ele: any) => (ele.company.department === this.filterForm.value.role && ele.gender === this.filterForm.value.gender));
    }
    this.dialogRef.close();
  }

  onResetFilter() {
    this.filterForm.reset();
    this.usersService.getAllUsers().subscribe(res => {
      this.usersService.usersData = res.users;
      this.usersService.usersData.filter((ele: any) => {
        (this.usersService.roles.indexOf(ele.company.department) === -1) ? this.usersService.roles.push(ele.company.department) : '';
      });
      this.usersService.usersData.filter((ele: any) => {
        (this.usersService.gender.indexOf(ele.gender) === -1) ? this.usersService.gender.push(ele.gender) : '';
      });
    });
    this.dialogRef.close();
  }
}
