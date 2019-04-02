// This is an example of some buisness logic we want to test
// This example function deels with payment as an example

export const PAYMENT_TYPES = ['adyen', 'paypal', 'apple'];

export default payment => {
  if (
    !payment.hasOwnProperty('email') ||
    !payment.hasOwnProperty('amount') ||
    !payment.hasOwnProperty('type')
  ) {
    return { status: 400, msg: 'Missing required payment field!' };
  }

  if (PAYMENT_TYPES.indexOf(payment.type) === -1) {
    return { status: 400, msg: 'Payment provider not supported' };
  }

  // Super special case
  if (payment.amount === 1000) {
    return { status: 200, msg: 'WOW! thats a large payment' };
  }

  return { status: 200, msg: 'Payment being processed!' };
}
