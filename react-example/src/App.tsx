import { useEffect, useState } from "react";
import Feed from "./components/feed";
import "@blinkoo/components";
import { BlinkooFeedConfiguration, BlinkooWebInit } from "@blinkoo/components";
import SingleVideo from "./components/single-video";

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

  const configurations: BlinkooFeedConfiguration = {
    isCreatorEnabled: true,
  };

  return (
    <>
      <div style={{ height: "600px" }}>
        {shownItem == 1 ? (
          <Feed
            title="Explore"
            aspectRatio={0.5625}
            configurations={configurations}
          ></Feed>
        ) : (
          <SingleVideo postId="POST_ID" title="single video" aspectRatio={1} />
        )}
      </div>
      <button onClick={() => setShownItem(1)}>Show feed</button>
      <button onClick={() => setShownItem(2)}>Show single video</button>
    </>
  );
}

export default App;
