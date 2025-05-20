"use client";
import { forwardRef, useImperativeHandle, useRef } from "react";

type FeedArgs = Omit<BlinkooFeedAttributes, keyof HTMLElement> & {
  title?: string;
};

export interface FeedRef {
  togglePlay: () => void;
  next: () => void;
  previous: () => void;
}

const Feed = forwardRef<FeedRef, FeedArgs>((params, ref) => {
  const feedRef = useRef<BlinkooFeedElement>(null);

  useImperativeHandle(ref, () => ({
    togglePlay: () => feedRef.current?.togglePlay(),
    next: () => feedRef.current?.next(),
    previous: () => feedRef.current?.previous(),
  }));

  return (
    <blinkoo-feed
      ref={feedRef}
      environment={params.environment}
      custom-base-url={params["custom-base-url"]}
      assets-path={params["assets-path"]}
      external-user-id={params["external-user-id"]}
      utm-source={params["utm-source"]}
      utm-campaign={params["utm-campaign"]}
      referrer={params.referrer}
      component-id={params["component-id"]}
      title={params.title}
      filters={params.filters}
      playlist={params.playlist}
      position={params.position}
      autoplay={params.autoplay}
      muted={params.muted}
      show-creator={params["show-creator"]}
    ></blinkoo-feed>
  );
});

Feed.displayName = "Feed";
export default Feed;
