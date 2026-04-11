import { PDFDocument } from "pdf-lib";
import * as pdfjsLib from "pdfjs-dist";

export type CompressedPdfResult = {
  blob: Blob;
  url: string;
};

let workerConfigured = false;

function ensurePdfWorker() {
  if (workerConfigured) {
    return;
  }
  
  pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url,
  ).toString();
  workerConfigured = true;
}

export async function compressPdfAdvanced(file: File, quality: number) {
  ensurePdfWorker();

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  const newPdf = await PDFDocument.create();

  for (let index = 0; index < pdf.numPages; index += 1) {
    const page = await pdf.getPage(index + 1);
    const viewport = page.getViewport({ scale: 1.5 });
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    if (!context) {
      throw new Error(`Failed to render PDF page ${index + 1}.`);
    }

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({
      canvasContext: context,
      canvas,
      viewport,
    }).promise;

    const imageDataUrl = canvas.toDataURL("image/jpeg", quality);
    const jpgImage = await newPdf.embedJpg(imageDataUrl);
    const newPage = newPdf.addPage([viewport.width, viewport.height]);

    newPage.drawImage(jpgImage, {
      x: 0,
      y: 0,
      width: viewport.width,
      height: viewport.height,
    });
  }


  const pdfBytes = await newPdf.save();
  const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: "application/pdf" });
  return {
    blob,
    url: URL.createObjectURL(blob),
  } satisfies CompressedPdfResult;
}

export async function compressToTarget(file: File, targetKB: number) {
  let quality = 0.7;
  let bestResult: CompressedPdfResult | null = null;

  for (let index = 0; index < 6; index += 1) {
    const result = await compressPdfAdvanced(file, quality);

    if (!bestResult || result.blob.size < bestResult.blob.size) {
      if (bestResult) {
        URL.revokeObjectURL(bestResult.url);
      }

      bestResult = result;
    } else {
      URL.revokeObjectURL(result.url);
    }

    if (bestResult.blob.size / 1024 <= targetKB) {
      break;
    }

    quality = Math.max(quality - 0.1, 0.1);
  }

  if (!bestResult) {
    throw new Error("Compression failed to produce a PDF.");
  }

  return bestResult;
}
