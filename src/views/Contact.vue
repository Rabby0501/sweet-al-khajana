<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-brown mb-8">Contact Sweet Al Khajana</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold text-brown mb-4">Send us a Message</h2>
        
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-2">Name *</label>
            <input v-model="form.name" type="text" required class="input-field">
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-2">Email *</label>
            <input v-model="form.email" type="email" required class="input-field">
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-2">Phone</label>
            <input v-model="form.phone" type="tel" class="input-field">
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-2">Your Location in Khulna</label>
            <select v-model="form.area" class="input-field">
              <option value="">Select Area</option>
              <option v-for="area in khulnaAreas" :key="area" :value="area">{{ area }}</option>
            </select>
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-2">Message *</label>
            <textarea v-model="form.message" required rows="4" class="input-field"></textarea>
          </div>
          
          <button type="submit" class="btn-primary w-full">
            Send Message
          </button>
        </form>
      </div>
      
      <div class="space-y-6">
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold text-brown mb-4">📍 Visit Our Shop in Fultala</h2>
          <p class="mb-2">Fultala Main Road</p>
          <p class="mb-2">Fultala, Khulna - 9202</p>
          <p class="mb-2">📞 +880 171X-XXXXXX</p>
          <p>✉️ info@sweetal khajana.com</p>
          <div class="mt-4 p-3 bg-dark-cream rounded">
            <p class="text-sm font-semibold">Landmark: Near Fultala Bazar, beside Fultala Union Parishad</p>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold text-brown mb-4">🕐 Business Hours</h2>
          <p class="mb-2">Saturday - Thursday: 9:00 AM - 9:00 PM</p>
          <p class="mb-2">Friday: 3:00 PM - 9:00 PM</p>
          <p class="text-sm text-gray-600 mt-2">We're open all public holidays</p>
        </div>
        
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold text-brown mb-4">🚚 Delivery Areas</h2>
          <p class="mb-2"><span class="font-semibold">Free Delivery:</span> Fultala, Khanjahan Ali</p>
          <p class="mb-2"><span class="font-semibold">Delivery Available:</span> All areas of Khulna including:</p>
          <div class="grid grid-cols-2 gap-2 text-sm mt-2">
            <span>• Khalishpur</span>
            <span>• Daulatpur</span>
            <span>• Sonadanga</span>
            <span>• Boyra</span>
            <span>• Gollamari</span>
            <span>• Nirala</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

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
  'Rupsha'
]

const form = reactive({
  name: '',
  email: '',
  phone: '',
  area: '',
  message: ''
})

const submitForm = () => {
  alert(`Thank you for contacting Sweet Al Khajana! We'll respond to your message soon.`)
  form.name = ''
  form.email = ''
  form.phone = ''
  form.area = ''
  form.message = ''
}
</script>