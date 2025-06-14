import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),AutoImport({}),vueDevTools()],
  resolve: {
    alias: {
      '@': path.resolve("./src")
    }
  }
})
