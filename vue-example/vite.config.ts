import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteStaticCopy } from "vite-plugin-static-copy";


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag === "blinkoo-feed"
        }
      }
    }),
    vueJsx(),
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/@blinkoo/components/dist/blinkoo-feed/assets", // NPM package folder's path
          dest: "blinkoo-feed", // Destination folder inside `outDir`
        },
        {
          src: "node_modules/@blinkoo/components/dist/blinkoo-feed/canvaskit", // NPM package folder's path
          dest: "blinkoo-feed", // Destination folder inside `outDir`
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
