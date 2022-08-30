
import { CommonService } from 'src/app/core/services/common/common.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(public commonService: CommonService) { }
  ngOnInit(): void {
  }

}
