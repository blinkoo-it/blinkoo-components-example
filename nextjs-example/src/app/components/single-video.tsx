"use client";
import {
  BlinkooFeedConfiguration,
  BlinkooSingleVideoArgs,
} from "@blinkoo/components";
import { useEffect, useState } from "react";

type BlinkooWebUtils = typeof import("@blinkoo/components").BlinkooWebUtils;
type SingleVideoArgs = BlinkooSingleVideoArgs & {
  configurations?: BlinkooFeedConfiguration;
};
let blinkooWebUtils: BlinkooWebUtils | undefined = undefined;

export default function SingleVideo(params: SingleVideoArgs) {
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
    <blinkoo-single-video
      title={params.title}
      aspectRatio={params.aspectRatio}
      postId={params.postId}
      configurations={
        init && params.configurations
          ? blinkooWebUtils?.encodeObject(params.configurations)
          : undefined
      }
    ></blinkoo-single-video>
  );
}
