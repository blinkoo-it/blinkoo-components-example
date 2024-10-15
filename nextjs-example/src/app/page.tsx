"use client";

import dynamic from "next/dynamic";

const Feed = dynamic(() => import("./feed"), { ssr: false });

export default function Home() {
  if (typeof window === undefined) return null;
  return (
    <div className="p-4" style={{ width: "100%", height: "100%" }}>
      <Feed
        apiKey="YOUR_API_KEY"
        title="React Example"
      />
    </div>
  );
}
