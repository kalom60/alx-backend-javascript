const request = require('request');
const { expect } = require('chai');

describe('Api test', () => {
  const url = 'http://localhost:7865';

  it('Index page', (done) => {
    request.get(url, (err, res, data) => {
      expect(res.statusCode).to.equal(200);
      expect(data).to.equal('Welcome to the payment system');
      done();
    });
  });
});
