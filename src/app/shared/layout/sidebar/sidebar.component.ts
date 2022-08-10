import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isOpen: boolean = false;
  isUser: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
    this.isUser = !this.isUser;   
  }

}
