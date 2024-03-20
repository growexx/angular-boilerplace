

import { Component,OnInit } from '@angular/core';
import * as _ from 'lodash';
import { CommonService } from '../core/services/common/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  getAllTasks() {
    throw new Error('Method not implemented.');
  }
  openModal() {
    throw new Error('Method not implemented.');
  }
  constructor(public commonService: CommonService) { }
  ngOnInit(): void {
  }


  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public barChartLabels: string[] = ['Label 1', 'Label 2', 'Label 3', 'Label 4'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81], label: 'Series A' },
  ];
}
