import { Component } from '@angular/core';
import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return a string', () => {
    const pipe = new FilterPipe();
    
    let items = [{
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
    }];

    let expectedResponse = [{
      "id": 2,
      "name": 'Pruthvi Dhamecha',
      "imageUrl": '/assets/300-6.jpg',
      "email": 'pruthvi@gmail.com',
      "role": 'Engineer',
      "last_login": 'Today',
      "two_step": 'Desabled',
      "joined_date": '01 July 2022, 6:43 pm',
    }];
    let seachString = "Pruthvi";
    expect(pipe.transform(items,seachString)).toEqual(expectedResponse);
  });
});
