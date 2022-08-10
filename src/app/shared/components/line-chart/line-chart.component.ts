import { Component, Input } from '@angular/core';
import { Data, Options } from 'src/app/core/interface/line-chart';



@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent{

  @Input() options!:Options;
  @Input() total!:any;
  @Input() data!:Data;
  @Input() iconClass!:string;
 
   }

 
 

