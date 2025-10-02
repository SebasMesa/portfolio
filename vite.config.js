import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/portfolio/",

  server: {
    allowedHosts: [
      'localhost',
      '.ngrok-free.app',
      '.tunnelto.dev',
      '.trycloudflare.com',
      'dfdc170a7fe3.ngrok-free.app'
    ]

  },
})
