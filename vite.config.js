import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Weather App',
        short_name: 'WeatherAPP',
        description: 'Fast Weather App',
        theme_color: '#af5a5a',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
           {
            src: '/pwa-32x32.png',
            sizes: '32x32',
            type: 'image/png'
          },
           {
            src: '/pwa-16x16.png',
            sizes: '16x16',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})