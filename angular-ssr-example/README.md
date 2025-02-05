# Blinkoo Feed Angular SSR Example

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
- Initialize the library. Since it could not be loaded during the server-side rendering stage, we need to import the library only on the browser. To do so, in the `app.components.ts` add the following code:
```typescript
type BlinkooModule = typeof import("@blinkoo/components");

export class AppComponent implements OnInit {
    isInitialized = false;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    import("@blinkoo/components").then((blinkooModule) => {
        this.initBlinkooLibrary(blinkooModule);
    });
    }

    async initBlinkooLibrary(blinkooModule: BlinkooModule) {
    await blinkooModule.BlinkooWebInit.init({
        apiKey: 'YOUR_API_KEY',
    });
    this.isInitialized = true;
    }
}
```
- Create the `FeedComponent` or `SingleVideoComponent` as made in this repository (you can copy it to your project). Remember to also copy the `BaseComponent` which implements the SSR logic to render the component only in the browser (similarly on how is imported the library in `app.component.ts`).

- Now you can import your `FeedComponent` or any other component where you want to show the feed as in the following code:

```html
<app-feed filter="filter1,filter2" title="Example feed"></app-feed>
```
