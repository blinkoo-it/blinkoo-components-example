"use client";
import { BlinkooFeedArgs, BlinkooFeedConfiguration } from "@blinkoo/components";
import { useEffect, useState } from "react";

type BlinkooWebUtils = typeof import("@blinkoo/components").BlinkooWebUtils;

type FeedArgs = BlinkooFeedArgs & { configurations?: BlinkooFeedConfiguration };
let blinkooWebUtils: BlinkooWebUtils | undefined = undefined;

export default function Feed(params: FeedArgs) {
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    // React > 18 in development mode runs this useEffect twice
    // To avoid double blinkoo module initialization, we check if the module
    // already exists
    if (init) return;

    import("@blinkoo/components").then((blinkooModule) => {
      blinkooWebUtils = blinkooModule.BlinkooWebUtils;
      setInit(true);
    });
  }, []);

  return (
    <blinkoo-feed
      title={params.title}
      filters={params.filters}
      playlistFilter={params.playlistFilter}
      aspectRatio={params.aspectRatio}
      configurations={
        init && params.configurations
          ? blinkooWebUtils?.encodeObject(params.configurations ?? "")
          : undefined
      }
    ></blinkoo-feed>
  );
}
