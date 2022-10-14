import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    SharedModule
  ]
})
export class CardsModule { }
