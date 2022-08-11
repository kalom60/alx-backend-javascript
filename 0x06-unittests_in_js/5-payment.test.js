const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const sendPaymentRequestToApi = require('./3-payment');

describe('', () => {
  let spy;
  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    sinon.restore();
  });
  it('', () => {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledWith('The total is: 120')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });

  it('', () => {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.calledWith('The total is: 20')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });
});
