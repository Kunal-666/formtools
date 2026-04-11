"use client";

import dynamic from "next/dynamic";

const SignatureResizeTool = dynamic(
  () =>
    import("@/components/tools/signature-resize-tool").then(
      (mod) => mod.SignatureResizeTool,
    ),
  { ssr: false },
);

export default function SignatureResizeToolClient() {
  return <SignatureResizeTool />;
}
