<template>
  <div class="container mx-auto px-4 py-16">
    <div class="max-w-2xl mx-auto text-center">
      <div class="text-6xl mb-6">🎉</div>
      <h1 class="text-3xl font-bold text-brown mb-2">Thank You for Your Order!</h1>
      <p class="text-xl text-gold mb-4">Sweet Al Khajana - Fultala, Khulna</p>
      
      <div v-if="orderDetails" class="bg-white rounded-lg shadow p-6 text-left mb-8">
        <h2 class="text-xl font-semibold text-brown mb-4">Order Details</h2>
        
        <div class="space-y-3">
          <p><span class="font-medium">Order ID:</span> {{ orderDetails.orderId }}</p>
          <p><span class="font-medium">Transaction ID:</span> {{ orderDetails.transactionId }}</p>
          <p><span class="font-medium">Name:</span> {{ orderDetails.customerName }}</p>
          <p><span class="font-medium">Phone:</span> {{ orderDetails.phone }}</p>
          <p><span class="font-medium">Delivery Address:</span> {{ orderDetails.address }}, {{ orderDetails.area }}, {{ orderDetails.city }}</p>
          <p><span class="font-medium">Payment Method:</span> {{ getPaymentMethodName(orderDetails.paymentMethod) }}</p>
          <p><span class="font-medium">Total Amount:</span> ৳ {{ orderDetails.total }}</p>
        </div>
        
        <div class="mt-4 p-3 bg-dark-cream rounded">
          <p class="text-sm text-brown">
            <span class="font-semibold">📍 Pickup available at:</span> Fultala Main Road, Fultala, Khulna
          </p>
        </div>
      </div>
      
      <div class="space-x-4">
        <router-link to="/products" class="btn-primary inline-block">
          Continue Shopping
        </router-link>
        <button @click="printOrder" class="btn-secondary inline-block">
          Print Receipt
        </button>
      </div>
      
      <p class="mt-8 text-gray-600">
        We'll prepare your sweets fresh from our Fultala kitchen! 
        <br>For delivery updates, call us at +880 171X-XXXXXX
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const orderDetails = ref(null)

onMounted(() => {
  const savedOrder = localStorage.getItem('lastOrder')
  if (savedOrder) {
    orderDetails.value = JSON.parse(savedOrder)
  }
})

const getPaymentMethodName = (method) => {
  const methods = {
    bkash: 'bKash',
    nagad: 'Nagad',
    card: 'Debit/Credit Card',
    cod: 'Cash on Delivery'
  }
  return methods[method] || method
}

const printOrder = () => {
  window.print()
}
</script>