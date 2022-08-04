import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { UserService } from '../user.service';
import { AddUsersComponent } from './add-users.component';

describe('AddUsersComponent', () => {
  let component: AddUsersComponent;
  let fixture: ComponentFixture<AddUsersComponent>;
  let userService: any;
  const imageValue = {}
  const index = 10;

  const userVal = {
    image: '',
    firstName: 'John',
    lastName: 'Doe',
    phone: '987234509',
    address:{
      address: '342,Gordon Industrial Dr',
      city: 'Shepherdsville',
      state:'KY',
      country:'USA',
    }
  }


  const selectedAddress = {
    'administrative_area_level_1': "NY",
    'administrative_area_level_2': "New York County",
    'country': "USA",
    'locality': "New York",
    'postal_code': "10001",
    'route': "5th Ave",
    'street_number': "230",
    'sublocality_level_1': "Manhattan",
  }
  userService = jasmine.createSpyObj('component', ['createUser'])

  userService.createUser.and.returnValue((of(userVal)))
  



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddUsersComponent],
      providers: [
        { provide: FormBuilder },
        { provide: UserService, useValue: userService },
      ],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call goToStep2()',()=>{
    component.goToStep2();
    expect(component).toBeTruthy();
  })

  it('should call goToStep3()',()=>{
    component.goToStep3();
    expect(component).toBeTruthy();
  })

  it('should call addUser()',()=>{
    component.addUser();
    expect(component).toBeTruthy();
  })

  it('should call setSelectedAddress()',()=>{
    component.setSelectedAddress(selectedAddress, index);
    expect(component).toBeTruthy();
  })

  it('should call changeImage()',()=>{
    component.changeImage(imageValue);
    expect(component).toBeTruthy();
  })


});
