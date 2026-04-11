import type { Metadata } from "next";
import SignatureResizeToolClient from "@/components/client/signature-resize-tool-client";
import { ToolShell } from "@/components/ui/tool-shell";

export const metadata: Metadata = {
  title: "Signature Resize | Govt Form Toolkit",
  description:
    "Crop and resize a handwritten signature image with preview and download support for government application uploads.",
};

export default function SignatureResizePage() {
  return (
    <ToolShell
      title="Signature Resize"
      description="Trim unused space around a signature and export a compact resized image ready for upload fields."
    >
      <SignatureResizeToolClient />
    </ToolShell>
  );
}
