import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions} from '@angular/material/tooltip';
import { right } from '@popperjs/core';

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 1000,
  hideDelay: 1000,
  touchendHideDelay: 1000,
};
@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  providers: [{provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}],
  encapsulation: ViewEncapsulation.None,
})
export class TooltipComponent implements OnInit {

  @Input() tooltipConfig:any;
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
