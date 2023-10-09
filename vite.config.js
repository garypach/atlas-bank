// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        request: './request.html',
      },
      input: [
        'request.js',
        'main.js'
      ],

    },
  },
})