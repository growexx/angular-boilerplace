import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/core/services/common/common.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

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

  tableData:any;

  constructor(public commonService:CommonService,public usersService:UsersService) { }

  ngOnInit(): void {
    this.tableData = this.usersService.getAllUsers().subscribe(res=>{
      this.tableData = res;
    });
  }

  @HostListener('window:keydown.escape', ['$event'])
  handleKeyEscape(event: KeyboardEvent) {
    this.commonService.showFilterDropdown = false;
  }
}
