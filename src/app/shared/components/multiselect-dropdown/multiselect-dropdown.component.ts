import { Component, ElementRef, Input, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/app/users/users.service';

@Component({
  selector: 'app-multiselect-dropdown',
  templateUrl: './multiselect-dropdown.component.html',
  styleUrls: ['./multiselect-dropdown.component.scss'],
  host: {
    '(document:click)': 'clickOutside($event)',
  },
})
export class MultiselectDropdownComponent implements OnInit {
  @Input() dropdownForm: any;
  @Input() dropdownSettings: any;
  @Input() dropdownData: any;
  selectedItems: any = [];
  showDropdown: boolean = false;
  isSelectAll: boolean = false;
  searchFilter:any;

  constructor(public usersService: UsersService, private _eref: ElementRef) { }
  ngOnInit() {
    this.dropdownSettings.maxBadgeLimit = (!this.dropdownSettings.maxBadgeLimit) ? 3 : this.dropdownSettings.maxBadgeLimit;
  }
  onItemSelect(id: any) {
    this.dropdownData.filter((item: any) => {
      if (item.id === id) {
        if (!this.selectedItems.find((ele: any) => ele.id === item.id)) {
          this.selectedItems.push(item);
          if(this.dropdownForm.value.department === ''){
            this.dropdownForm.get('department').setValue(this.dropdownForm.value.department + item.itemName);
          } else {
            this.dropdownForm.get('department').setValue(this.dropdownForm.value.department + ", " + item.itemName);
          }
        } else {
          let index = this.selectedItems.findIndex((d: any) => d.id === id);
          this.selectedItems.splice(index, 1);
          let department = this.dropdownForm.value.department.replace(', ' + item.itemName,'').replace(item.itemName + ', ','');
          this.dropdownForm.get('department').setValue(department);
        }
        item.isSelected = !item.isSelected;
      };

      if(this.selectedItems.length === this.dropdownData.length){
        this.isSelectAll = true;
      } else {
        this.isSelectAll = false;
      }
    })
  }

  OnItemDeSelect(id: any) {
    let index = this.selectedItems.findIndex((d: any) => d.id === id);
    this.selectedItems.splice(index, 1);
    this.dropdownData.filter((item: any) => {
      if (item.id === id) {
        let department = this.dropdownForm.value.department.replace(', ' + item.itemName,'').replace(item.itemName + ', ','');
        this.dropdownForm.get('department').setValue(department);
        item.isSelected = false;
      };
    });
    this.isSelectAll = false;
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
      if(this.dropdownForm.value.department === ''){
        this.dropdownForm.get('department').setValue(this.dropdownForm.value.department + ele.itemName);
      } else {
        this.dropdownForm.get('department').setValue(this.dropdownForm.value.department + ", " + ele.itemName);
      }
    });
  }
  onDeSelectAll(){
    this.isSelectAll = false;
    this.dropdownData.filter((ele:any) => {
      ele.isSelected = false;
    });
    this.selectedItems = [];
  }
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
