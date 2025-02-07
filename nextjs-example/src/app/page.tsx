"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

type BlinkooModule = typeof import("@blinkoo/components");

const Feed = dynamic(() => import("./components/feed"), { ssr: false });
const SingleVideo = dynamic(() => import("./components/single-video"), {
  ssr: false
});

export default function Home() {
  const assetsPath = "./blinkoo-assets/";
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [shownId, setShownId] = useState<number>(1);
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
    <>
      <div style={{ height: "600px" }}>
        {shownId == 1 ?
          <Feed
            title="Next Example" aspectRatio={0.5625}
          /> : <SingleVideo title="Single video" postId="POST_ID" aspectRatio={1} />
        }
      </div>
      <input type="button" onClick={() => setShownId(1)} value="Show feed" />
      <input type="button" onClick={() => setShownId(2)} value="Show video" />
    </>
  );
}
