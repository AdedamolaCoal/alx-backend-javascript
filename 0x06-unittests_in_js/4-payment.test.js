const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let stub;
  let consoleSpy;

  beforeEach(() => {
    // Stub the Utils.calculateNumber function
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the stub and the spy
    stub.restore();
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with "SUM", 100, and 20', () => {
    sendPaymentRequestToApi(100, 20);

    // Verify that the stub was called with correct arguments
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;

    // Verify that console.log logs the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
