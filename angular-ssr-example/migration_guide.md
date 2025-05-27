# Migration Guide

## From 1.0.1 to 2.0.0

- Change the `@blinkoo/components` dependency from a dev dependency to a normal one and bump version number:

```diff
  "dependencies": {
-    "@blinkoo/components": "^1.1.0",
+    "@blinkoo/components": "^2.0.0",
}
```

- Remove the assets from `angular.json` since they are not required anymore

```diff
"options": {
    "assets": [
        ...
--        {
--            "glob": "**/*",
--            "input": "./node_modules/@blinkoo/components/dist/assets",
--            "output": "/assets"
--        },
--        {
--            "glob": "**/*",
--            "input": "./node_modules/@blinkoo/components/dist/canvaskit",
--            "output": "/canvaskit"
--        },
    ]
}
```

- Remove the component initialization since it's not required

```diff
- type BlinkooModule = typeof import("@blinkoo/components");

export class AppComponent implements OnInit {
-  isInitialized = false;

-  constructor(@Inject(PLATFORM_ID) private -platformId: Object) {}
-
-  ngOnInit(): void {
-    if (!isPlatformBrowser(this.platformId)) -    return;
-    import("@blinkoo/components").then-((blinkooModule) => {
-      this.initBlinkooLibrary(blinkooModule);
-    });
-  }

-  async initBlinkooLibrary(blinkooModule: BlinkooModule) {
-    await blinkooModule.BlinkooWebInit.init({
-      customApiBasePath: "http://localhost:4000", // only for development, -remove parameter in production
-    });
-    this.isInitialized = true;
-  }
}
```

- Now you can use the components as before.

**Please, for all the new parameters of the components, check the [full documentation](https://documentation.blinkoo.com)**

### Differences in components parameters

The main differences in the components are:

- The `textScaler` param is not available anymore. You can define the dimensions of the fonts of all the components with the css variable `blinkoo-font-size`
- The feed `playlistFilter` parameter now is called `playlist`
- The `apiKey` parameter is now removed due to the new trusted domains authorization system. Due to this change that improve the security of the components (no call are sent with the API KEY from the browser), for local development is required to install and use a local proxy that authorize requests from a `localhost` domain. We provide a simple docker image to help you locally test your integration of the blinkoo components. To know how to install it and how to use it, please check the [full documentation](https://documentation.blinkoo.com).
