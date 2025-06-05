// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Ensure the dev server is accessible from outside the container
  server: {
    host: '0.0.0.0', // This makes it accessible from your host machine via localhost
    port: 5173,      // This is the port Vite will run on
  }
})