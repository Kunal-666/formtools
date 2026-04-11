import type { Metadata } from "next";
import CompressPdfToolClient from "@/components/client/compress-pdf-tool-client";
import { ToolShell } from "@/components/ui/tool-shell";

export const metadata: Metadata = {
  title: "Compress PDF to 200 KB | Govt Form Toolkit",
  description:
    "Compress PDF to 200KB online for document uploads, scanned forms, and broader government-portal file limits.",
};

export default function CompressPdf200KbPage() {
  return (
    <ToolShell
      title="Compress PDF to 200 KB"
      description="Reduce scanned PDFs near 200KB when the portal allows a larger but still limited upload size."
    >
      <CompressPdfToolClient defaultTarget="200kb" />
    </ToolShell>
  );
}
