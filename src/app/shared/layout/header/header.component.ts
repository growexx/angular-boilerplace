import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isOpen: boolean = false;
  isShow: boolean = false;
  isSlider: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openProfilePanel() {
    this.isOpen = !this.isOpen;
  }

  openSearchPanel() {
    this.isShow = !this.isShow;
  }

  openSlider() {
    this.isSlider = true
  }

  closeSlider() {
    this.isSlider = false;
  }

}
