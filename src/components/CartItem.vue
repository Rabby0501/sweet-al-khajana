<template>
  <div class="flex items-center space-x-4 py-4 border-b">
    <img :src="item.image" :alt="item.name" class="w-20 h-20 object-cover rounded">
    
    <div class="flex-grow">
      <h3 class="font-semibold">{{ item.name }}</h3>
      <p class="text-gold font-bold">৳ {{ item.price }}</p>
    </div>
    
    <div class="flex items-center space-x-2">
      <button @click="decreaseQuantity" class="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300">-</button>
      <span class="w-8 text-center">{{ item.quantity }}</span>
      <button @click="increaseQuantity" class="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300">+</button>
    </div>
    
    <div class="text-right">
      <p class="font-bold">৳ {{ item.price * item.quantity }}</p>
      <button @click="removeItem" class="text-red-500 hover:text-red-700 text-sm mt-1">
        Remove
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../store/cart'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()

const increaseQuantity = () => {
  cartStore.updateQuantity(props.item.id, props.item.quantity + 1)
}

const decreaseQuantity = () => {
  cartStore.updateQuantity(props.item.id, props.item.quantity - 1)
}

const removeItem = () => {
  cartStore.removeFromCart(props.item.id)
}
</script>