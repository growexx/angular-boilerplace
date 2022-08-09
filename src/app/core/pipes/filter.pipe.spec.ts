import { Component } from '@angular/core';
import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return a string', () => {
    const pipe = new FilterPipe();

    let items = [
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
        "image": "https://robohash.org/hicveldicta.png",
      },
      {
        "id": 2,
        "firstName": "Sheldon",
        "lastName": "Quigley",
        "maidenName": "Cole",
        "age": 28,
        "gender": "male",
        "email": "hbingley1@plala.or.jp",
        "phone": "+7 813 117 7139",
        "username": "hbingley1",
        "password": "CQutx25i8r",
        "birthDate": "2003-08-02",
        "image": "https://robohash.org/doloremquesintcorrupti.png",
      },
    ];

    let seachString = "";
    expect(pipe.transform([], seachString, '')).toEqual([]);
    expect(pipe.transform(items, seachString, '')).toEqual(items);
  });

  it('should search for users with User\'s First Name', () => {
    const pipe = new FilterPipe();

    let items = [
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
        "image": "https://robohash.org/hicveldicta.png",
      },
      {
        "id": 2,
        "firstName": "Sheldon",
        "lastName": "Quigley",
        "maidenName": "Cole",
        "age": 28,
        "gender": "male",
        "email": "hbingley1@plala.or.jp",
        "phone": "+7 813 117 7139",
        "username": "hbingley1",
        "password": "CQutx25i8r",
        "birthDate": "2003-08-02",
        "image": "https://robohash.org/doloremquesintcorrupti.png",
      },
    ];

    let expectedResponse = [{
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
      "image": "https://robohash.org/hicveldicta.png",
    }];
    let seachString = "Terry";
    expect(pipe.transform(items, seachString, 'users.firstName')).toEqual(expectedResponse);
  });


  it('should search for users with department', () => {
    const pipe = new FilterPipe();

    let items = [
      {
        "id": 1,
        "itemName": "Marketing",
        "image": "https://robohash.org/hicveldicta.png",
        "isSelected": false,
      },
      {
        "id": 2,
        "image": "https://robohash.org/doloremquesintcorrupti.png",
        "itemName": "Services",
        "isSelected": false,
      },
    ];

    let expectedResponse = [{
      "id": 1,
      "itemName": "Marketing",
      "image": "https://robohash.org/hicveldicta.png",
      "isSelected": false,
    }];
    let seachString = "marketing";
    expect(pipe.transform(items, seachString, '')).toEqual(expectedResponse);
  });
});
