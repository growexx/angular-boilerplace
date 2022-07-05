import { Component, OnInit } from '@angular/core';

import { ChartsDataService } from './charts-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  chartId:any;
  title = 'Angular Boiler Plate';

  cardTitle = 'Recent Statistics';
subTitle = 'More than 400 new members';
btnData={
  buttonName1:"Year",
  buttonName2:"Month",
  buttonName3:"week",

}

constructor(public chartDataService:ChartsDataService){


 
}
 
  ngOnInit() {
   
    this.chartId = this.chartDataService.getChart();
    console.log(this.chartId);
}

updateData($event:number){
console.log($event)
if($event===1){
  this.chartId = this.chartDataService.getYearlyData();
}
if($event===2){
  this.chartId = this.chartDataService.getMonthlyData();
}
if($event===3){
  this.chartId = this.chartDataService.getWeeklyData();
}
}




}
