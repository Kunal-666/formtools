"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FileInput } from "@/components/ui/file-input";
import { PreviewCard } from "@/components/ui/preview-card";
import { formatKB, triggerDownload } from "@/lib/utils/image";
import { compressToTarget } from "@/lib/utils/pdf";

type CompressPdfToolProps = {
  defaultTarget?: string;
};

export function CompressPdfTool({
  defaultTarget = "50kb",
}: CompressPdfToolProps) {
  const [mounted, setMounted] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [target, setTarget] = useState(defaultTarget);
  const [sourceUrl, setSourceUrl] = useState<string | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [resultMeta, setResultMeta] = useState("");
  const [status, setStatus] = useState("Upload PDF and compress it for govt forms.");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setTarget(defaultTarget);
  }, [defaultTarget]);

  useEffect(() => {
    if (!file) {
      setSourceUrl(null);
      return;
    }

    const url = URL.createObjectURL(file);
    setSourceUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [file]);

  useEffect(() => {
    return () => {
      if (resultUrl) {
        URL.revokeObjectURL(resultUrl);
      }
    };
  }, [resultUrl]);

  async function handleProcess() {
    if (!file) return;

    setIsProcessing(true);
    setStatus("Compressing PDF using smart image optimization...");
    setResultUrl(null);

    try {
      const targetKB = Number.parseInt(target.replace("kb", ""), 10);
      const result = await compressToTarget(file, targetKB);

      setResultUrl(result.url);
      setResultMeta(`Compressed | ${formatKB(result.blob.size)}`);
      setStatus(
        result.blob.size / 1024 <= targetKB
          ? `Compressed to ${formatKB(result.blob.size)}`
          : `Best achieved: ${formatKB(result.blob.size)} (content limits further compression)`,
      );
    } catch (error) {
      console.error("Compression error:", error);
      setStatus(
        `Compression failed: ${error instanceof Error ? error.message : String(error)}`,
      );
    } finally {
      setIsProcessing(false);
    }
  }

  if (!mounted) {
    return null;
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="space-y-4">
        <FileInput
          accept="application/pdf"
          label="Upload PDF"
          helper="Best for scanned PDFs (govt forms)."
          onChange={setFile}
        />

        <select
          name="target"
          title="Compression target"
          value={target}
          onChange={(event) => setTarget(event.target.value)}
          className="w-full rounded-2xl border border-ink/15 bg-white p-3 text-sm outline-none transition focus:border-accent"
        >
          <option value="20kb">20 KB (High Compression)</option>
          <option value="50kb">50 KB (Recommended)</option>
          <option value="100kb">100 KB (Better Quality)</option>
          <option value="200kb">200 KB (Larger File Limit)</option>
        </select>

        <div className="rounded-[24px] border border-ink/10 bg-muted/40 p-4 text-sm leading-6 text-ink/70">
          {status}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button onClick={handleProcess} disabled={!file || isProcessing}>
            {isProcessing ? "Compressing..." : "Compress PDF"}
          </Button>

          <Button
            variant="secondary"
            onClick={() =>
              resultUrl && triggerDownload(resultUrl, `compressed-${target}.pdf`)
            }
            disabled={!resultUrl}
          >
            Download
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        <PreviewCard
          label="Original"
          previewUrl={sourceUrl}
          fileName={file?.name}
          meta={file ? formatKB(file.size) : undefined}
          isPdf
        />

        <PreviewCard
          label="Compressed"
          previewUrl={resultUrl}
          fileName={`compressed-${target}.pdf`}
          meta={resultMeta}
          isPdf
        />
      </div>
    </div>
  );
}
