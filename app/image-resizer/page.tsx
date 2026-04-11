import type { Metadata } from "next";
import ResizeImageToolClient from "@/components/client/resize-image-tool-client";
import { ToolShell } from "@/components/ui/tool-shell";

export const metadata: Metadata = {
  title: "Custom Image Resizer | Govt Form Toolkit",
  description:
    "Upload an image, enter any target size in KB, preview the processed result, and download the resized file.",
  keywords: [
    "custom image resizer",
    "resize image for govt form",
    "compress image for online form",
  ],
};

export default function ImageResizerPage() {
  return (
    <ToolShell
      title="Custom Image Resizer"
      description="Choose your own target size in KB when a form or portal requires a custom upload limit."
    >
      <div className="space-y-8">
        <section className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Custom Image Resizer for Govt Forms
          </h1>
          <p className="text-sm leading-7 text-ink/75 sm:text-base">
            Use this page when a portal mentions a custom photo or signature
            limit that does not match the fixed 20KB, 30KB, 50KB, or 100KB
            presets. It helps you resize image for govt form uploads with your
            own target size in KB.
          </p>
          <p className="text-sm font-medium text-ink/60 sm:text-base">
            Free | No Signup | Instant Download | Works for Govt Forms
          </p>
        </section>

        <ResizeImageToolClient defaultTargetKB={50} editableTarget />
      </div>
    </ToolShell>
  );
}
