# Blinkoo Feed React + Vite Example

The steps to add the blinkoo feed dependency are:

- Add `@blinkoo/components` as a dev-dependency in `package.json` because you have to copy the library in build phase as follows
```json
"dev-dependencies": {
    "@blinkoo/components": "^1.0.0",
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

  useEffect(() => {
    initBlinkooComponents();
  }, []);

  let initBlinkooComponents = async () => {
    await BlinkooWebInit.init({
      apiKey: "API_KEY",
      assetsPath: "blinkoo-assets/"
    });
    setIsInitialized(true);
  };

  if (!isInitialized) return <></>;

  return (
    ...
  );
}
```
*NB*: you can add to the DOM any component only after the library initialization is completed

- Create the `Feed` or `SingleVideo` react element (you can copy the file in this repository)

- Use any component that you want and as in the following code:

```html
<Feed
    title="Example Title"
/>
```
