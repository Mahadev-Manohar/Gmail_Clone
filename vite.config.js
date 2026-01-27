import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: 5173,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'gnomish-semilyrically-kase.ngrok-free.dev',
      '.ngrok-free.dev',
      '.ngrok.io',
    ],
  },
})

