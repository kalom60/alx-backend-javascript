const chai = require('chai');
const expect = chai.expect;

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('testing promise', () => {
  it('test promise when argument is true', (done) => {
    getPaymentTokenFromAPI(true).then((res) => {
      expect(res).to.include({ data: 'Successful response from the API' });
      done();
    });
  });
});
