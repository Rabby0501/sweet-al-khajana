<template>
  <div class="bg-sweet-pattern min-h-screen py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <span class="badge mb-4">Our Story</span>
        <h1 class="section-title">About Sweet Al Khajana</h1>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Image Gallery -->
        <div class="space-y-6">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1551024601-bec78ae084b0?w=600" 
              alt="Traditional sweet making"
              class="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="rounded-xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1621265045539-3b0934b25d7a?w=400" 
                   alt="Making roshogolla" 
                   class="w-full h-32 object-cover hover:scale-110 transition-transform duration-500">
            </div>
            <div class="rounded-xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400" 
                   alt="Cham cham" 
                   class="w-full h-32 object-cover hover:scale-110 transition-transform duration-500">
            </div>
          </div>
          
          <!-- Location Card -->
          <div class="bg-white rounded-2xl shadow-xl p-6 border-2 border-peach">
            <div class="flex items-start space-x-4">
              <div class="bg-primary text-white p-3 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-display text-xl font-semibold text-primary mb-2">📍 Our Location</h3>
                <p class="text-gray-700">Fultala Main Road, Fultala, Khulna - 9202</p>
                <p class="text-sm text-gray-500 mt-2">
                  Easily accessible from Khulna University, Fultala Bazar, and surrounding areas.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Story Content -->
        <div class="space-y-8">
          <div class="bg-white rounded-2xl shadow-xl p-8">
            <h2 class="font-display text-3xl font-bold text-primary mb-6">Our Journey</h2>
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              Welcome to <span class="font-bold text-secondary">Sweet Al Khajana</span>, the heart of traditional Bangladeshi sweets in Fultala, Khulna. 
              Since 1995, we've been dedicated to preserving the rich culinary heritage of Bengal through our traditional sweet-making techniques.
            </p>
            
            <p class="text-gray-600 leading-relaxed mb-6">
              Our journey began in the bustling area of Fultala, Khulna, where our founder, inspired by generations of family recipes, 
              started crafting the perfect roshogolla. Today, we've grown into a beloved local brand, serving sweet lovers across Khulna 
              with the same passion and authenticity.
            </p>
            
            <div class="bg-peach p-6 rounded-xl">
              <h3 class="font-display text-xl font-semibold text-primary mb-3">Our Khulna Roots</h3>
              <p class="text-gray-700">
                Being based in Fultala, we understand the unique tastes of Khulna residents. Our recipes have been perfected over decades 
                to match the local palate, making us the preferred sweet shop for families in Fultala, Khalishpur, Daulatpur, and beyond.
              </p>
            </div>
          </div>
          
          <!-- Our Promise -->
          <div class="bg-white rounded-2xl shadow-xl p-8">
            <h2 class="font-display text-3xl font-bold text-primary mb-6">Our Promise</h2>
            
            <div class="grid grid-cols-1 gap-4">
              <div class="flex items-start space-x-4">
                <div class="bg-secondary p-2 rounded-lg">
                  <svg class="w-5 h-5 text-primary-dark" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-primary">100% Fresh Daily</h4>
                  <p class="text-gray-600">Handmade sweets daily in our Fultala kitchen</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="bg-secondary p-2 rounded-lg">
                  <svg class="w-5 h-5 text-primary-dark" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-primary">Traditional Recipes</h4>
                  <p class="text-gray-600">Using premium ingredients from Khulna markets</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="bg-secondary p-2 rounded-lg">
                  <svg class="w-5 h-5 text-primary-dark" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-primary">Hygienic Preparation</h4>
                  <p class="text-gray-600">Strict quality control and clean processing</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="bg-secondary p-2 rounded-lg">
                  <svg class="w-5 h-5 text-primary-dark" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-primary">Free Delivery in Fultala</h4>
                  <p class="text-gray-600">Fast delivery across all Khulna areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>