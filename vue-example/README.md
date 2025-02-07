# Blinkoo Components VueJS Example

The steps to add the blinkoo feed dependency are:

- Add `vite-plugin-static-copy` as a dev dependency in `package.json`
```json
"dev-dependencies": {
  "vite-plugin-static-copy": "^1.0.6"
}
```
- Add `@blinkoo/components` as a dev-dependency in `package.json` because you have to copy the library in build phase as follows
```json
"dev-dependencies": {
    "@blinkoo/components": "^1.0.0",
}
```
- Set the `vite-plugin-static-copy` to copy library dependency files while building in `vite.config.ts`:
```ts
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/@blinkoo/components/dist/assets",
          dest: "blinkoo-assets",
        },
        {
          src: "node_modules/@blinkoo/components/dist/canvaskit",
          dest: "blinkoo-assets",
        },
      ],
    }),
  ],
});
```

- Initialize the library
```html
<script setup>
import { ref, onMounted } from "vue";
import "@blinkoo/components";
import { BlinkooWebInit } from "@blinkoo/components";

const isInitialized = ref(false);

const initBlinkooComponents = async () => {
    await BlinkooWebInit.init({
        apiKey: "YOUR_API_KEY",
        assetsPath: "blinkoo-assets/"
    });
    isInitialized.value = true;
};

onMounted(() => {
    initBlinkooComponents();
});
</script>
```
*NB*: you can add to the DOM any component only after the library initialization is completed

- Create the `Feed.vue` and `SingleVide.vue` component (you can copy the file in this repository)

- Use any component where you want as in the next example

```html
<Feed title="Example Title"/>
```
