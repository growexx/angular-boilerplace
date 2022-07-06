import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/core/services/common/common.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  roles: Array<string> = [];
  two_step: Array<string> = [];
  tableConfig = [{
    label: 'Name',
  }, {
    label: 'Role',
  }, {
    label: 'Last Login',
  }, {
    label: 'Two-Step',
  }, {
    label: 'Joined Date',
  }, {
    label: 'Actions',
  }];

  tableData: any;
  filterForm = new FormGroup({
    role: new FormControl('Select option', [Validators.required]),
    two_step: new FormControl('Select option', [Validators.required]),
  });

  addUserForm = new FormGroup({
    avatar: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    role: new FormControl('Select option', [Validators.required]),
  });

  constructor(public commonService: CommonService, public usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe(res => {
      this.tableData = res;
      res.filter((ele: any) => {
        (this.roles.indexOf(ele.role) === -1) ? this.roles.push(ele.role) : '';
      });
      res.filter((ele: any) => {
        (this.two_step.indexOf(ele.two_step) === -1) ? this.two_step.push(ele.two_step) : '';
      });
    });
  }

  @HostListener('window:keydown.escape', ['$event'])
  handleKeyEscape(event: KeyboardEvent) {
    this.commonService.showFilterDropdown = false;
  }

  onSubmitFilter() {
    if (this.filterForm.value.role === null && this.filterForm.value.two_step === null) {
      this.usersService.getAllUsers().subscribe(res => {
        this.tableData = res;
        res.filter((ele: any) => {
          (this.roles.indexOf(ele.role) === -1) ? this.roles.push(ele.role) : '';
        });
        res.filter((ele: any) => {
          (this.two_step.indexOf(ele.two_step) === -1) ? this.two_step.push(ele.two_step) : '';
        });
      });
    }
    this.tableData = this.tableData.filter((ele: any) => (ele.role === this.filterForm.value.role && ele.two_step === this.filterForm.value.two_step));
    this.commonService.toggleFilterDropdown();
  }

  onResetFilter(){
    this.filterForm.reset();
    this.usersService.getAllUsers().subscribe(res => {
      this.tableData = res;
      res.filter((ele: any) => {
        (this.roles.indexOf(ele.role) === -1) ? this.roles.push(ele.role) : '';
      });
      res.filter((ele: any) => {
        (this.two_step.indexOf(ele.two_step) === -1) ? this.two_step.push(ele.two_step) : '';
      });
    });
    this.commonService.toggleFilterDropdown();
  }

  addUser(){
    console.log(this.addUserForm.value);
  }


  closeModal(){
    console.log("Modal closed");
  }
}
