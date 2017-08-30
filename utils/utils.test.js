const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
  let res = utils.add(33,11);

  expect(res).toBe(44).toBeA('number');
  /*if (res !== 44){
    throw new Error(`Expected 44, but got ${res}`)
  }*/
});

it('should async add two numbers ', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should square a number', () => {
  let res = utils.square(3);

  expect(res).toBe(9).toBeA('number');
});

it('should async square a number', (done) => {
  utils.asyncSquare(4, (square) => {
    expect(square).toBe(16).toBeA('number');
    done();
  })
});

it('should expect some values', () => {
  //expect(12).toNotBe(11);
  //expect({ name: 'Andrew'}).toEqual({ name: 'Andrew' });
  expect([1,3,6]).toInclude(1);
});

it('should set first name and last name', ()=>{
  let user = { location: 'chile', age: 23 };
  let res = utils.setName(user, 'Hans Felipe');

  expect(res).toInclude({
    firstName: 'Hans',
    lastName: 'Felipe',
  })
});