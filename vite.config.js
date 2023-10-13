import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/bad-bank-1.0/',
  test:{
    globals: true,
    environment: 'jsdom',
  }
})
