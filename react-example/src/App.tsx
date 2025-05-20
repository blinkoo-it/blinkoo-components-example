import { useRef, useState } from "react";
import Feed, { FeedRef } from "./components/feed";
import "@blinkoo/components";
import SingleVideo, { SingleVideoRef } from "./components/single-video";
import Insight, { InsightRef } from "./components/insight";

function App() {
  const [shownItem, setShownItem] = useState<number>(1);
  const [showCreator, setShowCreator] = useState<string>(false.toString());
  const feedRef = useRef<FeedRef>(null);
  const singleVideoRef = useRef<SingleVideoRef>(null);
  const insightRef = useRef<InsightRef>(null);
  return (
    <>
      <div style={{ height: "600px" }}>
        {shownItem == 1 ? (
          <Feed
            ref={feedRef}
            assets-path="blinkoo-assets/"
            custom-base-url="http://localhost:4000"
            title="Amazing places"
            show-creator={showCreator}
          ></Feed>
        ) : (
          <SingleVideo
            ref={singleVideoRef}
            assets-path="blinkoo-assets/"
            custom-base-url="http://localhost:4000"
            post-id="0af11de1-5061-4b20-a292-1269ed1b0a0e"
            show-creator={showCreator}
          />
        )}
      </div>
      <Insight
        ref={insightRef}
        assets-path="blinkoo-assets/"
        custom-base-url="http://localhost:4000"
      ></Insight>

      <button onClick={() => setShownItem(1)}>Show feed</button>
      <button onClick={() => setShownItem(2)}>Show single video</button>
      <button
        onClick={() =>
          setShowCreator(showCreator === "false" ? "true" : "false")
        }
      >
        Toggle creator
      </button>
      <button onClick={() => feedRef.current?.next()}>Next</button>
      <button onClick={() => feedRef.current?.previous()}>Previous</button>
      <button onClick={() => feedRef.current?.togglePlay()}>Toggle play</button>
      <button onClick={() => singleVideoRef.current?.togglePlay()}>
        Single video Toggle play
      </button>
      <button
        onClick={() =>
          insightRef.current?.sendCustomEvent("prova", {
            a: "val a",
            b: "val b",
          })
        }
      >
        Event
      </button>
    </>
  );
}

export default App;
