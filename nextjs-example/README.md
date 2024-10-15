# Blinkoo Feed NextJS Example

The steps to add the blinkoo feed dependency are:

- Add `@blinkoo/components` as a dev dependency in `package.json`
```json
"dev-dependencies": {
    "@blinkoo/components": "0.1.22"
}
```
- Since NextJS doesn't allow to configure Terser options, we need to disable code minification to let the feed work. So, in `next.config.js` add to the returned configuration the following property:
```json
swcMinify: false
```
Change `package.json` launch commands to copy library dependency files in `public` folder:
```json
"scripts": {
    "copyBlinkooFeed": "cp -r node_modules/@blinkoo/components/dist/blinkoo-feed public",
    "dev": "npm run copyBlinkooFeed && next dev",
    "build": "npm run copyBlinkooFeed && next build",
    "start": "next start",
    "lint": "next lint"
}
```
Create the `Feed` react element (you can copy the file in this repository) and set `assetsPath` param to the custom folder where you copied the dependency files:
```ts
"assetsPath"={"blinkoo-feed/"}
```

Now you can import your `Feed` element where you want to show the feed as in the following code:

```html
<Feed
    apiKey="YOUR_API_KEY"
    title="Example Title"
/>
```
