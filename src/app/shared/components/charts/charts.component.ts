import { Component, Input, OnInit } from '@angular/core';
import { registerables, Chart } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  ctx:any;
  myChart:any;
  constructor() { }
  
  @Input() ChartConfig:any;
  ngOnInit(): void {
    this.ctx = document.getElementById('myChart');

    this.myChart = new Chart(this.ctx, this.ChartConfig);

  }

}
