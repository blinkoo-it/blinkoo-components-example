# Blinkoo Feed Angular SSR Example

The steps to add the blinkoo feed dependency are:

- Add `@blinkoo/components` as a dev-dependency in `package.json` because you have to copy the library in build phase as follows
```json
"dev-dependencies": {
    "@blinkoo/components": "^0.2.2",
}
```
- In `angular.json`, add to the assets list the following dependencies of the feed
```json
...
"options": {
    "assets": [
        ...
        {
            "glob": "**/*",
            "input": "./node_modules/@blinkoo/components/dist/blinkoo-feed/assets",
            "output": "/assets"
        },
        {
            "glob": "**/*",
            "input": "./node_modules/@blinkoo/components/dist/blinkoo-feed/canvaskit",
            "output": "/canvaskit"
        },
    ]
}
```
- Created the `FeedComponent` as made in this repository (you can copy it to your project)

Now you can import your `FeedComponent` where you want to show the feed as in the following code:

```html
<app-feed filter="filter1,filter2" title="Example feed"></app-feed>
```
