"use client";

import { useEffect, useState } from "react";
import { PDFDocument } from "pdf-lib";
import { Button } from "@/components/ui/button";
import { FileInput } from "@/components/ui/file-input";
import { PreviewCard } from "@/components/ui/preview-card";
import { formatKB, triggerDownload } from "@/lib/utils/image";

async function compressPdfBasic(file: File) {
  const bytes = await file.arrayBuffer();
  const pdf = await PDFDocument.load(bytes);
  const saved = await pdf.save({
    useObjectStreams: true,
    addDefaultPage: false,
    updateFieldAppearances: false,
  });
  const blob = new Blob([saved], { type: "application/pdf" });

  return {
    blob,
    url: URL.createObjectURL(blob),
  };
}

export function CompressPdfTool() {
  const [mounted, setMounted] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [sourceUrl, setSourceUrl] = useState<string | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [resultMeta, setResultMeta] = useState<string>("");
  const [status, setStatus] = useState<string>(
    "Basic PDF optimization rewrites the file using compressed object streams.",
  );
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    setStatus("Optimizing PDF structure...");

    try {
      if (resultUrl) {
        URL.revokeObjectURL(resultUrl);
      }

      const result = await compressPdfBasic(file);
      setResultUrl(result.url);
      setResultMeta(`Compressed file | ${formatKB(result.blob.size)}`);
      setStatus(
        result.blob.size <= 200 * 1024
          ? "Compression reached the 200 KB target."
          : "Compression finished. Some PDFs may still remain above 200 KB depending on embedded images.",
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
          label="Upload a PDF"
          helper="This applies light structural optimization in the browser and works best on already simple PDFs."
          onChange={setFile}
        />
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
              resultUrl && triggerDownload(resultUrl, "compressed-200kb.pdf")
            }
            disabled={!resultUrl}
          >
            Download PDF
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        <PreviewCard
          label="Original PDF"
          previewUrl={sourceUrl}
          fileName={file?.name}
          meta={file ? formatKB(file.size) : undefined}
          isPdf
        />
        <PreviewCard
          label="Compressed PDF"
          previewUrl={resultUrl}
          fileName="compressed-200kb.pdf"
          meta={resultMeta}
          isPdf
        />
      </div>
    </div>
  );
}
