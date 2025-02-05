"use client";
import { BlinkooFeedArgs } from "@blinkoo/components";
import "@blinkoo/components";

export default function Feed(params: BlinkooFeedArgs) {
  return (
    <blinkoo-feed
      title={params.title}
      filters={params.filters}
      playlistFilter={params.playlistFilter}
      aspectRatio={params.aspectRatio}
      feedPosition={params.feedPosition}
    ></blinkoo-feed>
  );
}
