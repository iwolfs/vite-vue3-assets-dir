import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],


  resolve: {
    alias: {
      '~': resolve(__dirname, '.'),
      '@': resolve(__dirname, './src'),
    }
  },

  build: {
    // outDir: './dist/app',
    assetsDir: './app/assets',
  },

  preview: {
    port: 6047,
    host: '0.0.0.0',
  }
})
