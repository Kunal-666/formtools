"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FileInput } from "@/components/ui/file-input";
import { PreviewCard } from "@/components/ui/preview-card";
import {
  formatKB,
  resizeImageToTargetKB,
  triggerDownload,
} from "@/lib/utils/image";

type ResizeImageToolProps = {
  defaultTargetKB?: number;
  editableTarget?: boolean;
};

export function ResizeImageTool({
  defaultTargetKB = 50,
  editableTarget = false,
}: ResizeImageToolProps) {
  const [mounted, setMounted] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [sourceUrl, setSourceUrl] = useState<string | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [targetKB, setTargetKB] = useState(defaultTargetKB);
  const [resultName, setResultName] = useState(`resized-${defaultTargetKB}kb.jpg`);
  const [resultMeta, setResultMeta] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setTargetKB(defaultTargetKB);
    setResultName(`resized-${defaultTargetKB}kb.jpg`);
    setResultMeta("");
  }, [defaultTargetKB]);

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
    if (!file || targetKB <= 0) return;

    setIsProcessing(true);

    try {
      if (resultUrl) {
        URL.revokeObjectURL(resultUrl);
      }

      const result = await resizeImageToTargetKB(file, targetKB);
      setResultUrl(result.url);
      setResultMeta(`Output: ${formatKB(result.blob.size)}`);
      setResultName(`${file.name.replace(/\.[^.]+$/, "")}-${targetKB}kb.jpg`);
    } finally {
      setIsProcessing(false);
    }
  }

  if (!mounted) {
    return null;
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-4">
        <FileInput
          accept="image/*"
          label="Upload an image"
          helper="JPG or PNG files work well. The tool exports a JPEG adjusted close to your target size."
          onChange={setFile}
        />
        {editableTarget ? (
          <label className="block rounded-[24px] border border-ink/10 bg-muted/40 p-4">
            <span className="mb-2 block text-sm font-medium text-ink/75">
              Target size in KB
            </span>
            <input
              type="number"
              min={1}
              step={1}
              value={targetKB}
              onChange={(event) =>
                setTargetKB(Math.max(1, Number(event.target.value) || 1))
              }
              className="min-h-11 w-full rounded-2xl border border-ink/15 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-accent"
            />
          </label>
        ) : null}
        <div className="flex flex-wrap gap-3">
          <Button onClick={handleProcess} disabled={!file || isProcessing}>
            {isProcessing ? "Processing..." : `Resize to ${targetKB} KB`}
          </Button>
          <Button
            variant="secondary"
            onClick={() => resultUrl && triggerDownload(resultUrl, resultName)}
            disabled={!resultUrl}
          >
            Download result
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        <PreviewCard
          label="Original image"
          previewUrl={sourceUrl}
          fileName={file?.name}
          meta={file ? formatKB(file.size) : undefined}
        />
        <PreviewCard
          label="Processed image"
          previewUrl={resultUrl}
          fileName={resultName}
          meta={resultMeta}
        />
      </div>
    </div>
  );
}
