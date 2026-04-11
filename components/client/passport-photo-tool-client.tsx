"use client";

import dynamic from "next/dynamic";

const PassportPhotoTool = dynamic(
  () =>
    import("@/components/tools/passport-photo-tool").then(
      (mod) => mod.PassportPhotoTool,
    ),
  { ssr: false },
);

export default function PassportPhotoToolClient() {
  return <PassportPhotoTool />;
}
