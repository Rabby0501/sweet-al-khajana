import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/sweet-al-khajana/', // Change this to your repository name later
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})