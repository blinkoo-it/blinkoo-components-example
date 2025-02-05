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

- Initialize the library in the `app.components.ts` adding the following code:
```typescript
export class AppComponent implements OnInit {
  isInitialized = false;

  ngOnInit(): void {
    this.initBlinkooLibrary();
  }

  async initBlinkooLibrary() {
    await BlinkooWebInit.init({
      apiKey: 'YOUR_API_KEY',
    });
    this.isInitialized = true;
  }
}
```
*NB*: you can add to the DOM any component only after the library initialization is completed

- Create the `FeedComponent` or `SingleVideoComponent` as made in this repository (you can copy it to your project)

- Now you can import your `FeedComponent` or any other component where you want to show the feed as in the following code:

```html
<app-feed filter="filter1,filter2" title="Example feed"></app-feed>
```
