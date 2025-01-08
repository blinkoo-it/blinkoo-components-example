# Blinkoo Feed React + Vite Example

The steps to add the blinkoo feed dependency are:

- Add `@blinkoo/components` as a dev-dependency in `package.json` because you have to copy the library in build phase as follows
```json
"dev-dependencies": {
    "@blinkoo/components": "^0.2.2",
}
```
- Add `vite-plugin-static-copy` as a dev dependency in `package.json`
```json
"dev-dependencies": {
  "vite-plugin-static-copy": "^1.0.6"
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
          src: "node_modules/@blinkoo/components/dist/blinkoo-feed/assets",
          dest: "blinkoo-feed",
        },
        {
          src: "node_modules/@blinkoo/components/dist/blinkoo-feed/canvaskit",
          dest: "blinkoo-feed",
        },
      ],
    }),
  ],
});
```

Create the `Feed` react element (you can copy the file in this repository) and use it where you want to show the feed as in the following code:

```html
<Feed
    apiKey="YOUR_API_KEY"
    title="Example Title"
/>
```
