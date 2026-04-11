"use client";

import dynamic from "next/dynamic";

const CompressPdfTool = dynamic(
  () =>
    import("@/components/tools/compress-pdf-tool").then(
      (mod) => mod.CompressPdfTool,
    ),
  { ssr: false },
);

type CompressPdfToolClientProps = {
  defaultTarget?: string;
};

export default function CompressPdfToolClient(
  props: CompressPdfToolClientProps,
) {
  return <CompressPdfTool {...props} />;
}
