"use client";
import {
  BlinkooFeedArgs,
  BlinkooFeedConfiguration,
  BlinkooWebUtils,
} from "@blinkoo/components";
import "@blinkoo/components";

type FeedArgs = BlinkooFeedArgs & { configurations?: BlinkooFeedConfiguration };
export default function Feed(params: FeedArgs) {
  return (
    <blinkoo-feed
      title={params.title}
      filters={params.filters}
      playlistFilter={params.playlistFilter}
      aspectRatio={params.aspectRatio}
      feedPosition={params.feedPosition}
      configurations={
        params.configurations
          ? BlinkooWebUtils.encodeObject(params.configurations)
          : undefined
      }
    ></blinkoo-feed>
  );
}
