import { Component, OnInit } from '@angular/core';


import { ChartsDataService } from './charts-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  progressBar={

outerStrokeLinecap:"round",
    radius:60,
    outerStrokeWidth: 8,
    percent:100,
    outerStrokeColor: "#009EF7",
    showUnits:false,
    animationDuration:4000,
    showInnerStroke : false,
    animation:true,
    showSubtitle:false,
    showTitle:false,
    lazy:false
  }
  chartId:any;
  title = 'Angular Boiler Plate';
  isLoader=true;
  loaderClass= "loader";
  myData:any
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
   
   
   setTimeout(() => {
   
    this.isLoader= false;
    
    this.data();
   
   }, 4000); 
 

    

    
}



// getChartData(){
//   debugger
//   this.chartId = this.chartDataService.getChart();
//   console.log(this.chartId)
//   return this.chartId;
// }

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



data(){
  
  this.myData=[{
    "name1":"Ravi",
    "phone":"35467",
    "class":"sixth"
  },
  {
    "name1":"Sakshi",
    "phone":"35467",
    "class":"sixth"
  },
  {
    "name1":"Raj",
    "phone":"35467",
    "class":"sixth"
  },
  {
    "name1":"Ra,",
    "phone":"35467",
    "class":"sixth"
  }]
  console.log(this.myData);
  return this.myData;
  
}





}
