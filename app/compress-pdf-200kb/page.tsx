import type { Metadata } from "next";
import CompressPdfToolClient from "@/components/client/compress-pdf-tool-client";
import { ToolShell } from "@/components/ui/tool-shell";

export const metadata: Metadata = {
  title: "Compress PDF to 200 KB | Govt Form Toolkit",
  description:
    "Optimize a PDF in the browser, preview the processed file status, and download a lighter version for form submission.",
};

export default function CompressPdf200KbPage() {
  return (
    <ToolShell
      title="Compress PDF to 200 KB"
      description="Run lightweight browser-side PDF optimization for application portals with strict upload size rules."
    >
      <CompressPdfToolClient />
    </ToolShell>
  );
}
