# Blinkoo Feed Angular Example

The steps to add the blinkoo feed dependency are:

- Add `@blinkoo/components` as a dev-dependency in `package.json` because you have to copy the library in build phase as follows
```json
"dev-dependencies": {
    "@blinkoo/components": "^1.0.0",
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
            "input": "./node_modules/@blinkoo/components/dist/assets",
            "output": "/assets"
        },
        {
            "glob": "**/*",
            "input": "./node_modules/@blinkoo/components/dist/canvaskit",
            "output": "/canvaskit"
        },
    ]
}
```
- Created the `FeedComponent` or `SingleVideoComponent` as made in this repository (you can copy it to your project)

Now you can import your component where you want to show the feed as in the following code:

```html
<app-feed filter="filter1,filter2" title="Example title" [aspectRatio]="0.5625"></app-feed>
```
