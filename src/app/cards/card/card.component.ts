import { Component, OnInit } from '@angular/core';
import { cardType } from 'src/app/core/interface/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  cardData: cardType = {
    type: ['simple','withIcon','withIconText'],
    title: 'Simple Card',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"+
    "scrambled.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has"+
    "been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of"+
    "type and scrambled.",
    icon: "fa-solid fa-cube",
    iconText: 'settings'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
