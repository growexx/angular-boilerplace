import { CompFilterPipe } from './comp-filter.pipe';

describe('CompFilterPipe', () => {
  it('should filter the data ', () => {
    const pipe = new CompFilterPipe();
    let searchString:string;
    let result:any;
    let items = [{
      "id": 1,
      "firstName": 'Emma Smith',
      "imageUrl": '/assets/300-6.jpg',
      "email": 'smith@kpmg.com',
      "company":{
        "department":'Administrator',
      } ,
      "last_login": 'Yesterday',
      "two_step": 'Enabled',
      "joined_date": '30 June 2022, 6:43 am',
    }, {
      "id": 2,
      "firstName": 'Osama Bin',
      "imageUrl": '/assets/300-6.jpg',
      "email": 'pruthvi@gmail.com',
      "company":{
        "department":'Engineer',
      } ,
      "last_login": 'Today',
      "two_step": 'Desabled',
      "joined_date": '01 July 2022, 6:43 pm',
    },
    {
      "id": 3,
      "firstName": 'Elon Musk',
      "imageUrl": '/assets/300-6.jpg',
      "email": 'pruthvi@gmail.com',
      "company":{
        "department":'Engineer',
      } ,
      "last_login": 'Today',
      "two_step": 'Desabled',
      "joined_date": '01 July 2022, 6:43 pm',
    }];

    let expectedResponse1 = [{
      "id": 3,
      "firstName": 'Elon Musk',
      "imageUrl": '/assets/300-6.jpg',
      "email": 'pruthvi@gmail.com',
      "company":{
        "department":'Engineer',
      } ,
      "last_login": 'Today',
      "two_step": 'Desabled',
      "joined_date": '01 July 2022, 6:43 pm',
    }];
    let expectedResponse2 = [{
      "id": 2,
      "firstName": 'Osama Bin',
      "imageUrl": '/assets/300-6.jpg',
      "email": 'pruthvi@gmail.com',
      "company":{
        "department":'Engineer',
      } ,
      "last_login": 'Today',
      "two_step": 'Desabled',
      "joined_date": '01 July 2022, 6:43 pm',
    },{
      "id": 3,
      "firstName": 'Elon Musk',
      "imageUrl": '/assets/300-6.jpg',
      "email": 'pruthvi@gmail.com',
      "company":{
        "department":'Engineer',
      } ,
      "last_login": 'Today',
      "two_step": 'Desabled',
      "joined_date": '01 July 2022, 6:43 pm',
    }]
    searchString = 'Elon';
      result =expectedResponse1;
    
    expect(pipe.transform(items , searchString)).toEqual(result);
    searchString = 'Engineer'
      result =expectedResponse2;
    
    expect(pipe.transform(items , searchString)).toEqual(result);
    
  });

 
   it('should check the searchString condition ', () => {
    const pipe = new CompFilterPipe();
    let items: any[] = [{
      "id": 1,
      "name": 'Emma Smith',
      "imageUrl": '/assets/300-6.jpg',
      "email": 'smith@kpmg.com',
      "role": 'Administrator',
      "last_login": 'Yesterday',
      "two_step": 'Enabled',
      "joined_date": '30 June 2022, 6:43 am',
    }, {
      "id": 2,
      "name": 'Pruthvi Dhamecha',
      "imageUrl": '/assets/300-6.jpg',
      "email": 'pruthvi@gmail.com',
      "role": 'Engineer',
      "last_login": 'Today',
      "two_step": 'Desabled',
      "joined_date": '01 July 2022, 6:43 pm',
    },
    {
      "id": 3,
      "name": 'Elon Musk',
      "imageUrl": '/assets/300-6.jpg',
      "email": 'pruthvi@gmail.com',
      "role": 'Engineer',
      "last_login": 'Today',
      "two_step": 'Desabled',
      "joined_date": '01 July 2022, 6:43 pm',
    }];
    let searchString = "";
    
    var result: any = items;
    expect(pipe.transform(items , searchString)).toEqual(result);
   });





  it('should check the items condition ', () => {
    const pipe = new CompFilterPipe();
     let items: any[] = [];
     let searchString: string = "elon";
     let expectedResponse:any = [];
    expect(pipe.transform(items,searchString)).toEqual(expectedResponse);
    
 });
});
