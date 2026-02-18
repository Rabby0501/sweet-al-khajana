/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8E7',
        gold: '#D4AF37',
        brown: '#8B4513',
        'light-brown': '#A0522D',
        'dark-cream': '#F5E6D3',
      },
      fontFamily: {
        'bengali': ['Hind Siliguri', 'sans-serif'],
      },
    },
  },
  plugins: [],
}