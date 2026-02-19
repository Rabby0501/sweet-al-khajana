class PaymentService {
  constructor() {
    this.paymentMethods = {
      bkash: {
        name: 'bKash',
        merchantNumber: '017XXXXXXXX',
        instructions: 'Send money to 017XXXXXXXX (Sweet Al Khajana - Fultala) and enter the reference number below.'
      },
      nagad: {
        name: 'Nagad',
        merchantNumber: '017XXXXXXXX',
        instructions: 'Send money to 017XXXXXXXX (Sweet Al Khajana - Fultala) and enter the reference number below.'
      },
      card: {
        name: 'Debit/Credit Card',
        instructions: 'Enter your card details below. (Secure payment)'
      },
      cod: {
        name: 'Cash on Delivery',
        instructions: 'Pay with cash when you receive your order in Fultala or anywhere in Khulna.'
      }
    }
  }

  async processPayment(method, paymentDetails) {
    console.log(`Processing ${method} payment for Sweet Al Khajana:`, paymentDetails)
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          transactionId: `SK${Date.now()}`,
          message: 'Payment processed successfully'
        })
      }, 1500)
    })
  }

  async processBkashPayment(paymentData) {
    return this.processPayment('bkash', paymentData)
  }

  async processNagadPayment(paymentData) {
    return this.processPayment('nagad', paymentData)
  }

  async processSSLCommerzPayment(paymentData) {
    return this.processPayment('sslcommerz', paymentData)
  }

  getPaymentMethods() {
    return this.paymentMethods
  }
}

export default new PaymentService()