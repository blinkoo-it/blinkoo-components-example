"use client";
import { BlinkooSingleVideoArgs } from "@blinkoo/components";

export default function SingleVideo(params: BlinkooSingleVideoArgs) {
  return (
    <blinkoo-single-video
      title={params.title}
      aspectRatio={params.aspectRatio}
      postId={params.postId}
    ></blinkoo-single-video>
  );
}
