import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import jsonPages from './src/router/routes.json'

const pages = []

for (const i in jsonPages) {
  pages.push(`./src/pages/${jsonPages[i].name}Page`)
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-portfolio/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.json', '.vue']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'group-pages': pages
        }
      }
    }
  }
})
