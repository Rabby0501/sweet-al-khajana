<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-brown mb-8">Shopping Cart</h1>
    
    <div v-if="cartStore.items.length === 0" class="text-center py-16">
      <div class="text-6xl mb-4">🛒</div>
      <h2 class="text-2xl font-semibold text-gray-600 mb-4">Your cart is empty</h2>
      <p class="text-gray-500 mb-8">Looks like you haven't added any sweets from Sweet Al Khajana yet.</p>
      <router-link to="/products" class="btn-primary inline-block">
        Browse Sweets
      </router-link>
    </div>
    
    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2">
        <div class="bg-white rounded-lg shadow p-6">
          <CartItem 
            v-for="item in cartStore.items" 
            :key="item.id" 
            :item="item"
          />
        </div>
      </div>
      
      <div class="lg:col-span-1">
        <div class="bg-white rounded-lg shadow p-6 sticky top-20">
          <h2 class="text-xl font-semibold text-brown mb-4">Order Summary</h2>
          
          <div class="space-y-3 mb-4">
            <div class="flex justify-between">
              <span>Subtotal</span>
              <span>৳ {{ cartStore.subtotal }}</span>
            </div>
            
            <div class="flex justify-between">
              <span>VAT (5%)</span>
              <span>৳ {{ cartStore.vat }}</span>
            </div>
            
            <div class="flex justify-between items-center">
              <span>Delivery Charge</span>
              <select 
                v-model="deliveryLocation" 
                @change="updateDeliveryLocation"
                class="border rounded px-2 py-1 text-sm"
              >
                <option value="inside-dhaka">Inside Dhaka (৳60)</option>
                <option value="outside-dhaka">Outside Dhaka (৳120)</option>
              </select>
            </div>
            
            <div class="border-t pt-3">
              <div class="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span class="text-gold">৳ {{ cartStore.total }}</span>
              </div>
            </div>
          </div>
          
          <router-link 
            to="/checkout" 
            class="btn-primary w-full text-center block"
          >
            Proceed to Checkout
          </router-link>
          
          <button 
            @click="clearCart" 
            class="text-red-500 hover:text-red-700 text-sm mt-4 w-full"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '../store/cart'
import CartItem from '../components/CartItem.vue'

const cartStore = useCartStore()
const deliveryLocation = ref(cartStore.deliveryLocation)

const updateDeliveryLocation = () => {
  cartStore.setDeliveryLocation(deliveryLocation.value)
}

const clearCart = () => {
  if (confirm('Are you sure you want to clear your cart?')) {
    cartStore.clearCart()
  }
}
</script>