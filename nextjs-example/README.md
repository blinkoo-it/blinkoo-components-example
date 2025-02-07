# Blinkoo Feed NextJS Example

The steps to add the blinkoo feed dependency are:

- Add `@blinkoo/components` as a dev-dependency in `package.json`
```json
"dev-dependencies": {
    "@blinkoo/components": "^1.0.0",
}
```

- Change `package.json` launch commands to copy library dependency files in `public` folder:
```json
"scripts": {
    "copyBlinkooAssets": "rm -r public/blinkoo-assets 2> /dev/null && cp -r node_modules/@blinkoo/components/dist public/blinkoo-assets",
    "dev": "npm run copyBlinkooAssets && next dev",
    "build": "npm run copyBlinkooAssets && next build",
    "start": "next start",
    "lint": "next lint"
}
```

- Add the components declaration in `global.d.ts` file
```typescript
declare namespace JSX {
  interface IntrinsicElements {
    "blinkoo-feed": any;
    "blinkoo-single-video": any;
  }
}
```

- Create the `Feed` react element (you can copy the file in this repository) and set `assetsPath` param to the custom folder where you copied the dependency files:
```ts
"assetsPath"={"blinkoo-assets/"}
```
- Initialize the blinkoo components library. Since NextJS supports SSR, we need to load the blinkoo component library only on the browser and, once the library is loaded, we can add the components to the DOM.
Also, since NextJS cannot permit to dinamically load a javascript module, we need to manually load `canvaskit` and then pass it to the library initialization as in the following example

```typescript
export default function Home() {
  const assetsPath = "./blinkoo-assets/";
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [blinkooModule, setBlinkooModule] = useState<BlinkooModule>();

  useEffect(() => {
    // React > 18 in development mode runs this useEffect twice
    // To avoid double blinkoo module initialization, we check if the module
    // already exists
    if (blinkooModule) return;

    import("@blinkoo/components").then((blinkooModule) => {
      setBlinkooModule(blinkooModule);
    });
  }, []);

  useEffect(() => {
    if (!blinkooModule || isInitialized) return;

    const initLib = async () => {
      await blinkooModule.BlinkooWebInit.init({
        apiKey: "YOUR_API_KEY",
        assetsPath: assetsPath,
        canvasKitJs: (window as any)?.CanvasKitInit
      });
      setIsInitialized(true);
    };

    const script = document.createElement('script');
    script.type = 'module';
    script.src = blinkooModule.BlinkooWebInit.getCanvaskitJsPath(assetsPath);
    script.onload = () => initLib();
    document.body.appendChild(script);
  }, [blinkooModule]);

  if (!blinkooModule || !isInitialized) return null;
  return (
    <div style={{ height: "600px" }}>
        <Feed
          title="Next Example" aspectRatio={0.5625}
        /> : <SingleVideo title="Single video" postId="POST_ID" aspectRatio={1} />
    </div>
  );
}
```

- Now you can import your `Feed` element where you want to show the feed as in the following code:

```html
<Feed
    apiKey="YOUR_API_KEY"
    title="Example Title"
/>
```
