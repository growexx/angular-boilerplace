import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl } from '@angular/forms';

import { MultiselectDropdownComponent } from './multiselect-dropdown.component';

describe('MultiselectDropdownComponent', () => {
  let component: MultiselectDropdownComponent;
  let fixture: ComponentFixture<MultiselectDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiselectDropdownComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectDropdownComponent);
    component = fixture.componentInstance;
    component.dropdownSettings = {
      placeholder: "Select Departments",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "form-control form-control-lg form-control-solid",
      maxHeight: '300px',
    };
    component.dropdownForm = new FormGroup({
      department: new FormControl(''),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create and called ngOnInit() method', () => {
    component.dropdownSettings.maxBadgeLimit = 4;
    component.ngOnInit();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('should called OnItemSelect() method', (() => {
    component.dropdownData = [
      {
        "id": 1,
        "itemName": "Marketing",
        "image": "https://robohash.org/hicveldicta.png",
        "isSelected": false,
      },
      {
        "id": 2,
        "itemName": "Services",
        "image": "https://robohash.org/doloremquesintcorrupti.png",
        "isSelected": false,
      },
    ];
    let expectedResponse = [];
    let departments = '';

    expect(component.isSelectAll).withContext('check that all items are selected or not').toBeFalsy();

    component.dropdownForm.controls['department'].setValue('');
    component.onItemSelect(1);
    fixture.detectChanges();
    expect(component.dropdownData[0].isSelected).withContext("select item from dropdownData where id is 1").toBeTruthy();
    component.dropdownData[0].isSelected = true;
    expectedResponse = [component.dropdownData[0]];
    expect(component.selectedItems).withContext("added data in selectedItems while department is null").toEqual(expectedResponse);
    departments = expectedResponse[0].itemName;
    expect(component.dropdownForm.get('department').value).withContext("value of department is changed").toEqual(departments);

    component.dropdownForm.controls['department'].setValue('Marketing');
    component.onItemSelect(2);
    fixture.detectChanges();
    expect(component.dropdownData[1].isSelected).withContext("select item from dropdownData where id is 2").toBeTruthy();
    component.dropdownData[0].isSelected = true;
    component.dropdownData[1].isSelected = true;
    expectedResponse = component.dropdownData;
    expect(component.selectedItems).withContext("added data in selectedItems while department is not null").toEqual(expectedResponse);
    departments += ', ' + expectedResponse[1].itemName;
    expect(component.dropdownForm.get('department').value).withContext("value of department is changed").toEqual(departments);

    expect(component.isSelectAll).withContext('check that all items are selected or not').toBeTruthy();

    component.dropdownForm.controls['department'].setValue('Marketing, Services');
    component.onItemSelect(2);
    fixture.detectChanges();
    expect(component.dropdownData[1].isSelected).withContext("deselect item from dropdownData where id is 2").toBeFalsy();
    component.dropdownData[0].isSelected = true;
    expectedResponse = [component.dropdownData[0]];
    expect(component.selectedItems).withContext("remove data from selectedItems while department is not null").toEqual(expectedResponse);
    departments = expectedResponse[0].itemName;
    expect(component.dropdownForm.get('department').value).withContext("value of department is changed").toEqual(departments);

    expect(component.isSelectAll).withContext('check that all items are selected or not').toBeFalsy();
  }));

  it('should called OnItemDeSelect() method', (() => {
    component.dropdownData = [
      {
        "id": 1,
        "itemName": "Marketing",
        "image": "https://robohash.org/hicveldicta.png",
        "isSelected": true,
      },
      {
        "id": 2,
        "itemName": "Services",
        "image": "https://robohash.org/doloremquesintcorrupti.png",
        "isSelected": true,
      },
    ];
    component.selectedItems = [
      {
        "id": 1,
        "itemName": "Marketing",
        "image": "https://robohash.org/hicveldicta.png",
        "isSelected": true,
      },
      {
        "id": 2,
        "itemName": "Services",
        "image": "https://robohash.org/doloremquesintcorrupti.png",
        "isSelected": true,
      }
    ];
    component.isSelectAll = true;
    let expectedResponse = [];
    let departments = '';

    component.dropdownForm.controls['department'].setValue('Marketing, Services');
    component.OnItemDeSelect(2);
    fixture.detectChanges();
    expect(component.dropdownData[1].isSelected).withContext("deselect item from dropdownData where id is 2").toBeFalsy();
    component.dropdownData[1].isSelected = false;
    expectedResponse = [component.dropdownData[0]];
    expect(component.selectedItems).withContext("removed data from selectedItems while department is not null").toEqual(expectedResponse);

    departments = expectedResponse[0].itemName;
    expect(component.dropdownForm.get('department').value).withContext("value of department is changed").toEqual(departments);

    expect(component.isSelectAll).withContext('check that all items are selected or not').toBeFalsy();
  }));

  it('should called OnSelectAll() method', (() => {
    component.dropdownData = [
      {
        "id": 1,
        "itemName": "Marketing",
        "image": "https://robohash.org/hicveldicta.png",
        "isSelected": true,
      },
      {
        "id": 2,
        "itemName": "Services",
        "image": "https://robohash.org/doloremquesintcorrupti.png",
        "isSelected": true,
      },
    ];
    component.selectedItems = [];
    component.isSelectAll = false;
    let expectedResponse = [];
    let departments = '';
    component.dropdownForm.controls['department'].setValue('');
    component.onSelectAll();
    fixture.detectChanges();
    expect(component.dropdownData[0].isSelected).withContext("select all items from dropdownData where").toBeTruthy();
    expect(component.dropdownData[1].isSelected).withContext("select all items from dropdownData where").toBeTruthy();
    expectedResponse = component.dropdownData;
    expect(component.selectedItems).withContext("removed data from selectedItems while department is not null").toEqual(expectedResponse);

    departments = expectedResponse[0].itemName + ', ' + expectedResponse[1].itemName;
    expect(component.dropdownForm.get('department').value).withContext("value of department is changed").toEqual(departments);

    expect(component.isSelectAll).withContext('check that all items are selected or not').toBeTruthy();
  }));

  it('should called onDeSelectAll() method', (() => {
    component.dropdownData = [
      {
        "id": 1,
        "itemName": "Marketing",
        "image": "https://robohash.org/hicveldicta.png",
        "isSelected": true,
      },
      {
        "id": 2,
        "itemName": "Services",
        "image": "https://robohash.org/doloremquesintcorrupti.png",
        "isSelected": true,
      },
    ];
    component.selectedItems = [];
    component.isSelectAll = false;
    let departments = component.dropdownData[0].itemName + ', ' + component.dropdownData[1].itemName;
    component.dropdownForm.controls['department'].setValue('');
    component.onDeSelectAll();
    fixture.detectChanges();
    expect(component.dropdownData[0].isSelected).withContext("select all items from dropdownData where").toBeFalsy();
    expect(component.dropdownData[1].isSelected).withContext("select all items from dropdownData where").toBeFalsy();
    expect(component.selectedItems).withContext("removed data from selectedItems while department is null").toEqual([]);

    expect(component.dropdownForm.get('department').value).withContext("value of department is changed").toEqual('');
    expect(component.isSelectAll).withContext('check that all items are selected or not').toBeFalsy();
  }));

  it('should called toggleDropdown() method', () => {
    component.toggleDropdown();
    expect(component.showDropdown).toBeTruthy();
    component.toggleDropdown();
    expect(component.showDropdown).toBeFalsy();
  });

  it('should called clickOutside() method', () => {
    const event = new MouseEvent('click'); 
    spyOn(event, 'preventDefault');
    component.clickOutside(event);
    expect(component.showDropdown).toBeFalsy();
  });

});
