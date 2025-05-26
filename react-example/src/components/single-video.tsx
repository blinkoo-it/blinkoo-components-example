"use client";

import {
  BlinkooSingleVideoAttributes,
  BlinkooSingleVideoElement,
} from "@blinkoo/components";
import { forwardRef, useImperativeHandle, useRef } from "react";

type SingleVideoArgs = Omit<BlinkooSingleVideoAttributes, keyof HTMLElement>;

export interface SingleVideoRef {
  togglePlay: () => void;
}

const SingleVideo = forwardRef<SingleVideoRef, SingleVideoArgs>(
  (params, ref) => {
    const singleVideoRef = useRef<BlinkooSingleVideoElement>(null);

    useImperativeHandle(ref, () => ({
      togglePlay: () => singleVideoRef.current?.togglePlay(),
    }));

    return (
      <blinkoo-single-video
        ref={singleVideoRef}
        environment={params.environment}
        custom-base-url={params["custom-base-url"]}
        external-customer-id={params["external-customer-id"]}
        utm-source={params["utm-source"]}
        utm-campaign={params["utm-campaign"]}
        referrer={params.referrer}
        component-id={params["component-id"]}
        post-id={params["post-id"]}
        autoplay={params.autoplay}
        muted={params.muted}
        show-creator={params["show-creator"]}
      ></blinkoo-single-video>
    );
  }
);

SingleVideo.displayName = "SingleVideo";
export default SingleVideo;
