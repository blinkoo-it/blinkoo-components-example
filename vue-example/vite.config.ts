import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: tag =>
            [
              'blinkoo-feed',
              'blinkoo-single-video',
              'blinkoo-insight',
            ].includes(tag),
        },
      },
    }),
    vueJsx(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/@blinkoo/components/assets', // NPM package folder's path
          dest: 'blinkoo-assets', // Destination folder inside `outDir`
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
