# Blinkoo Feed Angular SSR Example

The steps to add the blinkoo feed dependency are:

- Add `@blinkoo/components` as dependency in `package.json`
```json
"@blinkoo/components": "0.1.22"
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
