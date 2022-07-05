import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';


@Component({
  selector: 'app-comp-charts',
  templateUrl: './comp-charts.component.html',
  styleUrls: ['./comp-charts.component.scss']
})
export class CompChartsComponent {
  
  @Output() changeData: EventEmitter<any> = new EventEmitter<number>();

  @Input() myChart: any;
  @Input() title: any;
  @Input() btnData:any;
  @Input() subTitle: any;
  @Input() showFilterIcon!: boolean;
  @Input() showButtons!: boolean;
  @Input() 
  id: any;
  // btnName1='Year';
  // btnName2='Month';
  // btnName3='Week';
 
  task1() {
    this.id = 1;
    this.changeData.emit(1)
  }

  task2() {
    this.id = 2;
    this.changeData.emit(2)
  }

  task3() {
    this.id = 3;
    this.changeData.emit(3)
  }

 

}
