<template>
  <div class="bg-sweet-pattern">
    <!-- Hero Banner -->
    <section class="relative h-[600px] overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary-dark"></div>
        <div class="absolute inset-0 bg-sweet-pattern-light opacity-20"></div>
      </div>
      
      <div class="relative h-full container mx-auto px-4 flex items-center justify-center text-center text-white">
        <div class="max-w-4xl animate-slide-up">
          <span class="inline-block bg-secondary text-primary-dark px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            🍬 Authentic Since 1995
          </span>
          <h1 class="text-6xl md:text-7xl font-display font-bold mb-4 leading-tight">
            Sweet Al Khajana
          </h1>
          <p class="text-2xl md:text-3xl mb-2 text-secondary font-semibold">ফুলতলা, খুলনার প্রাণের মিষ্টি</p>
          <p class="text-xl md:text-2xl mb-10 text-peach">Authentic Bangladeshi Sweets Delivered to Your Doorstep in Khulna</p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/products" class="btn-primary text-lg inline-flex items-center justify-center group">
              <span>Explore Our Sweets</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </router-link>
            <router-link to="/about" class="btn-secondary text-lg inline-flex items-center justify-center group">
              <span>Our Story</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
      
      <!-- Wave divider -->
      <div class="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="w-full h-auto" preserveAspectRatio="none">
          <path fill="#FFF5E6" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
    
    <!-- Location Badge -->
    <div class="bg-gradient-to-r from-peach to-cream py-6 relative z-10 shadow-md">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center justify-center gap-4 text-center">
          <span class="badge text-base px-4 py-2">
            <span class="mr-2">📍</span> Serving Fultala and all areas of Khulna
          </span>
          <span class="text-primary font-bold hidden sm:inline">•</span>
          <span class="badge bg-primary text-white px-4 py-2 text-base">
            <span class="mr-2">🆓</span> Free delivery in Fultala area
          </span>
        </div>
      </div>
    </div>
    
    <!-- Featured Sweets -->
    <section class="container mx-auto px-4 py-20">
      <div class="text-center mb-16">
        <span class="badge mb-4 text-base">Our Specialties</span>
        <h2 class="section-title text-5xl">Featured Sweets</h2>
        <p class="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
          Discover our most beloved traditional Bangladeshi sweets, made fresh daily in our Fultala kitchen
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(product, index) in featuredProducts" :key="product.id" 
             class="card group animate-fade-in"
             :style="{ animationDelay: `${index * 100}ms` }">
          <div class="relative overflow-hidden h-56">
            <img :src="product.image" :alt="product.name" 
                 class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
            <div class="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span class="absolute top-4 right-4 badge bg-white text-primary shadow-lg text-lg px-3 py-1">
              ৳ {{ product.price }}
            </span>
          </div>
          
          <div class="p-6">
            <h3 class="text-2xl font-display font-semibold text-primary mb-2">{{ product.name }}</h3>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">{{ product.description }}</p>
            
            <button @click="addToCart(product)" 
                    class="w-full btn-primary flex items-center justify-center space-x-2 group">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <router-link to="/products" class="btn-secondary inline-flex items-center group px-8 py-3 text-lg">
          View All Products
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>
      </div>
    </section>
    
    <!-- Features with Local Touch -->
    <section class="bg-gradient-to-br from-primary to-primary-dark py-20 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-sweet-pattern-large opacity-10"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-12">
          <span class="badge bg-white text-primary mb-4 text-base">Why Choose Us</span>
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white">The Sweet Al Khajana Difference</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="text-center animate-fade-in">
            <div class="text-6xl mb-4 inline-block p-6 bg-white/10 rounded-full backdrop-blur-sm border-2 border-white/20">
              🍬
            </div>
            <h3 class="text-2xl font-display font-semibold mb-3 text-secondary">Khulnar Chhoya</h3>
            <p class="text-peach text-lg">Traditional recipes from the heart of Khulna, passed down through generations</p>
          </div>
          <div class="text-center animate-fade-in" style="animation-delay: 100ms">
            <div class="text-6xl mb-4 inline-block p-6 bg-white/10 rounded-full backdrop-blur-sm border-2 border-white/20">
              🚚
            </div>
            <h3 class="text-2xl font-display font-semibold mb-3 text-secondary">Fultala Delivery</h3>
            <p class="text-peach text-lg">Free delivery in Fultala area, fast delivery across all Khulna</p>
          </div>
          <div class="text-center animate-fade-in" style="animation-delay: 200ms">
            <div class="text-6xl mb-4 inline-block p-6 bg-white/10 rounded-full backdrop-blur-sm border-2 border-white/20">
              💝
            </div>
            <h3 class="text-2xl font-display font-semibold mb-3 text-secondary">Fresh Daily</h3>
            <p class="text-peach text-lg">Made fresh every morning in our Fultala kitchen with premium ingredients</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Local Testimonials -->
    <section class="container mx-auto px-4 py-20">
      <div class="text-center mb-16">
        <span class="badge mb-4 text-base">Happy Customers</span>
        <h2 class="section-title text-5xl">What Khulna Says</h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div class="bg-white p-8 rounded-2xl shadow-xl relative animate-fade-in hover:shadow-2xl transition-shadow">
          <div class="absolute -top-4 left-8 text-6xl text-secondary opacity-20">"</div>
          <p class="text-gray-700 mb-6 relative z-10 text-lg italic leading-relaxed">
            "সেরা মিষ্টি ফুলতলায়! Sweet Al Khajana's roshogolla is just like my grandmother used to make. 
            Always fresh and perfectly sweet."
          </p>
          <div class="flex items-center">
            <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
              R
            </div>
            <div class="ml-4">
              <p class="font-semibold text-primary text-lg">- Rafiq Ahmed</p>
              <p class="text-sm text-gray-500">Fultala</p>
            </div>
          </div>
        </div>
        
        <div class="bg-white p-8 rounded-2xl shadow-xl relative animate-fade-in hover:shadow-2xl transition-shadow" style="animation-delay: 100ms">
          <div class="absolute -top-4 left-8 text-6xl text-secondary opacity-20">"</div>
          <p class="text-gray-700 mb-6 relative z-10 text-lg italic leading-relaxed">
            "I travel from Daulatpur just to buy their Cham Cham. Worth every kilometer! 
            The quality is consistently excellent."
          </p>
          <div class="flex items-center">
            <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
              S
            </div>
            <div class="ml-4">
              <p class="font-semibold text-primary text-lg">- Sumona Khan</p>
              <p class="text-sm text-gray-500">Daulatpur</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Stats Section -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
        <div class="text-center">
          <div class="text-4xl font-display font-bold text-primary">28+</div>
          <div class="text-gray-600">Years of Tradition</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-display font-bold text-primary">50+</div>
          <div class="text-gray-600">Sweet Varieties</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-display font-bold text-primary">10k+</div>
          <div class="text-gray-600">Happy Customers</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-display font-bold text-primary">24/7</div>
          <div class="text-gray-600">Fresh Preparation</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useCartStore } from '../store/cart'

const cartStore = useCartStore()

const featuredProducts = [
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
  }
]

const addToCart = (product) => {
  cartStore.addToCart(product)
}
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out forwards;
}
</style>