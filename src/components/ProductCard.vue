<template>
  <div class="card group">
    <div class="relative overflow-hidden h-48">
      <img :src="product.image" :alt="product.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
      <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
    </div>
    
    <div class="p-4">
      <h3 class="text-xl font-semibold text-brown mb-2">{{ product.name }}</h3>
      <p class="text-gray-600 text-sm mb-3">{{ product.description }}</p>
      
      <div class="flex justify-between items-center">
        <span class="text-2xl font-bold text-gold">৳ {{ product.price }}</span>
        <button @click="addToCart" class="btn-primary text-sm">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../store/cart'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()

const addToCart = () => {
  cartStore.addToCart(props.product)
}
</script>