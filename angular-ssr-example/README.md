# Blinkoo Components Angular SSR Example

The steps to add the blinkoo feed dependency are:

- Add `@blinkoo/components` as a dev-dependency in `package.json`

```json
"dev-dependencies": {
    "@blinkoo/components": "^2.0.0",
}
```

- In `angular.json`, add to the assets list the following dependencies of the feed

```json
...
"options": {
    "assets": [
        {
            "glob": "**/*",
            "input": "./node_modules/@blinkoo/components/dist/assets",
            "output": "/blinkoo-assets"
        }
    ]
}
```




- Create a component wrapper for blinkoo-components (you can copy the ones in this repository un `src/app/components`). Remember to also copy the `BaseComponent` which implements the SSR logic to render the component only in the browser (similarly on how is imported the library in `app.component.ts`)
<br><br>
_NB_: you can add to the DOM any component only after the library initialization is completed. Also, importing any component or utility code on the server side will break the code, so they must be imported only on browser.
<br>
The `BaseComponent` offer a `renderReady` property you can use to check if the library is correctly initialized.

- Now you can import your desired wrapper component where you want to show it. For example to you can use the feed as in the following code:

```html
<app-feed filter="filter1,filter2" title="Example feed"></app-feed>
```

For more information on components parameters, check out our [documentation](https://documentation.blinkoo.com)