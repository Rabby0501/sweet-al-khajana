<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-brown mb-8">Checkout - Sweet Al Khajana</h1>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2">
        <div class="bg-white rounded-lg shadow p-6">
          <form @submit.prevent="placeOrder" class="space-y-6">
            <div>
              <h2 class="text-xl font-semibold text-brown mb-4">Customer Information</h2>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium mb-2">Full Name *</label>
                  <input 
                    v-model="formData.name"
                    type="text" 
                    required
                    class="input-field"
                    placeholder="John Doe"
                  >
                </div>
                
                <div>
                  <label class="block text-sm font-medium mb-2">Phone Number *</label>
                  <input 
                    v-model="formData.phone"
                    type="tel" 
                    required
                    pattern="01[3-9]{1}[0-9]{8}"
                    class="input-field"
                    placeholder="017XXXXXXXX"
                  >
                  <p class="text-xs text-gray-500 mt-1">Format: 017XXXXXXXX</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 class="text-xl font-semibold text-brown mb-4">Delivery Information</h2>
              
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium mb-2">Address *</label>
                  <textarea 
                    v-model="formData.address"
                    required
                    rows="3"
                    class="input-field"
                    placeholder="Street address, house number, area..."
                  ></textarea>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium mb-2">City *</label>
                    <select v-model="formData.city" required class="input-field">
                      <option value="Khulna">Khulna</option>
                    </select>
                  </div>
                  
                  <div>
                    <label class="block text-sm font-medium mb-2">Area/Location *</label>
                    <select v-model="formData.area" required class="input-field" @change="updateDeliveryLocation">
                      <option value="">Select Area</option>
                      <option v-for="area in khulnaAreas" :key="area" :value="area">
                        {{ area }}
                      </option>
                    </select>
                  </div>
                </div>
                
                <div class="bg-blue-50 p-3 rounded">
                  <p class="text-sm text-blue-800">
                    <span class="font-semibold">🚚 Fultala Area:</span> Free delivery
                    <br>
                    <span class="font-semibold">Other Khulna Areas:</span> ৳60 delivery charge
                  </p>
                </div>
              </div>
            </div>
            
            <PaymentSelector 
              @payment-method-change="updatePaymentMethod"
              @payment-details-change="updatePaymentDetails"
            />
          </form>
        </div>
      </div>
      
      <div class="lg:col-span-1">
        <div class="bg-white rounded-lg shadow p-6 sticky top-20">
          <h2 class="text-xl font-semibold text-brown mb-4">Your Order</h2>
          
          <div class="space-y-3 max-h-96 overflow-y-auto mb-4">
            <div v-for="item in cartStore.items" :key="item.id" class="flex justify-between text-sm">
              <span>{{ item.name }} x {{ item.quantity }}</span>
              <span>৳ {{ item.price * item.quantity }}</span>
            </div>
          </div>
          
          <div class="border-t pt-3 space-y-2">
            <div class="flex justify-between">
              <span>Subtotal</span>
              <span>৳ {{ cartStore.subtotal }}</span>
            </div>
            <div class="flex justify-between">
              <span>VAT (5%)</span>
              <span>৳ {{ cartStore.vat }}</span>
            </div>
            <div class="flex justify-between">
              <span>Delivery</span>
              <span>৳ {{ deliveryCharge }}</span>
            </div>
            <div class="flex justify-between font-bold text-lg border-t pt-2">
              <span>Total</span>
              <span class="text-gold">৳ {{ cartStore.total }}</span>
            </div>
          </div>
          
          <button 
            @click="placeOrder" 
            class="btn-primary w-full mt-6"
            :disabled="isProcessing"
          >
            <span v-if="isProcessing" class="flex items-center justify-center">
              <div class="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
              Processing...
            </span>
            <span v-else>Place Order - Sweet Al Khajana</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../store/cart'
import PaymentSelector from '../components/PaymentSelector.vue'
import paymentService from '../services/paymentService'

const router = useRouter()
const cartStore = useCartStore()
const isProcessing = ref(false)

const khulnaAreas = [
  'Fultala',
  'Khalishpur',
  'Daulatpur',
  'Sonadanga',
  'Boyra',
  'Gollamari',
  'Nirala',
  'Khulna University',
  'Shiromoni',
  'Rupsha',
  'Khanjahan Ali',
  'Atra Shilpa Area'
]

const formData = reactive({
  name: '',
  phone: '',
  address: '',
  city: 'Khulna',
  area: '',
  paymentMethod: 'cod',
  paymentDetails: {}
})

const deliveryCharge = computed(() => {
  return formData.area === 'Fultala' ? 0 : 60
})

const updateDeliveryLocation = () => {
  cartStore.setDeliveryLocation(formData.area === 'Fultala' ? 'inside-dhaka' : 'outside-dhaka')
}

const updatePaymentMethod = (method) => {
  formData.paymentMethod = method
}

const updatePaymentDetails = (details) => {
  formData.paymentDetails = details
}

const placeOrder = async () => {
  if (!formData.name || !formData.phone || !formData.address || !formData.area) {
    alert('Please fill in all required fields')
    return
  }
  
  isProcessing.value = true
  
  try {
    const paymentResult = await paymentService.processPayment(
      formData.paymentMethod, 
      formData.paymentDetails
    )
    
    if (paymentResult.success) {
      const orderData = {
        orderId: `SK${Date.now()}`,
        transactionId: paymentResult.transactionId,
        customerName: formData.name,
        phone: formData.phone,
        address: formData.address,
        area: formData.area,
        city: formData.city,
        total: cartStore.total,
        items: cartStore.items,
        paymentMethod: formData.paymentMethod,
        orderDate: new Date().toISOString(),
        shopName: 'Sweet Al Khajana',
        shopLocation: 'Fultala, Khulna'
      }
      
      localStorage.setItem('lastOrder', JSON.stringify(orderData))
      cartStore.clearCart()
      router.push('/order-success')
    }
  } catch (error) {
    alert('Payment failed. Please try again.')
  } finally {
    isProcessing.value = false
  }
}
</script>