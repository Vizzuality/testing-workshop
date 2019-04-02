import utils from '@test-utils';

import mocks from './mocks';
import payment, { PAYMENT_TYPES } from '../payment';

describe('Payments', () => {
  const { payments } = mocks;
  const { expected } = payments;

  it('Should make a valid adyen payment', () => {
    const result = payment({ ...payments.adyen, amount: utils.number(10) });
    expect(result).toEqual(expected.success);
  });

  it('Should make a valid paypal payment', () => {
    const result = payment({ ...payments.paypal, amount: utils.number(10) });
    expect(result).toEqual(expected.success);
  });

  it('Should make a valid apple payment', () => {
    const result = payment({ ...payments.apple, amount: utils.number(10) });
    expect(result).toEqual(expected.success);
  });

  it('Should return invalid payment provider error', () => {
    const result = payment({ ...payments.invalidProvider, amount: utils.number(10) });
    expect(result).toEqual(expected.invalidProvider);
  });

  it('Should return missing field error', () => {
    const result = payment(payments.missingField);
    expect(result).toEqual(expected.missingField);
  });

  it('Should return special case if amount === 1000', () => {
    const result = payment({ ...payments.specialPayment, amount: utils.number(10) });
    expect(result).toEqual(expected.special);
  });
});
