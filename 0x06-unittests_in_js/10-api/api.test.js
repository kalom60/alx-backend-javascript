const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const url = 'http://localhost:7865';

  it('index page', (done) => {
    request.get(url, (err, res, data) => {
      expect(res.statusCode).to.equal(200);
      expect(data).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart Page', () => {
  const url = 'http://localhost:7865';

  it('Check cart page with id which is number', (done) => {
    request.get(`${url}/cart/50`, (err, res, data) => {
      expect(res.statusCode).to.equal(200);
      expect(data).to.be.equal('Payment methods for cart 50');
      done();
    });
  });

  it('Check cart page with id which is string', (done) => {
    request.get(`${url}/cart/hello`, (err, res, data) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('Check cart page with id which is negative number', (done) => {
    request.get(`${url}/cart/hello`, (err, res, data) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Payment page', () => {
  const url = 'http://localhost:7865';

  it('available payment methods', (done) => {
    request.get(`${url}/available_payments`, (err, res, data) => {
      expect(res.statusCode).to.equal(200);
      expect(JSON.parse(data)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  });
});

describe('Login page', () => {
  const url = 'http://localhost:7865';

  it('login', (done) => {
    request.post(
      `${url}/login`,
      { json: { userName: 'John' } },
      (err, res, data) => {
        expect(res.statusCode).to.equal(200);
        expect(data).to.equal('Welcome John');
        done();
      }
    );
  });
});
