const chai = require('chai');
const request = require('request');
const { expect } = chai;

describe('Index page', () => {
  const baseUrl = 'http://localhost:7865/';

  it('should return status code 200 for the index route', (done) => {
    request.get(baseUrl, (err, res) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message for the index route', (done) => {
    request.get(baseUrl, (err, res, body) => {
      if (err) return done(err);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  const baseUrl = 'http://localhost:7865/cart/';

  it('should return status code 200 when :id is a number', (done) => {
    request.get(`${baseUrl}12`, (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 when :id is NOT a number', (done) => {
    request.get(`${baseUrl}hello`, (err, res) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('should return status code 404 for missing :id', (done) => {
    request.get(`${baseUrl}`, (err, res) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
