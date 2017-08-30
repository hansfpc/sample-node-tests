const request = require('supertest');
const expect = require('expect');
const app = require('./server').app;

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