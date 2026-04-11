"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FileInput } from "@/components/ui/file-input";
import { PreviewCard } from "@/components/ui/preview-card";
import { RangeInput } from "@/components/ui/range-input";
import {
  buildPassportPhotoSheet,
  formatKB,
  triggerDownload,
} from "@/lib/utils/image";

const presets = [
  { id: "india-passport", label: "India Passport", width: 35, height: 45 },
  { id: "square-visa", label: "Square Visa", width: 51, height: 51 },
  { id: "small-id", label: "Small ID", width: 25, height: 35 },
  { id: "custom", label: "Custom", width: 35, height: 45 },
] as const;

const backgroundColors = [
  { value: "#ffffff", label: "White" },
  { value: "#dbeafe", label: "Light Blue" },
  { value: "#f5f5f4", label: "Light Gray" },
  { value: "#fef3c7", label: "Cream" },
] as const;

export function PassportPhotoTool() {
  const [mounted, setMounted] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [sourceUrl, setSourceUrl] = useState<string | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [preset, setPreset] =
    useState<(typeof presets)[number]["id"]>("india-passport");
  const [photoWidth, setPhotoWidth] = useState(35);
  const [photoHeight, setPhotoHeight] = useState(45);
  const [orientation, setOrientation] = useState<"portrait" | "landscape">(
    "portrait",
  );
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [brightness, setBrightness] = useState(102);
  const [contrast, setContrast] = useState(105);
  const [saturation, setSaturation] = useState(104);
  const [removeBackground, setRemoveBackground] = useState(false);
  const [fullPageBackground, setFullPageBackground] = useState(false);
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

  useEffect(() => {
    const selectedPreset = presets.find((item) => item.id === preset);

    if (!selectedPreset || selectedPreset.id === "custom") {
      return;
    }

    setPhotoWidth(selectedPreset.width);
    setPhotoHeight(selectedPreset.height);
  }, [preset]);

  async function handleProcess() {
    if (!file) return;

    setIsProcessing(true);

    try {
      if (resultUrl) {
        URL.revokeObjectURL(resultUrl);
      }

      const result = await buildPassportPhotoSheet(file, {
        photoWidthMm: photoWidth,
        photoHeightMm: photoHeight,
        orientation,
        backgroundColor,
        brightness,
        contrast,
        saturation,
        removeBackground,
        fullPageBackground,
      });
      setResultUrl(result.url);
      setResultMeta(
        `${orientation === "portrait" ? "A4 portrait" : "A4 landscape"} | ${formatKB(result.blob.size)}`,
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
          accept="image/*"
          label="Upload a passport photo"
          helper="Use a front-facing portrait. Adjust presets, orientation, enhancement, and background before generating the A4 sheet."
          onChange={setFile}
        />
        <div className="grid gap-4 rounded-[24px] border border-ink/10 bg-muted/40 p-4">
          <label className="block space-y-2">
            <span className="text-sm font-medium text-ink/75">Preset</span>
            <select
              value={preset}
              onChange={(event) =>
                setPreset(event.target.value as (typeof presets)[number]["id"])
              }
              className="min-h-11 w-full rounded-2xl border border-ink/15 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-accent"
            >
              {presets.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
          <RangeInput
            label="Photo width (mm)"
            min={25}
            max={51}
            value={photoWidth}
            onChange={(value) => {
              setPreset("custom");
              setPhotoWidth(value);
            }}
          />
          <RangeInput
            label="Photo height (mm)"
            min={35}
            max={60}
            value={photoHeight}
            onChange={(value) => {
              setPreset("custom");
              setPhotoHeight(value);
            }}
          />
          <label className="block space-y-2">
            <span className="text-sm font-medium text-ink/75">Orientation</span>
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant={orientation === "portrait" ? "primary" : "secondary"}
                className="w-full"
                onClick={() => setOrientation("portrait")}
              >
                Portrait
              </Button>
              <Button
                variant={orientation === "landscape" ? "primary" : "secondary"}
                className="w-full"
                onClick={() => setOrientation("landscape")}
              >
                Landscape
              </Button>
            </div>
          </label>
          <label className="block space-y-2">
            <span className="text-sm font-medium text-ink/75">Background color</span>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {backgroundColors.map((color) => (
                <button
                  key={color.value}
                  type="button"
                  onClick={() => setBackgroundColor(color.value)}
                  className={`flex min-h-11 items-center gap-2 rounded-2xl border px-3 py-2 text-sm font-medium transition ${
                    backgroundColor === color.value
                      ? "border-accent bg-white text-accent"
                      : "border-ink/10 bg-white text-ink"
                  }`}
                >
                  <span
                    className="h-4 w-4 rounded-full border border-ink/10"
                    style={{ backgroundColor: color.value }}
                  />
                  {color.label}
                </button>
              ))}
            </div>
          </label>
          <label className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-white px-4 py-3">
            <input
              type="checkbox"
              checked={fullPageBackground}
              onChange={(event) => setFullPageBackground(event.target.checked)}
              className="mt-1 h-4 w-4 accent-accent"
            />
            <span>
              <span className="block text-sm font-medium text-ink/80">
                Full page background
              </span>
              <span className="mt-1 block text-xs leading-5 text-ink/60">
                Turn this on only if you want the entire A4 sheet tinted instead of
                keeping margins white for print efficiency.
              </span>
            </span>
          </label>
          {backgroundColor !== "#ffffff" && !fullPageBackground ? (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-900">
              Colored background will only apply to photos (recommended for
              printing).
            </div>
          ) : null}
          <RangeInput
            label="Brightness"
            min={80}
            max={130}
            value={brightness}
            onChange={setBrightness}
          />
          <RangeInput
            label="Contrast"
            min={80}
            max={140}
            value={contrast}
            onChange={setContrast}
          />
          <RangeInput
            label="Enhancement"
            min={80}
            max={140}
            value={saturation}
            onChange={setSaturation}
          />
          <label className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-white px-4 py-3">
            <input
              type="checkbox"
              checked={removeBackground}
              onChange={(event) => setRemoveBackground(event.target.checked)}
              className="mt-1 h-4 w-4 accent-accent"
            />
            <span>
              <span className="block text-sm font-medium text-ink/80">
                Background removal
              </span>
              <span className="mt-1 block text-xs leading-5 text-ink/60">
                Best for light or white backgrounds. The tool replaces near-white
                areas with the selected background color.
              </span>
            </span>
          </label>
        </div>
        <div className="rounded-[24px] border border-ink/10 bg-white p-4 text-sm leading-6 text-ink/70">
          Use presets for common passport and visa sizes, switch sheet orientation,
          fine-tune brightness and contrast, and enable background removal if the
          uploaded portrait has a pale backdrop.
        </div>
        <div className="flex flex-wrap gap-3">
          <Button onClick={handleProcess} disabled={!file || isProcessing}>
            {isProcessing ? "Building sheet..." : "Generate A4 sheet"}
          </Button>
          <Button
            variant="secondary"
            onClick={() =>
              resultUrl && triggerDownload(resultUrl, "passport-photo-sheet.jpg")
            }
            disabled={!resultUrl}
          >
            Download sheet
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        <PreviewCard
          label="Uploaded photo"
          previewUrl={sourceUrl}
          fileName={file?.name}
          meta={file ? formatKB(file.size) : undefined}
        />
        <PreviewCard
          label="A4 passport sheet"
          previewUrl={resultUrl}
          fileName="passport-photo-sheet.jpg"
          meta={resultMeta}
        />
      </div>
    </div>
  );
}
