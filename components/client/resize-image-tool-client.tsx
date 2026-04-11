"use client";

import dynamic from "next/dynamic";

const ResizeImageTool = dynamic(
  () =>
    import("@/components/tools/resize-image-tool").then(
      (mod) => mod.ResizeImageTool,
    ),
  { ssr: false },
);

type ResizeImageToolClientProps = {
  defaultTargetKB?: number;
  editableTarget?: boolean;
};

export default function ResizeImageToolClient(
  props: ResizeImageToolClientProps,
) {
  return <ResizeImageTool {...props} />;
}
