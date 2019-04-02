import utils from '@test-utils';

export default {
  payments: {
    adyen: { type: 'adyen', email: utils.email, amount: 10 },
    paypal: { type: 'paypal', email: utils.email, amount: 10 },
    apple: { type: 'apple', email: utils.email, amount: 10 },
    invalidProvider: { type: 'invalid', email: utils.email, amount: 10 },
    missingField: { email: utils.email, amount: 10 },
    specialPayment: { type: 'apple', email: utils.email, amount: 1000 },
    expected: {
      invalidProvider: { status: 400, msg: 'Payment provider not supported' },
      missingField: { status: 400, msg: 'Missing required payment field!' },
      success: { status: 200, msg: 'Payment being processed!' },
      special: { status: 200, msg: 'WOW! thats a large payment' }
    }
  }
}