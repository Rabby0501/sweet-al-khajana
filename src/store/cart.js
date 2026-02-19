import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    deliveryLocation: 'inside-dhaka',
    vatRate: 0.05 // 5% VAT
  }),
  
  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    
    subtotal: (state) => state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
    
    vat: (state) => state.subtotal * state.vatRate,
    
    deliveryCharge: (state) => state.deliveryLocation === 'inside-dhaka' ? 60 : 120,
    
    total: (state) => state.subtotal + state.vat + state.deliveryCharge,
    
    cartItems: (state) => state.items
  },
  
  actions: {
    addToCart(product) {
      const existingItem = this.items.find(item => item.id === product.id)
      
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({
          ...product,
          quantity: 1
        })
      }
    },
    
    removeFromCart(productId) {
      this.items = this.items.filter(item => item.id !== productId)
    },
    
    updateQuantity(productId, quantity) {
      const item = this.items.find(item => item.id === productId)
      if (item) {
        if (quantity <= 0) {
          this.removeFromCart(productId)
        } else {
          item.quantity = quantity
        }
      }
    },
    
    clearCart() {
      this.items = []
    },
    
    setDeliveryLocation(location) {
      this.deliveryLocation = location
    }
  },
  
  persist: true
})