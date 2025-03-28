# Blinkoo Components React + Vite Example

The steps to add the blinkoo feed dependency are:

- Add `@blinkoo/components` as a dev-dependency in `package.json` because you have to copy the library in build phase as follows

```json
"dev-dependencies": {
    "@blinkoo/components": "^1.1.0",
}
```

- Add `vite-plugin-static-copy` as a dev dependency in `package.json`

```json
"dev-dependencies": {
  "vite-plugin-static-copy": "^1.0.6"
}
```

- Set the `vite-plugin-static-copy` to copy library dependency files while building in `vite.config.ts`:

```ts
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/@blinkoo/components/dist/assets",
          dest: "blinkoo-assets",
        },
        {
          src: "node_modules/@blinkoo/components/dist/canvaskit",
          dest: "blinkoo-assets",
        },
      ],
    }),
  ],
});
```

- Initialize the library in the `App.tsx` adding the following code:

```typescript
function App() {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [shownItem, setShownItem] = useState<number>(1);

  const initBlinkooComponents = async () => {
    await BlinkooWebInit.init({
      assetsPath: "blinkoo-assets/",
      customApiBasePath: "http://localhost:4000", // only for development, remove parameter in production
    });
    setIsInitialized(true);
  };

  useEffect(() => {
    initBlinkooComponents();
  }, []);

  if (!isInitialized) return <></>;

  return (
    ...
  );
}
```

_NB_: you can add to the DOM any component only after the library initialization is completed

- Create the `Feed` or `SingleVideo` react element (you can copy the file in this repository)

- Now you can use any component that you want
