# Blinkoo Components NextJS Example

The steps to add the blinkoo feed dependency are:

- Add `@blinkoo/components` as a dev-dependency in `package.json`

```json
"dev-dependencies": {
    "@blinkoo/components": "^2.0.0",
}
```

- Change `package.json` launch commands to copy library dependency files in `public` folder:

```json
"scripts": {
    "copyBlinkooAssets": "rm -r public/blinkoo-assets 2> /dev/null && cp -r node_modules/@blinkoo/components/assets public/blinkoo-assets",
    "dev": "npm run copyBlinkooAssets && next dev",
    "build": "npm run copyBlinkooAssets && next build",
}
```

- Add the components declaration in `global.d.ts` file

```typescript
declare namespace JSX {
  interface IntrinsicElements {
    "blinkoo-feed": any;
    "blinkoo-single-video": any;
    "blinkoo-insight": any;
  }
}
```

- Create a component wrapper for blinkoo-components (you can copy the ones in this repository in `src/app/components`). In these examples is already handled the library load only on the browser since the UI library can't be loaded on the server side.

- Use any react component inside your code, like:

```tsx
<Feed ref={feedRef} assets-path="blinkoo-assets/" title="Amazing place"></Feed>
```

For more information on components parameters, check out our [documentation](https://documentation.blinkoo.com)
