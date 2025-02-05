import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/@blinkoo/components/dist/assets", // NPM package folder's path
          dest: "blinkoo-assets", // Destination folder inside `outDir`
        },
        {
          src: "node_modules/@blinkoo/components/dist/canvaskit", // NPM package folder's path
          dest: "blinkoo-assets", // Destination folder inside `outDir`
        },
      ],
    }),
  ],
});
