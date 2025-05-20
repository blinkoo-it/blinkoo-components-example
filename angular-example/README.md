# Blinkoo Components Angular Example

The steps to add the blinkoo feed dependency are:

- Add `@blinkoo/components` as a dev-dependency in `package.json` because you have to copy the library in build phase as follows

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

- Create a component wrapper for blinkoo-components (like the one in this repository un `src/app/components`)

- Now you can import your desired wrapper component where you want to show the feed as in the following code:

```html
<app-feed filter="filter1,filter2" title="Example feed" assetsPath="./blinkoo-assets"></app-feed>
```

For more information on components parameters, check out our [documentation](https://documentation.blinkoo.com)
