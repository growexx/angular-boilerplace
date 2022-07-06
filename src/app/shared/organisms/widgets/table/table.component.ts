import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common/common.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tableConfig: any;
  @Input() tableData: Array<any> = [];
  page: number = 1;
  itemsPerPage: number = 5;
  checkedList:any;
  constructor(public commonService: CommonService) {
  }
  
  ngOnInit(): void {
  }

  @HostListener('window:keydown.escape', ['$event'])
  handleKeyEscape(event: KeyboardEvent) {
    this.commonService.showActionDropdown = false;
    this.commonService.index = 0; 
  }

  checkUncheckAll() {
    for (var i = 0; i < this.tableData.length; i++) {
      this.tableData[i].isSelected = !this.commonService.checkAllCheckboxes;
    }
    this.getCheckedItemList();
  }

  isAllSelected() {
    this.commonService.checkAllCheckboxes = this.tableData.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }

  getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.tableData.length; i++) {
      if(this.tableData[i].isSelected)
      this.checkedList.push(this.tableData[i]);
    }
    this.checkedList = JSON.stringify(this.checkedList);
  }
}
