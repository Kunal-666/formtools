"use client";

import dynamic from "next/dynamic";

const CompressPdfTool = dynamic(
  () =>
    import("@/components/tools/compress-pdf-tool").then(
      (mod) => mod.CompressPdfTool,
    ),
  { ssr: false },
);

export default function CompressPdfToolClient() {
  return <CompressPdfTool />;
}
