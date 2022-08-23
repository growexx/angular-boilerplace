import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, flush, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { UserService } from '../user.service';
import { ViewProfileComponent } from './view-profile.component';

describe('ViewProfileComponent', () => {
  let component: ViewProfileComponent;
  let fixture: ComponentFixture<ViewProfileComponent>;
  let userService: any;
  userService = jasmine.createSpyObj('UserService', ['getUserTask','viewUser'])
  const userRes = {
    "id": 1,
    "firstName": "Terry",
    "lastName": "Medhurst",
    "maidenName": "Smitham",
    "age": 50,
    "gender": "male",
    "email": "atuny0@sohu.com",
    "phone": "+63 791 675 8914",
    "username": "atuny0",
    "password": "9uQFF1Lh",
    "birthDate": "2000-12-25",
    "image": "https://robohash.org/hicveldicta.png?size=50x50&set=set1",
    "bloodGroup": "A−",
    "height": 189,
    "weight": 75.4,
    "eyeColor": "Green",
    "hair": {
      "color": "Black",
      "type": "Strands"
    },
    "domain": "slashdot.org",
    "ip": "117.29.86.254",
    "address": {
      "address": "1745 T Street Southeast",
      "city": "Washington",
      "coordinates": {
        "lat": 38.867033,
        "lng": -76.979235
      },
      "postalCode": "20020",
      "state": "DC"
    },
    "macAddress": "13:69:BA:56:A3:74",
    "university": "Capitol University",
    "bank": {
      "cardExpire": "06/22",
      "cardNumber": "50380955204220685",
      "cardType": "maestro",
      "currency": "Peso",
      "iban": "NO17 0695 2754 967"
    },
    "company": {
      "address": {
        "address": "629 Debbie Drive",
        "city": "Nashville",
        "coordinates": {
          "lat": 36.208114,
          "lng": -86.58621199999999
        },
        "postalCode": "37076",
        "state": "TN"
      },
      "department": "Marketing",
      "name": "Blanda-O'Keefe",
      "title": "Help Desk Operator"
    },
    "ein": "20-9487066",
    "ssn": "661-64-2976",
    "userAgent": "Mozilla/5.0 ..."
  }

  const taskRes = {
    "posts": [
      {
        "id": 17,
        "title": "She was in a hurry.",
        "body": "She was in a hurry. /*... more data */  ",
        "userId": 5, 
        "tags": [
          "french",
          "magical",
          "english"
        ],
        "reactions": 0
      },      
    ],
    "total": 3,
    "skip": 0,
    "limit": 3
  }
     

  userService.viewUser.and.returnValue(of(userRes))
  userService.getUserTask.and.returnValue(of(taskRes))



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewProfileComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers:[
        { provide: UserService, useValue: userService },
        { provide: ActivatedRoute, useValue: {params: of({ id: '1' })} }
      ],

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be called getUserDetailsById()', () => {
    const id = 10;
    component.getUserDetailsById(id);
    expect(component).toBeTruthy()
  });

  it('should be called getUserTaskById()', () => {
    const id = 10;
    component.getUserTaskById(id);
    expect(component).toBeTruthy()
  });
  

});

