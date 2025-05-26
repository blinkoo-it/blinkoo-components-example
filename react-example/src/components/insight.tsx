"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import {
  BlinkooInsightAttributes,
  BlinkooInsightElement,
} from "@blinkoo/components";

type InsightArgs = Omit<BlinkooInsightAttributes, keyof HTMLElement>;

export interface InsightRef {
  sendCustomEvent(eventName: string, obj: Record<string, string>): void;
}

const Insight = forwardRef<InsightRef, InsightArgs>((params, ref) => {
  const insightRef = useRef<BlinkooInsightElement>(null);

  useImperativeHandle(ref, () => ({
    sendCustomEvent: (eventName: string, obj: Record<string, string>) =>
      insightRef.current?.sendCustomEvent(eventName, obj),
  }));

  return (
    <blinkoo-insight
      ref={insightRef}
      environment={params.environment}
      custom-base-url={params["custom-base-url"]}
      external-customer-id={params["external-customer-id"]}
      utm-source={params["utm-source"]}
      utm-campaign={params["utm-campaign"]}
      referrer={params.referrer}
      component-id={params["component-id"]}
    ></blinkoo-insight>
  );
});

Insight.displayName = "Insight";
export default Insight;
