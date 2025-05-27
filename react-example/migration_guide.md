# Migration Guide

## From 1.0.1 to 2.0.0

- Change the `@blinkoo/components` dependency from a dev dependency to a normal one and bump version number:

```diff
  "dependencies": {
-    "@blinkoo/components": "^1.1.0",
+    "@blinkoo/components": "^2.0.0",
}
```

- The `vite-plugin-static-copy` can be completely removed since we don't need to copy the assets anymore, so we can udpate the `package.json` and `vite.config.ts` files

```diff
"dev-dependencies": {
-  "vite-plugin-static-copy": "^1.0.6"
}
```

```diff
export default defineConfig({
  plugins: [
    react(),
-    viteStaticCopy({
-      targets: [
-        {
-          src: "node_modules/@blinkoo/components/dist/assets",
-          dest: "blinkoo-assets",
-        },
-        {
-          src: "node_modules/@blinkoo/components/dist/canvaskit",
-          dest: "blinkoo-assets",
-        },
-      ],
-    }),
  ],
});
```

- Remove the library intialization since is not required anymore

```diff
function App() {
- const [isInitialized, setIsInitialized] = useState<boolean>(false);
-  const initBlinkooComponents = async () => {
-    await BlinkooWebInit.init({
-      assetsPath: "blinkoo-assets/",
-      customApiBasePath: "http://localhost:4000", // only for development, remove parameter in production
-    });
-    setIsInitialized(true);
-  };
-
-  useEffect(() => {
-    initBlinkooComponents();
-  }, []);
-
-  if (!isInitialized) return <></>;

  return (
    ...
  );
}
```

- Now you can use the components as before.

**Please, for all the new parameters of the components, check the [full documentation](https://documentation.blinkoo.com)**

### Differences in components parameters

The main differences in the components are:

- The `textScaler` param is not available anymore. You can define the dimensions of the fonts of all the components with the css variable `blinkoo-font-size`
- The feed `playlistFilter` parameter now is called `playlist`
- The `apiKey` parameter is now removed due to the new trusted domains authorization system. Due to this change that improve the security of the components (no call are sent with the API KEY from the browser), for local development is required to install and use a local proxy that authorize requests from a `localhost` domain. We provide a simple docker image to help you locally test your integration of the blinkoo components. To know how to install it and how to use it, please check the [full documentation](https://documentation.blinkoo.com).
