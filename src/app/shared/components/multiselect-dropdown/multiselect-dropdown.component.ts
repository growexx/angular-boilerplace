import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../../../users/users.service';
// import { UsersService } from 'src/app/users/users.service';

@Component({
  selector: 'app-multiselect-dropdown',
  templateUrl: './multiselect-dropdown.component.html',
  styleUrls: ['./multiselect-dropdown.component.scss'],
  host: {
    '(document:click)': 'clickOutside($event)',
  },
})
export class MultiselectDropdownComponent implements OnInit {
  @Input() dropdownSettings: any;
  @Input() dropdownData: any;
  @Output() outputData = new EventEmitter<string>();

  selectedItems: any = [];
  showDropdown: boolean = false;
  isSelectAll: boolean = false;
  searchFilter:any;
  outputDataString:any = '';

  constructor(public usersService: UsersService, private _eref: ElementRef) { }

  ngOnInit() {
    this.dropdownSettings.maxBadgeLimit = (!this.dropdownSettings.maxBadgeLimit) ? 3 : this.dropdownSettings.maxBadgeLimit;
  }
  onItemSelect(id: any) {
    this.dropdownData.filter((item: any) => {
      if (item.id === id) {
        if (!this.selectedItems.find((ele: any) => ele.id === item.id)) {
          this.selectedItems.push(item);
          if(this.outputDataString === ''){
            this.outputDataString = this.outputDataString + item.itemName;
          } else {
            this.outputDataString = this.outputDataString + ", " + item.itemName;
          }
        } else {
          let index = this.selectedItems.findIndex((d: any) => d.id === id);
          this.selectedItems.splice(index, 1);
          this.outputDataString = this.outputDataString.replace(', ' + item.itemName,'').replace(item.itemName + ', ','').replace(item.itemName,'');
        }
        item.isSelected = !item.isSelected;
      };

      if(this.selectedItems.length === this.dropdownData.length){
        this.isSelectAll = true;
      } else {
        this.isSelectAll = false;
      }
    })
    this.outputData.emit(this.outputDataString);
  }

  OnItemDeSelect(id: any) {
    let index = this.selectedItems.findIndex((d: any) => d.id === id);
    this.selectedItems.splice(index, 1);
    this.dropdownData.filter((item: any) => {
      if (item.id === id) {
          this.outputDataString = this.outputDataString.replace(', ' + item.itemName,'').replace(item.itemName + ', ','').replace(item.itemName,'');
        item.isSelected = false;
      };
    });
    this.isSelectAll = false;
    this.outputData.emit(this.outputDataString);
  }
  clickOutside(event: any) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.showDropdown = false;
    }
  }
  onSelectAll(){
    this.selectedItems = [];
    this.isSelectAll = true;
    this.dropdownData.filter((ele:any) => {
      ele.isSelected = true;
      this.selectedItems.push(ele);
      if(this.outputDataString === ''){
            this.outputDataString = this.outputDataString + ele.itemName;
          } else {
            this.outputDataString = this.outputDataString + ", " + ele.itemName;
          }
    });
    this.outputData.emit(this.outputDataString);
  }
  onDeSelectAll(){
    this.isSelectAll = false;
    this.dropdownData.filter((ele:any) => {
      ele.isSelected = false;
    });
    this.selectedItems = [];
    this.outputData.emit(this.outputDataString);
  }
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
