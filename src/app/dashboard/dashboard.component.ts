import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isOpen:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(){
    this.isOpen = !this.isOpen;
  }

}
