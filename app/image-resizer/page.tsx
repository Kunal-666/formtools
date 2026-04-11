import type { Metadata } from "next";
import ResizeImageToolClient from "@/components/client/resize-image-tool-client";
import { ToolShell } from "@/components/ui/tool-shell";

export const metadata: Metadata = {
  title: "Custom Image Resizer | Govt Form Toolkit",
  description:
    "Upload an image, enter any target size in KB, preview the processed result, and download the resized file.",
};

export default function ImageResizerPage() {
  return (
    <ToolShell
      title="Custom Image Resizer"
      description="Choose your own target size in KB when a form or portal requires a custom upload limit."
    >
      <ResizeImageToolClient defaultTargetKB={50} editableTarget />
    </ToolShell>
  );
}
