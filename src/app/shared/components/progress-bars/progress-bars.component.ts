import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'progress-bars',
  templateUrl: './progress-bars.component.html',
  styleUrls: ['./progress-bars.component.scss']
})
export class ProgressBarsComponent implements OnInit {
  @Input('progressValue') progressValue:any;
  constructor() { }

  ngOnInit(): void {
  }

}
