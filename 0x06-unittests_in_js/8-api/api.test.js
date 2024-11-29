const chai = require('chai');
const request = require('request');
const { expect } = chai;

describe('Index page', () => {
  const url = 'http://localhost:7865/';

  it('should return status code 200', (done) => {
    request.get(url, (err, res) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request.get(url, (err, res, body) => {
      if (err) return done(err);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should handle unexpected routes gracefully', (done) => {
    request.get('http://localhost:7865/unknown', (err, res) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
