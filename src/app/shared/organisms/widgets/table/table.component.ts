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
  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
  }

  @HostListener('window:keydown.escape', ['$event'])
  handleKeyEscape(event: KeyboardEvent) {
    this.commonService.showActionDropdown = false;
    this.commonService.index = 0; 
  }
}
