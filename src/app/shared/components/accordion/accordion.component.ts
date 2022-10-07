import { Component, Input, OnInit } from '@angular/core';
import { accordion } from 'src/app/core/interface/accordion';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  openState: boolean = false;
  currentIndex: any;
  @Input() accordion: any;

  constructor() { }

  ngOnInit(): void {
  }

  open(index: number) {
    this.accordion.filter((acc: any, i: any) => i !== index && acc.active).forEach((acc: any) => acc.active = !acc.active);
    this.accordion[index].active = !this.accordion[index].active;
  }

}
