import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { TableComponent } from 'src/app/shared/organisms/widgets/table/table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersService } from '../users.service';

import { UsersListComponent } from './users-list.component';
import { of } from 'rxjs';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;
  let httpTestingController: HttpTestingController;
  let usersService: UsersService;
  let location: Location;
  let router: Router;
  let expectedResponse: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersListComponent, TableComponent,],
      imports: [HttpClientTestingModule, SharedModule, FormsModule, ReactiveFormsModule, RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(fakeAsync(async () => {
    location = TestBed.get(Location);
    router = TestBed.get(Router);
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    usersService = fixture.debugElement.injector.get(UsersService);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
    expectedResponse = {
      "users": [
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
          "isSelected": false,
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
        {
          "id": 3,
          "isSelected": false,
          "name": "Meet patel",
          "imageUrl": "/assets/300-6.jpg",
          "email": "meetpatel@gmail.com",
          "role": "Analyst",
          "last_login": "Today",
          "two_step": "Disabled",
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
        {
          "id": 4,
          "isSelected": false,
          "name": "Sohel Khan",
          "imageUrl": "/assets/300-6.jpg",
          "email": "sohelkhan@gmail.com",
          "role": "Support",
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
        {
          "id": 5,
          "isSelected": false,
          "name": "Tanmay Patel",
          "imageUrl": "/assets/300-6.jpg",
          "email": "tanmaypatel@gmail.com",
          "role": "Trial",
          "last_login": "Today",
          "two_step": "Disabled",
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
        {
          "id": 6,
          "isSelected": false,
          "name": "Utkarsh Singh",
          "imageUrl": "/assets/300-6.jpg",
          "email": "utkarshsingh@gmail.com",
          "role": "Engineer",
          "last_login": "Today",
          "two_step": "Disabled",
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
        {
          "id": 7,
          "isSelected": false,
          "name": "Kalp Patel",
          "imageUrl": "/assets/300-6.jpg",
          "email": "kalppatel@gmail.com",
          "role": "Support",
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
        {
          "id": 8,
          "isSelected": false,
          "name": "Rushabh Devrup",
          "imageUrl": "/assets/300-6.jpg",
          "email": "rkdevrup@gmail.com",
          "role": "Developer",
          "last_login": "Today",
          "two_step": "Disabled",
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
        {
          "id": 9,
          "isSelected": false,
          "name": "Varun Devani",
          "imageUrl": "/assets/300-6.jpg",
          "email": "varundevani@gmail.com",
          "role": "Analyst",
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
        {
          "id": 10,
          "isSelected": false,
          "name": "Virendra Solanki",
          "imageUrl": "/assets/300-6.jpg",
          "email": "virendrasolanki@gmail.com",
          "role": "Developer",
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
        {
          "id": 11,
          "isSelected": false,
          "name": "Rahul Parmar",
          "imageUrl": "/assets/300-6.jpg",
          "email": "rahulparmar@gmail.com",
          "role": "Analyst",
          "last_login": "Today",
          "two_step": "Disabled",
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
        }
      ]
    };
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should called ngOnInit() and filter array of users', (async () => {
    const req = httpTestingController.expectOne('http://localhost:3000/users');
    expect(req.request.method).toEqual('GET');
    req.flush(expectedResponse.users);
    fixture.detectChanges();
  }));

  it('should called onSubmitFilter() and filter array of users while role and two_step are set to null', fakeAsync(async () => {
    component.filterForm.controls['role'].setValue(null);
    component.filterForm.controls['two_step'].setValue(null);
    expect(component.filterForm.invalid).toBeTruthy();
    
    const req = httpTestingController.expectOne('http://localhost:3000/users');
    expect(req.request.method).toEqual('GET');
    req.flush(expectedResponse.users);
    
    component.onSubmitFilter();
    fixture.detectChanges();
    
    const req2 = httpTestingController.expectOne('http://localhost:3000/users');
    expect(req2.request.method).toEqual('GET');
    req2.flush(expectedResponse.users);
    flush();
  }));

  it('should called onSubmitFilter() and filter array of users are return user', fakeAsync(async () => {
    
    const req = httpTestingController.expectOne('http://localhost:3000/users');
    expect(req.request.method).toEqual('GET');
    req.flush(expectedResponse.users);
    
    component.filterForm.controls['role'].setValue('Engineer');
    component.filterForm.controls['two_step'].setValue('Enabled');
    expect(component.filterForm.valid).toBeTruthy();
    component.onSubmitFilter();
    fixture.detectChanges();
    
    expect(component.tableData[0]).toEqual(expectedResponse.users[1])
  }));

  it('should called onResetFilter() and reset filter array of users', fakeAsync(async () => {
    component.filterForm.controls['role'].setValue(null);
    component.filterForm.controls['two_step'].setValue(null);
    expect(component.filterForm.invalid).toBeTruthy();
    
    const req = httpTestingController.expectOne('http://localhost:3000/users');
    expect(req.request.method).toEqual('GET');
    req.flush(expectedResponse.users);
    
    component.onResetFilter();
    fixture.detectChanges();
    
    const req2 = httpTestingController.expectOne('http://localhost:3000/users');
    expect(req2.request.method).toEqual('GET');
    req2.flush(expectedResponse.users);
    flush();
  }));
});
