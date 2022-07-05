
import { Component, EventEmitter, Input ,OnChanges,OnInit, Output, SimpleChanges, ChangeDetectorRef, ChangeDetectionStrategy, ViewChild, AfterViewInit} from '@angular/core';
import { UIChart } from 'primeng/chart';
import { Chart} from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartsComponent implements OnInit, OnChanges{
  @Input() id!:string;
  @Input() cardTitle!: string;
  @Input()
  subTitle!: string;
  @Input() type: any;
  @Input() chartData:any;
  @Output() changeTime: EventEmitter<any> = new EventEmitter<string>();
  @ViewChild('chart') chart!: UIChart; 
  
  duration!: string;
  yellowBarData:any;
  blueBarData: any;
  optionsBar: any;
  solidFilledLineData: any;
  filledLineData:any;
  doughnutData: any;
  chartOptions: any;
  comboData:any;
  data: any;
  dData:any;
  canvas:any;
  ctx:any;

 
  constructor(private cd: ChangeDetectorRef) { 
    this.yellowBarData = {
      labels: [],
      datasets: [
        {
          label: '',
          data: [],
          borderColor: '#ffffff',
          backgroundColor: '#FFC700',
          barThickness: 12,
          barPercentage: 0.5,
          borderRadius: 100,
          borderWidth: 1
        },
        {
          label: '',
          data: [],
          barThickness: 12,
          barPercentage: 0.5,
          borderRadius: 100,
          borderWidth: 1,
          borderColor: '#ffffff',
        },
        {
          label: '',
          data: [],
          borderColor: '#ffffff',
          backgroundColor: '#50CD89',
          barThickness: 12,
          barPercentage: 0.5,
          borderRadius: 100,
          borderWidth: 1,
        },
      ]
    };
  
    this.optionsBar = {
      plugins: {
        legend: {
          labels: {
            color: '#ffffff',
          }
        },
        tooltips: {
          mode: 'index',
          intersect: false
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            color: '#A1A5B7',
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
            min: 0,
            max: 100,
            color: '#A1A5B7',
            width: 30,
            beginAtZero: true,
          },
          grid: {
            color: '#F5F8FA',
            borderColor: '#ffffff',
            borderDash: [5],
            drawBorder: true
          }
        },
      },
      elements: {
        point: {
          backgroundColor: '#ffffff',
          hoverRadius: 4
        }
      }
    };

    this.blueBarData = {
      labels: [],
      datasets: [
        {
          label: '',
          data: [],
          borderColor: '#ffffff',
          backgroundColor: '#009EF7',
          barThickness: 12,
          barPercentage: 0.5,
          borderRadius: 100,
          borderWidth: 1,
        },
        {
          label: '',
          data: [],
          barThickness: 12,
          barPercentage: 0.5,
          borderRadius: 100,
          borderWidth: 1,
          borderColor: '#ffffff',
        },
        {
          label: '',
          data: [],
          borderColor: '#ffffff',
          backgroundColor: '#50CD89',
          barThickness: 12,
          barPercentage: 0.5,
          borderRadius: 100,
          borderWidth: 1,
        },
      ]
    };

this.solidFilledLineData = {
  labels: [],
  datasets: [
      {
          label: '',
          data: [],
          fill: true,
          tension: .4,
          borderColor: '#FFC700',
          backgroundColor: '#FFC700',
          pointRadius:0,
          hoverRadius:4,
          hitRadius:4             
      },
      
      {
          label: '',
          data: [],
          fill: true,
          borderColor: '#50CD89',
          tension: .4,
          backgroundColor: '#50CD89',
          pointRadius:0,
          hoverRadius:4,
          hitRadius:4
      }
  ]
};

this.filledLineData = {
  labels: [],
  datasets: [
      {
          label: '',
          data: [],
          fill: true,
          tension: .4,
          borderColor: '#6f42c1',
          pointRadius:0,
          hoverRadius:4,
          hitRadius:4                      
      },
      {
        label: '',
        data: [],
        fill: true,
        tension: .4,
        borderColor: '#FFC700',
        pointRadius:0,
        hoverRadius:4,
        hitRadius:4                      
    },
  ]
};

    this.doughnutData = {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        },
        {
          data: [],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        },
        {
          data: [],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }
      ]
    };
}
  ngOnInit(){
    this.dData={
      labels:['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets:[
      {
        label: 'First Dataset',
        data: [6, 9, 0, 1, 6, 5, 4],
      },
    {
      label: 'Second Dataset',
          data: [2, 4, 4, 9, 8, 7, 9],
    },
  //   // {
  //   //   label: 'Second Dataset',
  //   //       data: [28, 48, 40, 19, 86, 27, 90],
  //   // }
  ]
    };
    this.yellowBarData.labels = this.dData.labels;
for (let i = 0; i <  this.dData.datasets.length; i++) {
this.yellowBarData.datasets[i].data = this.dData.datasets[i].data;
this.yellowBarData.datasets[i].label = this.dData.datasets[i].label;

};
  }
  
  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
  if(changes['chartData']['currentValue']){
    this.yellowBarData.labels =changes['chartData']['currentValue']['labels'];
    for (let i = 0; i <  this.chartData.datasets.length; i++) {
    this.yellowBarData.datasets[i].data =changes['chartData']['currentValue'].datasets[i].data;
    this.yellowBarData.datasets[i].label =changes['chartData']['currentValue'].datasets[i].label;
    console.log( this.yellowBarData.datasets)
    }
    
    console.log(this.yellowBarData.labels);
    console.log(this.yellowBarData.datasets[0].data);
    console.log(this.yellowBarData.datasets[1].data);

  // refresh();{
  //   this.cd.detectChanges();
  // }
   } // this.yellowBarData.reinit();
}
  
// ngOnInit(){
//   console.log(this.chartData)
//   this.doughnutData.labels = this.chartData.labels;
//   for (let i = 0; i <  this.chartData.datasets.length; i++) {
// this.doughnutData.datasets[i].data = this.chartData.datasets[i].data;
// this.doughnutData.datasets[i].label = this.chartData.datasets[i].label;
//   };
// this.blueBarData.labels = this.chartData.labels;
// for (let i = 0; i <  this.chartData.datasets.length; i++) {
//   this.blueBarData.datasets[i].data = this.chartData.datasets[i].data;
//   this.blueBarData.datasets[i].label = this.chartData.datasets[i].label;
// };
// this.yellowBarData.labels = this.chartData.labels;
// for (let i = 0; i <  this.chartData.datasets.length; i++) {
// this.yellowBarData.datasets[i].data = this.chartData.datasets[i].data;
// this.yellowBarData.datasets[i].label = this.chartData.datasets[i].label;
// };
// this.solidFilledLineData.labels = this.chartData.labels;
// for (let i = 0; i <  this.chartData.datasets.length; i++) {
// this.solidFilledLineData.datasets[i].data = this.chartData.datasets[i].data;
// this.solidFilledLineData.datasets[i].label = this.chartData.datasets[i].label;
// };
// this.filledLineData.labels = this.chartData.labels;
// for (let i = 0; i <  this.chartData.datasets.length; i++) {
//   this.filledLineData.datasets[i].data = this.chartData.datasets[i].data;
//   this.filledLineData.datasets[i].label = this.chartData.datasets[i].label;
//   };

// //  console.log(this.filledLineData);
// //  console.log( this.chartData.datasets.length);

 


yearlyData(){
  
 this.duration ='year';
 this.changeTime.emit(this.duration)
//  return this.duration;
}

monthlyData(){
  this.duration ='month';
  this.changeTime.emit(this.duration)
  return this.duration;
}

weeklyData(){
  this.duration ='week';
  this.changeTime.emit(this.duration)
  return this.duration;
}
// assign(doughnutData:any,chartData:any) {
// Object.keys(chartData).forEach(function(key){
//   doughnutData[key] = chartData[key];
// });
// }
}


// function refresh() {
//   throw new Error('Function not implemented.');
// }

