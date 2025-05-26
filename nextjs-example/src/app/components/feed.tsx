"use client";
import {
  BlinkooFeedAttributes,
  BlinkooFeedElement,
  FeedScrollEvent,
} from "@blinkoo/components";
import { forwardRef, useImperativeHandle, useRef } from "react";
import BlinkooComponentWrapper from "./blinkoo-component-wrapper";

type FeedArgs = Omit<BlinkooFeedAttributes, keyof HTMLElement> & {
  title?: string;
  onFeedScroll?: (event: CustomEvent<FeedScrollEvent>) => void;
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

  const onComponentReady = () => {
    if (params.onFeedScroll) {
      feedRef.current?.addEventListener("feedScroll", params.onFeedScroll);
    }
  };

  return (
    <BlinkooComponentWrapper onReady={onComponentReady}>
      <blinkoo-feed
        ref={feedRef}
        environment={params.environment}
        custom-base-url={params["custom-base-url"]}
        external-customer-id={params["external-customer-id"]}
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
    </BlinkooComponentWrapper>
  );
});

Feed.displayName = "Feed";
export default Feed;
