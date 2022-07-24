import { ChartsDataService } from './charts-data.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CompFilterPipe } from './_shared/pipes/comp-filter.pipe';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';




describe('AppComponent', () => {
 let app : AppComponent;

 
 let serviceSpy:any;
 let pipeSpy:any;
 let httpTestingController: HttpTestingController;
  beforeEach(async () => {
    
    serviceSpy = jasmine.createSpyObj('ChartsDataService',['getWeeklyData','getYearlyData','getMonthlyData','getChart'])
    pipeSpy= jasmine.createSpyObj('CompFilterPipe',['transform']);
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        
      ],
      declarations: [
        AppComponent,
        CompFilterPipe,
        
      ],
      providers:[AppComponent,
        {provide: CompFilterPipe,useValue:pipeSpy},
        {provide: ChartsDataService, useValue:serviceSpy},
      ]
    }).compileComponents();
    
    
  });
  beforeEach(() => {
    // fixture = TestBed.createComponent(AppComponent);
    // app = fixture.componentInstance;
    // fixture.detectChanges();
   
httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular Boiler Plate'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
   app = fixture.componentInstance;
    expect(app.title).toEqual('Angular Boiler Plate');
  });
  it('onSelect radio function', () => {
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    let $event : any;
    expect(app.onSelectRadio($event)).toEqual($event );
  });
  it('onChecked function', () => {
    const fixture = TestBed.createComponent(AppComponent);
   app = fixture.componentInstance;
    let $event : any;
    expect(app.onChecked($event)).toEqual($event );
  });
  it('data function', () => {
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
   
    let myData=[{
      "name1":"Ravi",
      "phone":"35467",
      "class":"sixth"
    },
    {
      "name1":"Sakshi",
      "phone":"35467",
      "class":"sixth"
    },
    {
      "name1":"Raj",
      "phone":"35467",
      "class":"sixth"
    },
    {
      "name1":"Ra,",
      "phone":"35467",
      "class":"sixth"
    }]
    
    expect(app.data()).toEqual(myData );
  });


//   it('search function should return the search element', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     app = fixture.componentInstance;
   
//    app.userList= {
//       "users": [
//       {
//       "id": 1,
//       "firstName": "Terry",
//       "lastName": "Medhurst",
//       "maidenName": "Smitham",
//       "age": 50,
//       "gender": "male",
//       "email": "atuny0@sohu.com",
//       "phone": "+63 791 675 8914",
//       "username": "atuny0",
//       "password": "9uQFF1Lh",
//       "birthDate": "2000-12-25",
//       "image": "https://robohash.org/hicveldicta.png",
//       "bloodGroup": "A−",
//       "height": 189,
//       "weight": 75.4,
//       "eyeColor": "Green",
//       "hair": {
//       "color": "Black",
//       "type": "Strands"
//       },
//       "domain": "slashdot.org",
//       "ip": "117.29.86.254",
//       "address": {
//       "address": "1745 T Street Southeast",
//       "city": "Washington",
//       "coordinates": {
//       "lat": 38.867033,
//       "lng": -76.979235
//       },
//       "postalCode": "20020",
//       "state": "DC"
//       },
//       "macAddress": "13:69:BA:56:A3:74",
//       "university": "Capitol University",
//       "bank": {
//       "cardExpire": "06/22",
//       "cardNumber": "50380955204220685",
//       "cardType": "maestro",
//       "currency": "Peso",
//       "iban": "NO17 0695 2754 967"
//       },
//       "company": {
//       "address": {
//       "address": "629 Debbie Drive",
//       "city": "Nashville",
//       "coordinates": {
//       "lat": 36.208114,
//       "lng": -86.58621199999999
//       },
//       "postalCode": "37076",
//       "state": "TN"
//       },
//       "department": "Marketing",
//       "name": "Blanda-O'Keefe",
//       "title": "Help Desk Operator"
//       },
//       "ein": "20-9487066",
//       "ssn": "661-64-2976",
//       "userAgent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24"
//       },
//       {
//       "id": 2,
//       "firstName": "Sheldon",
//       "lastName": "Quigley",
//       "maidenName": "Cole",
//       "age": 28,
//       "gender": "male",
//       "email": "hbingley1@plala.or.jp",
//       "phone": "+7 813 117 7139",
//       "username": "hbingley1",
//       "password": "CQutx25i8r",
//       "birthDate": "2003-08-02",
//       "image": "https://robohash.org/doloremquesintcorrupti.png",
//       "bloodGroup": "O+",
//       "height": 187,
//       "weight": 74,
//       "eyeColor": "Brown",
//       "hair": {
//       "color": "Blond",
//       "type": "Curly"
//       },
//       "domain": "51.la",
//       "ip": "253.240.20.181",
//       "address": {
//       "address": "6007 Applegate Lane",
//       "city": "Louisville",
//       "coordinates": {
//       "lat": 38.1343013,
//       "lng": -85.6498512
//       },
//       "postalCode": "40219",
//       "state": "KY"
//       },
//       "macAddress": "13:F1:00:DA:A4:12",
//       "university": "Stavropol State Technical University",
//       "bank": {
//       "cardExpire": "10/23",
//       "cardNumber": "5355920631952404",
//       "cardType": "mastercard",
//       "currency": "Ruble",
//       "iban": "MD63 L6YC 8YH4 QVQB XHIK MTML"
//       },
//       "company": {
//       "address": {
//       "address": "8821 West Myrtle Avenue",
//       "city": "Glendale",
//       "coordinates": {
//       "lat": 33.5404296,
//       "lng": -112.2488391
//       },
//       "postalCode": "85305",
//       "state": "AZ"
//       },
//       "department": "Services",
//       "name": "Aufderhar-Cronin",
//       "title": "Senior Cost Accountant"
//       },
//       "ein": "52-5262907",
//       "ssn": "447-08-9217",
//       "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.30 (KHTML, like Gecko) Ubuntu/11.04 Chromium/12.0.742.112 Chrome/12.0.742.112 Safari/534.30"
//       },]
//     };
// fixture.detectChanges();
   
//     let showDiv;
//     let searchText = 'Terry';
//     let $event : any = searchText;
//     let list:any;
//     list =pipeSpy.transform(app.userList.users,searchText);
    
    
//     console.log(list)
//     if(list.length === 0){
//       showDiv = true; 
//     }else{
//       showDiv = false;
//     }
//     expect(app.search($event)).toEqual(list );
//   });


it('updateData function', () => {
  const fixture = TestBed.createComponent(AppComponent);
  app = fixture.componentInstance;
  let testService = TestBed.inject(ChartsDataService);
  let chartId: any;
 let $event = 1;
  if($event === 1){
    chartId = testService.getYearlyData();
  }
  expect(app.updateData($event)).toEqual(chartId );
   $event = 2;
  if($event === 2){
    chartId = testService.getMonthlyData();
  }
  expect(app.updateData($event)).toEqual(chartId );
   $event = 3;
  if($event === 3){
    chartId = testService.getWeeklyData();
  }
  expect(app.updateData($event)).toEqual(chartId );
});


// it('getDummyData function', () => {
 
//   const fixture = TestBed.createComponent(AppComponent);
//   app = fixture.componentInstance;
 
 
//   let userList={
//     "users": [
//     {
//     "id": 1,
//     "firstName": "Terry",
//     "lastName": "Medhurst",
//     "maidenName": "Smitham",
//     "age": 50,
//     "gender": "male",
//     "email": "atuny0@sohu.com",
//     "phone": "+63 791 675 8914",
//     "username": "atuny0",
//     "password": "9uQFF1Lh",
//     "birthDate": "2000-12-25",
//     "image": "https://robohash.org/hicveldicta.png",
//     "bloodGroup": "A−",
//     "height": 189,
//     "weight": 75.4,
//     "eyeColor": "Green",
//     "hair": {
//     "color": "Black",
//     "type": "Strands"
//     },
//     "domain": "slashdot.org",
//     "ip": "117.29.86.254",
//     "address": {
//     "address": "1745 T Street Southeast",
//     "city": "Washington",
//     "coordinates": {
//     "lat": 38.867033,
//     "lng": -76.979235
//     },
//     "postalCode": "20020",
//     "state": "DC"
//     },
//     "macAddress": "13:69:BA:56:A3:74",
//     "university": "Capitol University",
//     "bank": {
//     "cardExpire": "06/22",
//     "cardNumber": "50380955204220685",
//     "cardType": "maestro",
//     "currency": "Peso",
//     "iban": "NO17 0695 2754 967"
//     },
//     "company": {
//     "address": {
//     "address": "629 Debbie Drive",
//     "city": "Nashville",
//     "coordinates": {
//     "lat": 36.208114,
//     "lng": -86.58621199999999
//     },
//     "postalCode": "37076",
//     "state": "TN"
//     },
//     "department": "Marketing",
//     "name": "Blanda-O'Keefe",
//     "title": "Help Desk Operator"
//     },
//     "ein": "20-9487066",
//     "ssn": "661-64-2976",
//     "userAgent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24"
//     },
//     {
//     "id": 2,
//     "firstName": "Sheldon",
//     "lastName": "Quigley",
//     "maidenName": "Cole",
//     "age": 28,
//     "gender": "male",
//     "email": "hbingley1@plala.or.jp",
//     "phone": "+7 813 117 7139",
//     "username": "hbingley1",
//     "password": "CQutx25i8r",
//     "birthDate": "2003-08-02",
//     "image": "https://robohash.org/doloremquesintcorrupti.png",
//     "bloodGroup": "O+",
//     "height": 187,
//     "weight": 74,
//     "eyeColor": "Brown",
//     "hair": {
//     "color": "Blond",
//     "type": "Curly"
//     },
//     "domain": "51.la",
//     "ip": "253.240.20.181",
//     "address": {
//     "address": "6007 Applegate Lane",
//     "city": "Louisville",
//     "coordinates": {
//     "lat": 38.1343013,
//     "lng": -85.6498512
//     },
//     "postalCode": "40219",
//     "state": "KY"
//     },
//     "macAddress": "13:F1:00:DA:A4:12",
//     "university": "Stavropol State Technical University",
//     "bank": {
//     "cardExpire": "10/23",
//     "cardNumber": "5355920631952404",
//     "cardType": "mastercard",
//     "currency": "Ruble",
//     "iban": "MD63 L6YC 8YH4 QVQB XHIK MTML"
//     },
//     "company": {
//     "address": {
//     "address": "8821 West Myrtle Avenue",
//     "city": "Glendale",
//     "coordinates": {
//     "lat": 33.5404296,
//     "lng": -112.2488391
//     },
//     "postalCode": "85305",
//     "state": "AZ"
//     },
//     "department": "Services",
//     "name": "Aufderhar-Cronin",
//     "title": "Senior Cost Accountant"
//     },
//     "ein": "52-5262907",
//     "ssn": "447-08-9217",
//     "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.30 (KHTML, like Gecko) Ubuntu/11.04 Chromium/12.0.742.112 Chrome/12.0.742.112 Safari/534.30"
//     },]}
//   app.getDummyData();
//   fixture.detectChanges();
//   // const req = httpTestingController.expectOne('https://dummyjson.com/users');
//   const req = httpTestingController.expectOne('https://dummyjson.com/users')
//   expect(req.request.method).toEqual('GET');
//   req.flush(userList);
//   expect(app.userList).toEqual(userList);

  
// });

});

