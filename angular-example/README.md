# Blinkoo Components Angular Example

The steps to add the blinkoo feed dependency are:

- Add `@blinkoo/components` as a dependency in `package.json`

```json
"dependencies": {
    "@blinkoo/components": "^2.0.0",
}
```

- Create a component wrapper for blinkoo-components (you can copy the ones in this repository in `src/app/components`)

- Now you can import your desired wrapper component where you want to show the feed as in the following code:

```html
<app-feed filters="filter1,filter2" title="Example feed"></app-feed>
```

For more information on components parameters, check out our [documentation](https://documentation.blinkoo.com)
