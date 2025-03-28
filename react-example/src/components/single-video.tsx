"use client";
import {
  BlinkooFeedConfiguration,
  BlinkooSingleVideoArgs,
  BlinkooWebUtils,
} from "@blinkoo/components";
import "@blinkoo/components";

type SingleVideoArgs = BlinkooSingleVideoArgs & {
  configurations?: BlinkooFeedConfiguration;
};
export default function SingleVideo(params: SingleVideoArgs) {
  return (
    <blinkoo-single-video
      title={params.title}
      aspectRatio={params.aspectRatio}
      postId={params.postId}
      configurations={
        params.configurations
          ? BlinkooWebUtils.encodeObject(params.configurations)
          : undefined
      }
    ></blinkoo-single-video>
  );
}
