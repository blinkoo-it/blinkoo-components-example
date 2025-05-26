# Blinkoo Components VueJS Example

The steps to add the blinkoo feed dependency are:

- Add `@blinkoo/components` as a dependency in `package.json`

```json
"dependencies": {
    "@blinkoo/components": "^2.0.0",
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

- Create a component wrapper for blinkoo-components (you can copy the ones in this repository in `src/components`)

- Now you can import your desired wrapper component where you want to show the feed as in the following code:

```vue
<FeedVideo ref="videoRef" title="Explore" />
```

For more information on components parameters, check out our [documentation](https://documentation.blinkoo.com)
