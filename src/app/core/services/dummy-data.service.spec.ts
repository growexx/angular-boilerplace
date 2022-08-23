
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';



import { DummyDataService } from './dummy-data.service';

describe('DummyDataService', () => {
  let service: DummyDataService;
 
let httpMock:HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [ DummyDataService, HttpClientTestingModule ]
    });
    service = TestBed.inject(DummyDataService);
    httpMock = TestBed.inject(HttpTestingController);
    
  });

  it('should get all todos', () => {
    service.getAllTodos().subscribe();
    const req = httpMock.expectOne('https://dummyjson.com/todos/');
    expect(req.request.method).toEqual("GET");
    req.flush({"todos":[{"id":1,"todo":"Do something nice for someone I care about","completed":true,"userId":26},{"id":2,"todo":"Memorize the fifty states and their capitals","completed":false,"userId":48}],"total":150,"skip":0,"limit":30})
    
  });

  it('should return all comments', () => {
    service.getAllComments().subscribe();
    const req = httpMock.expectOne('https://dummyjson.com/comments/');
    expect(req.request.method).toEqual("GET");
    req.flush({"comments":[{"id":1,"body":"This is some awesome thinking!","postId":100,"user":{"id":63,"username":"eburras1q"}},{"id":2,"body":"What terrific math skills you’re showing!","postId":27,"user":{"id":71,"username":"omarsland1y"}}],"total":340,"skip":0,"limit":30})
    
  });

  
  it('should return user list data', () => {
    service.getAllUsers().subscribe();
    const req = httpMock.expectOne('https://dummyjson.com/users/');
    expect(req.request.method).toEqual("GET");
    req.flush({
      "users": [
        {
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
        },
      ],
      "total": 100,
      "skip": 0,
      "limit": 30
    })
    
    
   });
   
   it('should add a comment', () => {
    let comment = {
    
      body:"hey",
      postId:3,
      userId:5
  }
    service.addComment(comment).subscribe();
    const req = httpMock.expectOne('https://dummyjson.com/comments/add');
    expect(req.request.method).toEqual("POST");
    req.flush({
      "id": 341,
      "body": "hey",
      "postId": 3,
      "user": {
        "id": 5,
        "username": "kmeus4"
      }
    }
      );
   });

   it('should delete the comment', () => {
    let comment = {
      "id": 1,
      "body": "This is some awesome thinking!",
      "postId": 100,
      "user": {
        "id": 63,
        "username": "eburras1q"
      }
    }
    service.deleteComment(comment).subscribe();
    const req = httpMock.expectOne('https://dummyjson.com/comments/1');
    expect(req.request.method).toEqual("DELETE");
    req.flush(
      {"id":1,"body":"This is some awesome thinking!","postId":100,"user":{"id":63,"username":"eburras1q"},"isDeleted":true,"deletedOn":"2022-08-21T08:26:04.030Z"}
      );
   });

   it('should edit the comment', () => {
    let comment = {
      "id": 1,
      "body": "This is some awesome thinking!",
      "postId": 100,
      "user": {
        "id": 63,
        "username": "eburras1q"
      }
    }
    comment.body = "I think I should shift to the moon";
    service.editComment(comment).subscribe();
    const req = httpMock.expectOne('https://dummyjson.com/comments/1');
    expect(req.request.method).toEqual("PUT");
    req.flush(
      {
        "id": 1,
        "body": "I think I should shift to the moon", // only body was updated
        "postId": 100,
        "user": {
          "id": 63,
          "username": "eburras1q"
        }
      }
      );
   });
});
