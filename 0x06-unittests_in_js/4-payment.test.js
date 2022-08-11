const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('', () => {
  it('', () => {
    const stub = sinon.stub(Utils, 'calculateNumber');
    stub.withArgs('SUM', 100, 20).returns(10);
    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(console.log.calledWith('The total is: 10')).to.be.true;
    stub.restore();
    spy.restore();
  });
});
