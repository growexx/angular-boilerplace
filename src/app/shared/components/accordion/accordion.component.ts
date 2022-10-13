import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { accordion } from 'src/app/core/interface/accordion';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit, OnChanges {

  openState: boolean = false;
  currentIndex: any;
  @Input() accordion: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    if(changes['accordion']?.currentValue !== undefined && changes['accordion']?.currentValue !== null){
      this.accordion = changes['accordion']?.currentValue
    }
  }

  ngOnInit(): void {
  }

  open(index?:any) {
    this.accordion?.filter((acc: any, i: any) => i !== index && acc.active).forEach((acc: any) => acc.active = !acc.active);
    this.accordion[index].active = !this.accordion[index].active;
  }

}
