# Blinkoo Components React + Vite Example

The steps to add the blinkoo feed dependency are:

- Add `@blinkoo/components` as a dependency in `package.json`

```json
"dependencies": {
    "@blinkoo/components": "^2.0.0",
}
```

- Create a component wrapper for blinkoo-components (you can copy the ones in this repository in `src/components`)

- Use any react component inside your code, like:

```tsx
<Feed ref={feedRef} title="Amazing place"></Feed>
```

For more information on components parameters, check out our [documentation](https://documentation.blinkoo.com)
