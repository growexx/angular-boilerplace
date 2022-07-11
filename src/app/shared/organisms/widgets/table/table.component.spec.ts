import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import Swal from 'sweetalert2';
import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let swal2: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent, FilterPipe ],
      imports: [ NgxPaginationModule, FormsModule, ReactiveFormsModule],
      providers: [{ provide: Swal }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.tableData = [
      {
        "id": 1,
        "isSelected": false,
        "name": "Emma Smith",
        "imageUrl": "/assets/300-6.jpg",
        "email": "smith@kpmg.com",
        "role": "Administrator",
        "last_login": "Yesterday",
        "two_step": "Enabled",
        "joined_date": "30 June 2022, 6:43 am",
        "action": [
          {
            "label": "Edit",
            "url": "/"
          },
          {
            "label": "Delete",
            "url": "/"
          }
        ]
      },
      {
        "id": 2,
        "isSelected": true,
        "name": "Pruthvi Dhamecha",
        "imageUrl": "/assets/300-6.jpg",
        "email": "pruthvidhamecha@gmail.com",
        "role": "Engineer",
        "last_login": "Today",
        "two_step": "Enabled",
        "joined_date": "01 July 2022, 6:43 pm",
        "action": [
          {
            "label": "Edit",
            "url": "/"
          },
          {
            "label": "Delete",
            "url": "/"
          }
        ]
      },
    ];
    swal2 = fixture.debugElement.injector.get(Swal);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have called checkUncheckAll() and set checkAllCheckboxes to true', fakeAsync(() => {
    component.checkUncheckAll();
    expect(component.commonService.checkAllCheckboxes).withContext('All users are selected').toBeTruthy();
  }));

  it('should have called isAllSelected() and set checkAllCheckboxes to false', fakeAsync(() => {
    component.isAllSelected();
    expect(component.commonService.checkAllCheckboxes).withContext('checkAllCheckboxes will set to false').toBeFalsy();
  }));

  it('should have called onDelete() and remove user from tableData', fakeAsync(() => {
    component.OnDelete(1);
    tick(4000);
    Swal.clickConfirm();
    tick(4000);
    expect(component.tableData[0].id).withContext('userId is not the same').toBe(2);
  }));
});
