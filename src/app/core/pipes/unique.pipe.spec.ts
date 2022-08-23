import { UniquePipe } from './unique.pipe';

describe('UniquePipe', () => {
  it('create an instance', () => {
    const pipe = new UniquePipe();
    expect(pipe).toBeTruthy();
  });
  it('return the unique value', () => {
    const pipe = new UniquePipe();
    expect(pipe).toBeTruthy();
    let value:any =[{"id":1,"todo":"Do something nice for someone I care about","completed":true,"userId":26},{"id":2,"todo":"Memorize the fifty states and their capitals","completed":false,"userId":48},{"id":3,"todo":"Watch a classic movie","completed":false,"userId":4},{"id":4,"todo":"Contribute code or a monetary donation to an open-source software project","completed":false,"userId":48},{"id":5,"todo":"Solve a Rubik's cube","completed":false,"userId":31}];

    let result = [{"id":1,"todo":"Do something nice for someone I care about","completed":true,"userId":26},{"id":2,"todo":"Memorize the fifty states and their capitals","completed":false,"userId":48}]

    expect(pipe.transform(value)).toEqual(result);
    // searchString = 'Engineer'
    //   result =expectedResponse2;
    
    // expect(pipe.transform(value)).toEqual(result);
  });
});
