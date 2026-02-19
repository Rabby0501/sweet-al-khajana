<template>
  <nav class="bg-gradient-to-r from-primary to-primary-dark text-white shadow-2xl sticky top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-20">
        <router-link to="/" class="flex items-center space-x-3 group">
          <span class="text-3xl font-bold bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent 
                       group-hover:scale-105 transition-transform duration-300">
            Sweet Al Khajana
          </span>
          <span class="text-sm hidden md:block bg-secondary text-primary-dark px-3 py-1.5 rounded-full font-semibold 
                       shadow-lg animate-bounce-slow">
            📍 Fultala, Khulna
          </span>
        </router-link>
        
        <div class="hidden md:flex space-x-8">
          <router-link to="/" class="nav-link" :class="{ 'active': $route.path === '/' }">
            <span class="text-lg font-semibold hover:text-secondary transition-colors">Home</span>
          </router-link>
          <router-link to="/products" class="nav-link" :class="{ 'active': $route.path === '/products' }">
            <span class="text-lg font-semibold hover:text-secondary transition-colors">Products</span>
          </router-link>
          <router-link to="/about" class="nav-link" :class="{ 'active': $route.path === '/about' }">
            <span class="text-lg font-semibold hover:text-secondary transition-colors">About</span>
          </router-link>
          <router-link to="/contact" class="nav-link" :class="{ 'active': $route.path === '/contact' }">
            <span class="text-lg font-semibold hover:text-secondary transition-colors">Contact</span>
          </router-link>
        </div>
        
        <div class="flex items-center space-x-6">
          <router-link to="/cart" class="relative group">
            <div class="p-2 hover:bg-primary-light rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span v-if="cartStore.totalItems > 0" 
                  class="absolute -top-1 -right-1 bg-secondary text-primary-dark rounded-full w-6 h-6 
                         flex items-center justify-center text-sm font-bold animate-pulse">
              {{ cartStore.totalItems }}
            </span>
          </router-link>
          
          <button @click="toggleMobileMenu" class="md:hidden p-2 hover:bg-primary-light rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div v-show="isMobileMenuOpen" class="md:hidden pb-4 space-y-2">
        <router-link to="/" class="block py-2 px-4 hover:bg-primary-light rounded-lg transition" @click="closeMobileMenu">
          Home
        </router-link>
        <router-link to="/products" class="block py-2 px-4 hover:bg-primary-light rounded-lg transition" @click="closeMobileMenu">
          Products
        </router-link>
        <router-link to="/about" class="block py-2 px-4 hover:bg-primary-light rounded-lg transition" @click="closeMobileMenu">
          About
        </router-link>
        <router-link to="/contact" class="block py-2 px-4 hover:bg-primary-light rounded-lg transition" @click="closeMobileMenu">
          Contact
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '../store/cart'

const cartStore = useCartStore()
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
.nav-link span {
  color: white;
  border-bottom: 2px solid transparent;
  padding-bottom: 0.25rem;
  transition: color 0.3s, border-color 0.3s;
}
.nav-link.active span {
  color: var(--color-secondary);
  border-bottom: 2px solid var(--color-secondary);
  padding-bottom: 0.25rem;
}
</style> text-secondary border-b-2 border-secondary;
