import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, OnChanges {

  @Input() getData: any;
  cardDetails: any;

  ngOnChanges(changes: SimpleChanges) {
    if(changes['getData'].currentValue!== undefined && changes['getData']?.currentValue !== null){
      this.cardDetails = changes['getData'].currentValue
    }
  }
  constructor() { }

 

  ngOnInit(): void {
  }
}
