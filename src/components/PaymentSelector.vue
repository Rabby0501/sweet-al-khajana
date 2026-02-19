<template>
  <div class="space-y-4">
    <h3 class="text-xl font-semibold text-brown">Payment Method</h3>
    
    <div class="space-y-3">
      <div v-for="(method, key) in paymentMethods" :key="key" class="border rounded-lg p-4">
        <label class="flex items-center space-x-3 cursor-pointer">
          <input type="radio" :value="key" v-model="selectedMethod" class="form-radio text-gold">
          <span class="font-medium">{{ method.name }}</span>
        </label>
        
        <div v-if="selectedMethod === key" class="mt-3 pl-7">
          <div v-if="key === 'bkash'" class="space-y-3">
            <p class="text-sm text-gray-600">{{ method.instructions }}</p>
            <div class="bg-blue-50 p-3 rounded">
              <p class="font-semibold">bKash Merchant: {{ method.merchantNumber }}</p>
            </div>
            <input 
              v-model="paymentDetails.bkashReference"
              type="text" 
              placeholder="Enter bKash reference number"
              class="input-field text-sm"
            >
          </div>
          
          <div v-else-if="key === 'nagad'" class="space-y-3">
            <p class="text-sm text-gray-600">{{ method.instructions }}</p>
            <div class="bg-orange-50 p-3 rounded">
              <p class="font-semibold">Nagad Merchant: {{ method.merchantNumber }}</p>
            </div>
            <input 
              v-model="paymentDetails.nagadReference"
              type="text" 
              placeholder="Enter Nagad reference number"
              class="input-field text-sm"
            >
          </div>
          
          <div v-else-if="key === 'card'" class="space-y-3">
            <p class="text-sm text-gray-600">{{ method.instructions }}</p>
            <input 
              v-model="paymentDetails.cardNumber"
              type="text" 
              placeholder="Card Number"
              class="input-field text-sm"
            >
            <div class="grid grid-cols-2 gap-2">
              <input 
                v-model="paymentDetails.expiry"
                type="text" 
                placeholder="MM/YY"
                class="input-field text-sm"
              >
              <input 
                v-model="paymentDetails.cvv"
                type="text" 
                placeholder="CVV"
                class="input-field text-sm"
              >
            </div>
          </div>
          
          <div v-else-if="key === 'cod'" class="space-y-3">
            <p class="text-sm text-gray-600">{{ method.instructions }}</p>
            <div class="bg-green-50 p-3 rounded">
              <p class="text-sm">✓ You'll pay when you receive your order</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import paymentService from '../services/paymentService'

const emit = defineEmits(['payment-method-change', 'payment-details-change'])

const paymentMethods = paymentService.getPaymentMethods()
const selectedMethod = ref('cod')
const paymentDetails = ref({
  bkashReference: '',
  nagadReference: '',
  cardNumber: '',
  expiry: '',
  cvv: ''
})

watch(selectedMethod, (newMethod) => {
  emit('payment-method-change', newMethod)
})

watch(paymentDetails, (newDetails) => {
  emit('payment-details-change', newDetails)
}, { deep: true })
</script>