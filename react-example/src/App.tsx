import { useEffect, useState } from "react";
import Feed from "./components/feed";
import "@blinkoo/components";
import { BlinkooWebInit } from "@blinkoo/components";
import SingleVideo from "./components/single-video";

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
    <>
      <div style={{ height: "600px" }}>
        {
          shownItem == 1 ? <Feed
            title="Explore"
            aspectRatio={0.5625}
          ></Feed> : <SingleVideo postId="POST_ID" title="single video" aspectRatio={1} />
        }
      </div>
      <button onClick={() => setShownItem(1)}>Show feed</button>
      <button onClick={() => setShownItem(2)}>Show single video</button>
    </>
  );
}

export default App;
