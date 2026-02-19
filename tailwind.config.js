/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9B2C2C', // Deep Ruby Red
          light: '#B13E3E',
          dark: '#7A1F1F',
        },
        secondary: {
          DEFAULT: '#FBBF24', // Warm Amber
          light: '#FCD34D',
          dark: '#D97706',
        },
        cream: '#FFF5E6', // Creamy White
        peach: '#FFE4D6', // Soft Peach
        brown: {
          DEFAULT: '#5D3A1A', // Rich Brown
          light: '#7B4F2B',
        },
        accent: '#F59E0B', // Golden Amber
      },
      fontFamily: {
        'bengali': ['Hind Siliguri', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}