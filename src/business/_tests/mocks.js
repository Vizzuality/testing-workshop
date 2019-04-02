import utils from '@test-utils';

export default {
  payments: {
    adyen: { type: 'adyen', email: utils.email },
    paypal: { type: 'paypal', email: utils.email },
    apple: { type: 'apple', email: utils.email },
    invalidProvider: { type: 'invalid', email: utils.email },
    missingField: { email: utils.email },
    specialPayment: { type: 'apple', email: utils.email },
    expected: {
      invalidProvider: { status: 400, msg: 'Payment provider not supported' },
      missingField: { status: 400, msg: 'Missing required payment field!' },
      success: { status: 200, msg: 'Payment being processed!' },
      special: { status: 200, msg: 'WOW! thats a large payment' }
    }
  }
}