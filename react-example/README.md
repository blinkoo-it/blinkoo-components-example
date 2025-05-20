# Blinkoo Components React + Vite Example

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
    "dev": "cp -rf node_modules/@blinkoo/components/assets public/blinkoo-assets & vite",
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
          src: "node_modules/@blinkoo/components/assets",
          dest: "blinkoo-assets",
        },
      ],
    }),
  ],
});
```

- Create a component wrapper for blinkoo-components (you can copy the ones in this repository in `src/components`)

- Use any react component inside your code, like:

```tsx
<Feed ref={feedRef} assets-path="blinkoo-assets/" title="Amazing place"></Feed>
```

For more information on components parameters, check out our [documentation](https://documentation.blinkoo.com)
