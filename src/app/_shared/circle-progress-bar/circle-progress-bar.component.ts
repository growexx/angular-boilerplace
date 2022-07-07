import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-progress-bar',
  templateUrl: './circle-progress-bar.component.html',
  styleUrls: ['./circle-progress-bar.component.scss']
})
export class CircleProgressBarComponent implements OnInit {
@Input() progressBar:any;
@Input() isLoader:any;
@Input() loaderClass:any;
  
    
  constructor() { }

  ngOnInit(): void {
    
    console.log(this.loaderClass)
  }

}
