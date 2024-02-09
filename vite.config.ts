import { fileURLToPath, URL } from 'node:url'
import dts from "vite-plugin-dts";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'


// https://vitejs.dev/config/
export default defineConfig({
  base: "https://klisabeth.github.io/booking-app/",
  plugins: [
    vue(),
    vueJsx(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
