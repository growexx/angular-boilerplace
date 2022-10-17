import { ElementRef, HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public isSideBar: boolean = true;
  public isSideBarCollapsed: boolean = true;
  public showActionDropdown: boolean = false;
  public showFilterDropdown: boolean = false;
  public showDropdown: boolean = false;
  public index: number = 0;
  public checkAllCheckboxes: boolean = false;
  public searchFilter: string = '';
  public checkboxes: string[] = [];
  public viewMoreEmployeesWidget = false;
  public cols = [
    {
      label: 'col-3',
      htmlClass: 'col-sm-3'
    },
    {
      label: 'col-4',
      htmlClass: 'col-sm-4'
    },
    {
      label: 'col-6',
      htmlClass: 'col-sm-6'
    },
    {
      label: 'col-12',
      htmlClass: 'col-sm-12'
    }];

  constructor() { }

  showSidebar() {
    this.isSideBar = !this.isSideBar;
  }

  toggleActionDropdown(id: number) {
    if (id === this.index || this.index == 0) {
      this.showActionDropdown = !this.showActionDropdown;
      this.index = id;
    } else {
      this.index = id;
    }
  }
  toggleSidebar() {
    if (this.isSideBar) {
      this.isSideBarCollapsed = !this.isSideBarCollapsed;
    }
  }
  collapsedSidebar() {
    this.isSideBar = !this.isSideBar;
    this.isSideBarCollapsed = !this.isSideBarCollapsed;
  }

  toggleViewMoreEmployeesWidget() {
    this.viewMoreEmployeesWidget = !this.viewMoreEmployeesWidget;
  }




}
