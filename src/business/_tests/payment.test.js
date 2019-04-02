import mocks from './mocks';
import payment, { PAYMENT_TYPES } from '../payment';

describe('Payments', () => {
  const { payments } = mocks;
  const { expected } = payments;

  it('Should make a valid adyen payment', () => {
    const result = payment(payments.adyen);
    expect(result).toEqual(expected.success);
  });

  it('Should make a valid paypal payment', () => {
    const result = payment(payments.paypal);
    expect(result).toEqual(expected.success);
  });

  it('Should make a valid apple payment', () => {
    const result = payment(payments.apple);
    expect(result).toEqual(expected.success);
  });

  it('Should return invalid payment provider error', () => {
    const result = payment(payments.invalidProvider);
    expect(result).toEqual(expected.invalidProvider);
  });

  it('Should return missing field error', () => {
    const result = payment(payments.missingField);
    expect(result).toEqual(expected.missingField);
  });

  it('Should trigger custom case if amount === 1000', () => {
    const result = payment(payments.specialPayment);
    expect(result).toEqual(expected.special);
  });

  // This is here on purpose, this is showcasing why testing is important
  // We are expecting amount to return the special case, but amount is a string!
  // it('Fail on purpose!', () => {
  //   const result = payment({ ...payments.specialPayment, amount: '1000'});
  //   expect(result).toEqual(expected.special);
  // });
});
