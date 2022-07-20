import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: {
        start_url: './',
        scope: '.',
        name: 'ToDo',
        short_name: 'ToDo',
        description: 'ToDo app.',
        theme_color: 'khaki'
      }
    })
  ],
  build: {
    outDir: 'build'
  }
})
