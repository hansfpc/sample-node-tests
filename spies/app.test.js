const expect = require('expect');
const rewire = require('rewire');
const app = rewire('./app');

describe('App', () => {
  let db = {
    saveUser: expect.createSpy(),
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    let spy = expect.createSpy();
    spy('Hans', 25);
    expect(spy).toHaveBeenCalledWith('Hans', 25);
  });

  it('it should call saveUser with user object', () => {

  });
});