# Migration Guide

## From 1.0.1 to 2.0.0

- Change the `@blinkoo/components` dependency from a dev dependency to a normal one and bump version number:

```diff
  "dependencies": {
-    "@blinkoo/components": "^1.1.0",
+    "@blinkoo/components": "^2.0.0",
}
```

- Remove the assets copy from `package.json` scripts since they're not required anymore:

```diff
"scripts": {
-    "copyBlinkooAssets": "rm -r public/blinkoo-assets 2> /dev/null && cp -r node_modules/@blinkoo/components/dist public/blinkoo-assets",
-    "dev": "npm run copyBlinkooAssets && next dev",
+    "dev": "next dev",
-    "build": "npm run copyBlinkooAssets && next build",
+    "build": "next build",
    "start": "next start",
    "lint": "next lint"
}
```

- Add to the declaration file `global.d.ts` the new component:

```diff
declare namespace JSX {
  interface IntrinsicElements {
    "blinkoo-feed": unknown;
    "blinkoo-single-video": unknown;
+    "blinkoo-insight": unknown;
  }
}
```

- Remove the library initialization since is not required anymore and use the `BlinkooComponentWrapper` to correctly show the component only on the browser and not during the SSR (please note that the wrapper is already implemented if you copy the components of this repository)

```diff
"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
+ import Feed, { FeedRef } from "./components/feed";
+ import SingleVideo, { SingleVideoRef } from "./components/single-video";
+import BlinkooComponentWrapper from "./blinkoo-component-wrapper";


- type BlinkooModule = typeof import("@blinkoo/components");

- const Feed = dynamic(() => import("./components/feed"), { ssr: false });
- const SingleVideo = dynamic(() => import("./components/single-video"), {
-   ssr: false,
- });
export default function Home() {
-  const assetsPath = "./blinkoo-assets/";
-  const [isInitialized, setIsInitialized] = useState<boolean>(false);
-  const [blinkooModule, setBlinkooModule] = useState<BlinkooModule>();

-  useEffect(() => {
-    // React > 18 in development mode runs this -useEffect twice
-    // To avoid double blinkoo module -initialization, we check if the module
-    // already exists
-    if (blinkooModule) return;
-
-    import("@blinkoo/components").then-((blinkooModule) => {
-      setBlinkooModule(blinkooModule);
-    });
-  }, []);

-  useEffect(() => {
-    if (!blinkooModule || isInitialized) return;
-
-    const initLib = async () => {
-      await blinkooModule.BlinkooWebInit.init({
-        assetsPath: assetsPath,
-        canvasKitJs: (window as any)?.-CanvasKitInit,
-        customApiBasePath: "http://-localhost:4000", // only for development, -remove parameter in production
-      });
-      setIsInitialized(true);
-    };
-
-    const script = document.createElement-("script");
-    script.type = "module";
-    script.src = blinkooModule.BlinkooWebInit.-getCanvaskitJsPath(assetsPath);
-    script.onload = () => initLib();
-    document.body.appendChild(script);
-  }, [blinkooModule]);

-  if (!blinkooModule || !isInitialized) return null;
  return (
+    <BlinkooComponentWrapper>
      <blinkoo-feed
          ref={feedRef}
          environment={params.environment}
          custom-base-url={params  ["custom-base-url"]}
          external-customer-id={params  ["external-customer-id"]}
          utm-source={params["utm-source"]}
          utm-campaign={params["utm-campaign"]}
          referrer={params.referrer}
          component-id={params["component-id"]}
          title={params.title}
          filters={params.filters}
          playlist={params.playlist}
          position={params.position}
          autoplay={params.autoplay}
          muted={params.muted}
          show-creator={params["show-creator"]}
        ></blinkoo-feed>
+    </BlinkooComponentWrapper>
  );
}
```

- Now you can use the components as before.

**Please, for all the new parameters of the components, check the [full documentation](https://documentation.blinkoo.com)**

### Differences in components parameters

The main differences in the component are:

- The `textScaler` param is not available anymore. You can define the dimensions of the fonts of all the components with the css variable `blinkoo-font-size`
- The feed `playlistFilter` parameter now is called `playlist`
- The `apiKey` parameter is now removed due to the new trusted domains authorization system. Due to this change that improve the security of the components (no call are sent with the API KEY from the browser), for local development is required to install and use a local proxy that authorize requests from a `localhost` domain. We provide a simple docker image to help you locally test your integration of the blinkoo components. To know how to install it and how to use it, please check the [full documentation](https://documentation.blinkoo.com).
