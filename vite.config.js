import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/NFT-preview-card-component-FM-challenge-6/', // For GitHub Pages
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  server: {
    port: 3000,
    open: true,
  },
})
