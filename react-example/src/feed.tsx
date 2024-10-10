"use client";
import { BlinkooFeedArgs } from "@blinkoo/components/feed-args";
import "@blinkoo/components";

export default function Feed(params: BlinkooFeedArgs) {
  return (
    //@ts-ignore
    <blinkoo-feed
      title={params.title}
      filters={params.filters}
      playlistFilter={params.playlistFilter}
      apiKey={params.apiKey}
      aspectRatio={params.aspectRatio}
      assetsPath={params.assetsPath}
      //@ts-ignore
    ></blinkoo-feed>
  );
}
