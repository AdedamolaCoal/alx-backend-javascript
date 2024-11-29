const chai = require('chai');
const request = require('request');
const { expect } = chai;

describe('API tests', () => {
  const baseUrl = 'http://localhost:7865';

  describe('Index page', () => {
    it('should return status code 200 for the index route', (done) => {
      request.get(`${baseUrl}/`, (err, res) => {
        if (err) return done(err);
        expect(res.statusCode).to.equal(200);
        done();
      });
    });

    it('should return the correct message for the index route', (done) => {
      request.get(`${baseUrl}/`, (err, res, body) => {
        if (err) return done(err);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('Cart page', () => {
    it('should return status code 200 when :id is a number', (done) => {
      request.get(`${baseUrl}/cart/12`, (err, res, body) => {
        if (err) return done(err);
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('should return status code 404 when :id is NOT a number', (done) => {
      request.get(`${baseUrl}/cart/hello`, (err, res) => {
        if (err) return done(err);
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('Available payments', () => {
    it('should return status code 200 for /available_payments', (done) => {
      request.get(`${baseUrl}/available_payments`, (err, res) => {
        if (err) return done(err);
        expect(res.statusCode).to.equal(200);
        done();
      });
    });

    it('should return the correct payment methods object', (done) => {
      request.get(`${baseUrl}/available_payments`, (err, res, body) => {
        if (err) return done(err);
        const response = JSON.parse(body);
        expect(response).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
        done();
      });
    });
  });

  describe('Login', () => {
    it('should return status code 200 and welcome message for valid userName', (done) => {
      const options = {
        url: `${baseUrl}/login`,
        method: 'POST',
        json: true,
        body: { userName: 'Betty' },
      };

      request(options, (err, res, body) => {
        if (err) return done(err);
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });

    it('should return status code 400 for missing userName', (done) => {
      const options = {
        url: `${baseUrl}/login`,
        method: 'POST',
        json: true,
        body: {},
      };

      request(options, (err, res) => {
        if (err) return done(err);
        expect(res.statusCode).to.equal(400);
        expect(res.body).to.equal('Missing userName');
        done();
      });
    });
  });
});
