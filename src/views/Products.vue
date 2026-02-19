<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-brown mb-8">Our Sweets Collection</h1>
    
    <div v-if="loading" class="flex justify-center items-center h-64">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
    </div>
    
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ProductCard 
        v-for="product in products" 
        :key="product.id" 
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ProductCard from '../components/ProductCard.vue'

const loading = ref(true)
const products = ref([])

onMounted(() => {
  setTimeout(() => {
    products.value = [
      {
        id: 1,
        name: 'Roshogolla',
        price: 250,
        description: 'Soft, spongy cottage cheese balls in light sugar syrup',
        image: 'https://images.unsplash.com/photo-1621265045539-3b0934b25d7a?w=400'
      },
      {
        id: 2,
        name: 'Cham Cham',
        price: 280,
        description: 'Cylindrical sweet with khoya filling, coated with mawa',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400'
      },
      {
        id: 3,
        name: 'Kalo Jam',
        price: 260,
        description: 'Deep-fried milk solids in cardamom-flavored syrup',
        image: 'https://images.unsplash.com/photo-1621265045524-406b46671d8d?w=400'
      },
      {
        id: 4,
        name: 'Sandesh',
        price: 300,
        description: 'Delicate Bengali cheese sweet with various flavors',
        image: 'https://images.unsplash.com/photo-1621265045479-0d8e7e9d7e7a?w=400'
      },
      {
        id: 5,
        name: 'Roshomalai',
        price: 320,
        description: 'Creamy cottage cheese patties in thickened milk',
        image: 'https://images.unsplash.com/photo-1621265045456-83b7b8d4c5f9?w=400'
      },
      {
        id: 6,
        name: 'Mishti Doi',
        price: 180,
        description: 'Caramelized sweet yogurt in earthen pots',
        image: 'https://images.unsplash.com/photo-1621265045469-8c8e7b4c6f9d?w=400'
      },
      {
        id: 7,
        name: 'Bhapa Pitha',
        price: 200,
        description: 'Steamed rice cake with coconut and jaggery',
        image: 'https://images.unsplash.com/photo-1621265045489-8c8e7b4c6f9e?w=400'
      },
      {
        id: 8,
        name: 'Laddu',
        price: 220,
        description: 'Round sweet made from chickpea flour and ghee',
        image: 'https://images.unsplash.com/photo-1621265045490-8c8e7b4c6f9f?w=400'
      }
    ]
    loading.value = false
  }, 1000)
})
</script>