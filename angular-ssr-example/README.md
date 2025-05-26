# Blinkoo Components Angular SSR Example

The steps to add the blinkoo feed dependency are:

- Add `@blinkoo/components` as a dependency in `package.json`

```json
"dependencies": {
    "@blinkoo/components": "^2.0.0",
}
```

- Create a component wrapper for blinkoo-components (you can copy the ones in this repository un `src/app/components`).

  **Remember to also copy the `BaseComponent` which implements the SSR logic to render the component only in the browser.** The `BaseComponent` offer a `renderReady` property you can use to check if the library is correctly initialized.

- Now you can import your desired wrapper component where you want to show it. For example to you can use the feed as in the following code:

```html
<app-feed filters="filter1,filter2" title="Example feed"></app-feed>
```

For more information on components parameters, check out our [documentation](https://documentation.blinkoo.com)
