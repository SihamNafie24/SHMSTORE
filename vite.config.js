import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    strictPort: false, // Allow Vite to try other ports if 5174 is taken
    host: true,
    open: true
  },
  base: '/',
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
