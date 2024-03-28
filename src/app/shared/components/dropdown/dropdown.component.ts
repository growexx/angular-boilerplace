import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../../../core/services/common/common.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() id:number = 0;
  @Input() dropdownConfig:any = {};

  constructor(public commonService:CommonService) { }

  ngOnInit(): void {
  }

}
