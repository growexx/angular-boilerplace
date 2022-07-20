import { ElementRef, HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public isSideBar: boolean = true;
  public showActionDropdown: boolean = false;
  public showFilterDropdown: boolean = false;
  public showDropdown: boolean = false;
  public index: number = 0;
  public checkAllCheckboxes: boolean = false;
  public searchFilter: string = '';
  public checkboxes: string[] = [];

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
  // toggleFilterDropdown() {
  //   this.showFilterDropdown = !this.showFilterDropdown;
  // }
}
