# Blinkoo Components NextJS Example

The steps to add the blinkoo feed dependency are:

- Add `@blinkoo/components` as a dependency in `package.json`

```json
"dependencies": {
    "@blinkoo/components": "^2.0.0",
}
```

- Add the library components declaration in `global.d.ts` file

```typescript
declare namespace JSX {
  interface IntrinsicElements {
    "blinkoo-feed": any;
    "blinkoo-single-video": any;
    "blinkoo-insight": any;
  }
}
```

- Create a component wrapper for blinkoo-components (you can copy the ones in this repository in `src/app/components`). In these examples is already handled the library load only on the browser since the UI library can't be loaded on the server side. **Remember to copy the `blinkoo-component-wrapper` component to correctly handle the library loading in SSR framework**

- Use any react component inside your code, like:

```tsx
<Feed ref={feedRef} title="Amazing place"></Feed>
```

For more information on components parameters, check out our [documentation](https://documentation.blinkoo.com)
