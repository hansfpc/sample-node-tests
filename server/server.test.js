const request = require('supertest');
const expect = require('expect');
const app = require('./server').app;

describe('Server', () => {
  describe('GET /', () => {
    it('should return Hello world! response', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found :c',
            name: 'Hans Felipe',
          })
        })
        .end(done);
    });
  });
  describe('GET /users', () => {
    it('should return my user object', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Hans',
            age: 23,
          })
        })
        .end(done);
    });
  });
});