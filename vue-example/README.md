# Blinkoo Components VueJS Example

The steps to add the blinkoo feed dependency are:

- Add `@blinkoo/components` as a dependency in `package.json`

```json
"dependencies": {
    "@blinkoo/components": "^2.0.0",
}
```

- Add `vite-plugin-static-copy` as a dev dependency in `package.json`

```json
"dev-dependencies": {
  "vite-plugin-static-copy": "^1.0.6"
}
```

- Copy the blinkoo assets in the `public` folder while running the app in development

```json
"scripts": {
    "copyBlinkooAssets": "rm -r public/blinkoo-assets 2> /dev/null && cp -r node_modules/@blinkoo/components/assets public/blinkoo-assets",
    "dev": "npm run copyBlinkooAssets && vite",
}
```

- Add the `isCustomElement` property to the vue `compilerOptions` in `vite.config.js`.

```ts
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
  ],
})
```

- Set the `vite-plugin-static-copy` to copy library dependency files while building in `vite.config.ts`:

```ts
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/@blinkoo/components/dist/assets',
          dest: 'blinkoo-assets',
        },
      ],
    }),
  ],
})
```

- Create a component wrapper for blinkoo-components (you can copy the ones in this repository in `src/components`)

- Now you can import your desired wrapper component where you want to show the feed as in the following code:

```vue
<script>
import FeedVideo from './components/FeedVideo.vue'
</script>

<FeedVideo ref="videoRef" title="Explore" assets-path="blinkoo-assets" />
```

For more information on components parameters, check out our [documentation](https://documentation.blinkoo.com)
