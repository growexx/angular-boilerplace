import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { CompFilterPipe } from './core/pipes/comp-filter.pipe';
import { DummyDataService } from './core/services/dummy-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

 
timelineEvents=[
  {content:"Task 1", date:"15/07/2022", status: "Done"},
  {content:"Task 2", date:"17/07/2022", status: "Done"},
  {content:"Task 3", date:"17/07/2022", status: "Pending"},
  {content:"Task 4", date:"17/07/2022", status: "Done"},
  {content:"Task 5", date:"17/07/2022", status: "Pending"},
]
displayedColumns: string[] = ['id', 'name', 'role', 'email','phone'];

  textArea = 
  {label:'Description', placeholder: "Enter description" };

  tooltipConfig={
    buttonText:"Action",
    showDelay:100,
  hideDelay :100000,
  message:"this is edit button",
  position:"right",
  tooltipDisabled:false,
  tooltipClass:"none",

  }

  switches=[
    {id:1,
      name:'Option 1',
      label:'Option 1',
      required:true,labelPosition:"after",
    disabled:false,
    checked:true,
    color:'primary'},
    {id:2,
      name:'Option 2',
      label:'Option 2',
      required:true,labelPosition:"before",
    disabled:false,
    checked:true,
    color:'primary'},
    {id:3,
      name:'Option 3',
      label:'Option 3',
      required:true,labelPosition:"before",
    disabled:false,
    checked:true,
    color:'primary'} ,
    {id:4,
      name:'Option 4',
      label:'Option 4',
      required:true,labelPosition:"before",
    disabled:false,
    checked:true,
    color:'primary'} 
      ]

      onSelectSwitch($event:any){
console.log($event)
      }

  radioClass='radioButton';
  radioButtons = [
    {name:'Option 1', key: 1 , disabled: false , checked:false , labelPosition:'after',required: true},
    {name:'Option 2', key: 2, disabled: false, checked:false, labelPosition:'after',required: true},
    {name:'Option 3', key: 3, disabled: false, checked:true, labelPosition:'after',required: true},
    
  ]
  onSelectRadio($event:any){
    console.log($event)

  }

  checkboxes = [
    {id:1,name:'Option 1', label: 'Option 1' , disabled: false , checked:true , labelPosition:'after',required: true, color:'primary'},
    {id:2,name:'Option 2', label: 'Option 2', disabled: false, checked:false, labelPosition:'after',required: true, color:'primary'},
    {id:3,name:'Option 3', label: 'Option 3', disabled: false, checked:true, labelPosition:'after',required: true, color:'primary'}, 
  ]
 
 //function of getting input of checkboxes
  onChecked($event:any){
console.log($event)
  }
  initData:any;
  barChartOptions:any;
  weeklyIncomeData:any;
  newUsersData:any;
  iconClass1='fourGrid';
  iconClass2='user';
  total = '$750';
  timelineTitle = "My Activity";
  timelineSubtitle = "30 Todos list";
  linechartOptions:any;
  title='Angular Boiler Plate';
  showDiv=false;
  searchText:any;
  userList: any = {};
  events:any;
  background:ThemePalette = 'accent';
  color:ThemePalette='primary'
  animationDuration = 0;
  todoEvents:any[]=[];
  list:any;
  chartId:any;
  cardTitle = 'Recent Statistics';
  subTitle = 'More than 400 new members';
  btnData={
    buttonName1:"Year",
    buttonName2:"Month",
    buttonName3:"week",
  }
  buttonClass='tabs';
//object of progress bar
  progressBar={
"outerStrokeLinecap":"round",
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
  // data for tabs
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
constructor(
  public compFilterPipe:CompFilterPipe,
  public dummyDataService: DummyDataService
  ){
    //options for line chart
    this.linechartOptions = {
      interaction:{
  mode:'point'
      },
      title: {
          display: true,
          text: 'Weekly Income',
          fontSize: 16
      },
      plugins: {
        legend: {
          labels: {
            boxWidth:0,
            color: '#ffffff',
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          events:['mousemove','mouseout'],
          backgroundColor:'#F3F6F9',
          bodyColor:'#4A4854',
          titleColor:'#4A4854',
          caretSize:0,
        xAlign:'left',
        yAlign:'top',
        position:'nearest',
          usePointStyle:true,
          borderColor:'#C9F7F5',
          boxPadding:4,
          padding:12,
        }
      },
      scales: {
        x: {
          display: false,
          beginAtZero: true,
          ticks: {
            display: false,
          },
          grid: {
            display:false
          }
        },
        y: {
          type: 'linear',
          display: false,
          position: 'left',
          beginAtZero: true,
          ticks: {
            display: false,
            min: 0,
            max: 5,
          },
          grid: {
            display:false
          }
        },
      },
      elements: {
        point: {
          hoverRadius: 6,
          radius:0,
          hitRadius:100,
          hoverBorderWidth:4,
          events:['mousemove'],
          borderWidth:0,
        }
      },
      layout:{
        padding:0,
      }
  };

  //data of line income chart
  this.weeklyIncomeData = {
    labels:['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Net Profit',
            data:[40, 51, 40, 59, 52, 44, 45] ,
            fill: true,
            borderColor: '#5CC6BD',
            borderWidth:4,
            tension: .4,
            backgroundColor: '#C9F7F5'
        }
    ]
};

//data of line user chart
this.newUsersData = {
  labels:['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
      {
          label:  'Net Profit',
          data:[40, 51, 40, 59, 52, 44, 45] ,
          fill: true,
          borderColor: '#3898FB',
          borderWidth:4,
          tension: .4,
          backgroundColor: '#E1F0FE'
      }
  ]
};

//bar charts options
this.barChartOptions = {
  plugins: {
    legend: {
      labels: {
        color: '#A1A5B7'
      }
    },
    tooltip: {
      mode: 'index',
      intersect: false,
      events:['mousemove','mouseout'],
      backgroundColor:'#F3F6F9',
      bodyColor:'#4A4854',
      titleColor:'#4A4854',
      caretSize:0,
    xAlign:'left',
    yAlign:'top',
    position:'nearest',
      usePointStyle:true,
      borderColor:'#C9F7F5',
      boxPadding:4,
      padding:12,
    }
  },
  scales: {
    x: {
      beginAtZero: true,
      ticks: {
        color: '#A1A5B7'
      },
      grid: {
        color: '#ffffff',
        borderColor: '#F5F8FA',
        drawBorder: true
      }
    },
    y: {
      type: 'linear',
      display: true,
      position: 'left',
      ticks: {
        color: '#A1A5B7',
      },
      grid: {
        color: '#F5F8FA',
        borderColor: '#ffffff',
        borderDash: [5],
        drawBorder: true
      }
    }
  },
  elements: {
    point: {
      backgroundColor: '#ffffff',
      hoverRadius: 4
    }
  }
};

//initial data of bar charts
this.initData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: '#ffffff',
      backgroundColor: '#54ADC6',
      barThickness: 12,
      barPercentage: 0.5,
      borderRadius: 100,
      borderWidth: 1
    },
    {
      label: 'Second Dataset',
      data: [28, 48, 40, 19, 86, 27, 90],
      barThickness: 12,
      barPercentage: 0.5,
      borderRadius: 100,
      borderWidth: 1,
      borderColor: '#ffffff',
    }
  ]
};

    
}
 
  ngOnInit() {
    //timeout function for loader
   setTimeout(() => {
    this.isLoader= false;
    this.data();
   }, 4000); 
   this.getUserList();
   this.getTodo();
}

//to get userlist for search box
getUserList(){
  this.dummyDataService.getAllUsers().subscribe({
    next:(data:any)=>{(this.userList=data)
    },
   })
  return this.userList
}

//to get todo list for timeline
getTodo(){
  this.dummyDataService.getAllTodos().subscribe({
    next:(data:any)=>{this.events=data.todos;
      console.log(this.events)
    },
    
   })
}





updateData($event:number){
  console.log($event)
  //Data for Year
  if($event===1){
    this.initData = {
      labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40, 81, 56, 55, 40, 25],
          borderColor: '#ffffff',
          backgroundColor: '#54ADC6',
          barThickness: 12,
          barPercentage: 0.5,
          borderRadius: 100,
          borderWidth: 1
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90, 80, 81, 56, 55, 40],
          barThickness: 12,
          barPercentage: 0.5,
          borderRadius: 100,
          borderWidth: 1,
          borderColor: '#ffffff',
        }
      ]
    };
  }
  //Data for Month
  if($event===2){
    this.initData = { labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    datasets: [
      {
        label: 'First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40, 81, 56, 55, 40, 25, 59, 80, 81, 56, 55, 40, 81, 56, 59, 80, 55, 40, 81, 56, 55, 40, 25, 59, 80,],
        borderColor: '#ffffff',
        backgroundColor: '#54ADC6',
        barThickness: 8,
        barPercentage: 0.5,
        borderRadius: 100,
        borderWidth: 1
      },
      {
        label: 'Second Dataset',
        data: [28, 48, 40, 19, 86, 27, 90, 80, 81, 56, 55, 40, 48, 40, 19, 86, 27, 90, 80, 81, 56, 55, 48, 40, 19, 86, 27, 90, 80, 81,],
        barThickness: 8,
        barPercentage: 0.5,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#ffffff',
      }
    ]
  };
}
//Data for week
  if($event===3){
    this.initData={
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: '#ffffff',
          backgroundColor: '#54ADC6',
          barThickness: 12,
          barPercentage: 0.5,
          borderRadius: 100,
          borderWidth: 1
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          barThickness: 12,
          barPercentage: 0.5,
          borderRadius: 100,
          borderWidth: 1,
          borderColor: '#ffffff',
        }
      ]
    };
  }
  }


//Data for loader
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
// Result of searched string
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

//Text area input value
textAreaValue($event:any){
  console.log($event)
}
}