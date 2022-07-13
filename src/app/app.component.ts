import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { CompFilterPipe } from './_shared/pipes/comp-filter.pipe';

import { ChartsDataService } from './charts-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title='Angular Boiler Plate';
  showDiv=false;
  searchText:any;
  userList: any = {};
  background:ThemePalette = 'primary';
  color:ThemePalette='primary'
  animationDuration = 0;
  list:any;
  chartId:any;
  cardTitle = 'Recent Statistics';
  subTitle = 'More than 400 new members';
  btnData={
    buttonName1:"Year",
    buttonName2:"Month",
    buttonName3:"week",
  }

  progressBar={
"outerStrokeLinecap":"square",
"radius": 60,
"space": "-10",
"percent": 85,
"outerStrokeGradient": true,
"outerStrokeWidth": "12",
"outerStrokeColor": "#4882c2",
"outerStrokeGradientStopColor": "#53a9ff",
"innerStrokeColor": "#e7e8ea",
"innerStrokeWidth": 10,
"showTitle" : false,
"showSubtitle" : false,
"showUnits" : false,
"animationDuration": 4000,
"showBackground": false,
"startFromZero": false,
"lazy": true
  }
  isLoader=true;
  loaderClass= "loader";
  myData:any
  
  tabs = [
    { "label":"First",
    
    "disabled":"false",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    {"label":"Second",
    "icon":"book",
    "disabled":"false",
      "content" :"Anjali ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
    {"label":"Third",
    
    "disabled":"false",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
  
   ]
constructor(public chartDataService:ChartsDataService,
  private compFilterPipe:CompFilterPipe){
}
 
  ngOnInit() {
    console.log(this.searchText);
    this.chartId = this.chartDataService.getChart();
   setTimeout(() => {
   
    this.isLoader= false;
    
    this.data();
   
   }, 4000); 
  fetch('https://dummyjson.com/users')
  .then((res) =>res.json())
  .then(data => this.userList = data)
  .then(() => console.log(this.userList))
    
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
  
  return this.myData;
  
}

search($event:any){

this.searchText = $event;
console.log(this.userList.users.length)
this.list =this.compFilterPipe.transform(this.userList.users,this.searchText);
console.log(this.list.length)
if(this.list.length===0){
  this.showDiv = true; 
}else{
  this.showDiv = false;
}
}
}