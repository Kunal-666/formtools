"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FileInput } from "@/components/ui/file-input";
import { PreviewCard } from "@/components/ui/preview-card";
import { RangeInput } from "@/components/ui/range-input";
import { cropImage, formatKB, triggerDownload } from "@/lib/utils/image";

export function SignatureResizeTool() {
  const [mounted, setMounted] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [sourceUrl, setSourceUrl] = useState<string | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [trimX, setTrimX] = useState(5);
  const [trimY, setTrimY] = useState(20);
  const [trimWidth, setTrimWidth] = useState(90);
  const [trimHeight, setTrimHeight] = useState(60);
  const [resultMeta, setResultMeta] = useState<string>("");
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
    if (!file || !sourceUrl) return;

    setIsProcessing(true);

    try {
      if (resultUrl) {
        URL.revokeObjectURL(resultUrl);
      }

      const image = new Image();
      const dimensions = await new Promise<{ width: number; height: number }>(
        (resolve, reject) => {
          image.onload = () =>
            resolve({ width: image.naturalWidth, height: image.naturalHeight });
          image.onerror = () => reject(new Error("Could not load signature."));
          image.src = sourceUrl;
        },
      );

      const crop = {
        x: Math.round((trimX / 100) * dimensions.width),
        y: Math.round((trimY / 100) * dimensions.height),
        width: Math.round((trimWidth / 100) * dimensions.width),
        height: Math.round((trimHeight / 100) * dimensions.height),
      };

      const result = await cropImage(file, crop, { width: 400, height: 160 });
      setResultUrl(result.url);
      setResultMeta(`400x160 | ${formatKB(result.blob.size)}`);
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
          accept="image/*"
          label="Upload a signature image"
          helper="Use a clear signature on a light background. Sliders trim the captured area before resizing."
          onChange={setFile}
        />
        <div className="grid gap-4 rounded-[24px] border border-ink/10 bg-muted/40 p-4">
          <RangeInput
            label="Left trim start (%)"
            min={0}
            max={30}
            value={trimX}
            onChange={setTrimX}
          />
          <RangeInput
            label="Top trim start (%)"
            min={0}
            max={40}
            value={trimY}
            onChange={setTrimY}
          />
          <RangeInput
            label="Crop width (%)"
            min={40}
            max={100}
            value={trimWidth}
            onChange={setTrimWidth}
          />
          <RangeInput
            label="Crop height (%)"
            min={20}
            max={100}
            value={trimHeight}
            onChange={setTrimHeight}
          />
        </div>
        <div className="flex flex-wrap gap-3">
          <Button onClick={handleProcess} disabled={!file || isProcessing}>
            {isProcessing ? "Resizing..." : "Crop and resize"}
          </Button>
          <Button
            variant="secondary"
            onClick={() =>
              resultUrl && triggerDownload(resultUrl, "signature-resized.jpg")
            }
            disabled={!resultUrl}
          >
            Download signature
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        <PreviewCard
          label="Original signature"
          previewUrl={sourceUrl}
          fileName={file?.name}
          meta={file ? formatKB(file.size) : undefined}
        />
        <PreviewCard
          label="Processed signature"
          previewUrl={resultUrl}
          fileName="signature-resized.jpg"
          meta={resultMeta}
        />
      </div>
    </div>
  );
}
