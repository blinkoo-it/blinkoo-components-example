"use client";
import { BlinkooFeedArgs } from "@blinkoo/components/feed-args";
import { useEffect, useState } from "react";

export default function Feed(params: BlinkooFeedArgs) {
  const [scriptAdded, setScriptAddded] = useState<boolean>(false);

  useEffect(() => {
    if (!scriptAdded) {
      const script = document.createElement("script");
      script.src = "blinkoo-feed/blinkoo-feed.js";
      script.type = "module";
      document.getElementsByTagName("body")[0].appendChild(script);
      setScriptAddded(true);
    }
  });

  if (!scriptAdded) return <></>;
  return (
    <blinkoo-feed
      assetsPath={"blinkoo-feed/"}
      title={params.title}
      filters={params.filters}
      playlistFilter={params.playlistFilter}
      apiKey={params.apiKey}
      aspectRatio={params.aspectRatio}
    ></blinkoo-feed>
  );
}
