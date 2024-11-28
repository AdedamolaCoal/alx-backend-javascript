// 3-payment.test.js
import sinon from 'sinon';
import { expect } from 'chai';
import Utils from './utils.js';
import { sendPaymentRequestToApi } from './3-payment.js';

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    // Set up the spy on Utils.calculateNumber
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    // Restore the spy after each test
    spy.restore();
  });

  it('should call Utils.calculateNumber with "SUM", 100, and 20', () => {
    sendPaymentRequestToApi(100, 20);

    expect(spy.calledOnce).to.be.true; // Ensure the function was called once
    expect(spy.calledWith('SUM', 100, 20)).to.be.true; // Ensure it was called with correct arguments
  });

  it('should log the correct total', () => {
    const consoleSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);

    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;

    consoleSpy.restore(); // Clean up the console spy
  });
});
