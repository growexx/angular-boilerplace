import { Component, HostListener, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public commonService: CommonService) { }

  // @HostListener('click', ['$event.target']) toggleDropdown(el: HTMLElement) {
  //   if (this.isButton(el)) {
  //     if (this.commonService.showFilterDropdown === true) {
  //       this.commonService.showFilterDropdown = !this.commonService.showFilterDropdown;
  //     }
  //     if (this.commonService.showActionDropdown === true) {
  //       this.commonService.showActionDropdown = !this.commonService.showActionDropdown;
  //     }
  //   }
  // }

  // isButton(el: HTMLElement, level = 3) {
  //   for (let btn: HTMLElement | undefined | null = el; level > 0; level--) {
  //     if (btn?.id === 'filterDropdown' ||
  //       btn?.id === 'actionDropdown' ||
  //       btn?.id === 'role_menu_dropdown' ||
  //       btn?.id === 'two_step_verification_menu_dropdown') {
  //       return false;
  //     }
  //     btn = btn?.parentElement;
  //   }
  //   return true;
  // }

  // @HostListener('window:keydown.escape', ['$event'])
  // handleKeyEscape(event: KeyboardEvent) {
  //   this.commonService.showActionDropdown = false;
  //   this.commonService.showFilterDropdown = false;
  //   this.commonService.index = 0;
  // }
  ngOnInit(): void {
  }

}
