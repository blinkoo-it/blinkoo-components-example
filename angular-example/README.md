# Blinkoo Components Angular Example

The steps to add the blinkoo feed dependency are:

- Add `@blinkoo/components` as a dependency in `package.json`

```json
"dependencies": {
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

- Create a component wrapper for blinkoo-components (you can copy the ones in this repository in `src/app/components`)

- Now you can import your desired wrapper component where you want to show the feed as in the following code:

```html
<app-feed filter="filter1,filter2" title="Example feed" assetsPath="./blinkoo-assets"></app-feed>
```

For more information on components parameters, check out our [documentation](https://documentation.blinkoo.com)
