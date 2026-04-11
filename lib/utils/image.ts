export type ProcessedImageResult = {
  blob: Blob;
  url: string;
  sizeKB: number;
};

export type PassportSheetOptions = {
  photoWidthMm?: number;
  photoHeightMm?: number;
  columns?: number;
  rows?: number;
  mode?: "auto" | "fixed";
  orientation?: "portrait" | "landscape";
  backgroundColor?: string;
  brightness?: number;
  contrast?: number;
  saturation?: number;
  removeBackground?: boolean;
  marginMm?: number;
  gapMm?: number;
  cutLines?: boolean;
  fullPageBackground?: boolean;
};

export type PassportSheetResult = ProcessedImageResult & {
  totalPhotos: number;
  dimensions: {
    pageWidthPx: number;
    pageHeightPx: number;
    photoWidthPx: number;
    photoHeightPx: number;
    columns: number;
    rows: number;
    orientation: "portrait" | "landscape";
  };
};

export function formatKB(bytes: number) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

export async function fileToDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Failed to read file."));
    reader.readAsDataURL(file);
  });
}

export async function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Could not load image."));
    image.src = src;
  });
}

export function canvasToBlob(canvas: HTMLCanvasElement, quality = 0.92) {
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("Canvas export failed."));
          return;
        }

        resolve(blob);
      },
      "image/jpeg",
      quality,
    );
  });
}

export async function resizeImageToTargetKB(
  file: File,
  targetKB: number,
  maxWidth = 1200,
) {
  const src = await fileToDataUrl(file);
  const image = await loadImage(src);

  let scale = Math.min(1, maxWidth / image.width);

  let bestBlob: Blob | null = null;

  while (scale > 0.3) {
    const width = Math.max(1, Math.round(image.width * scale));
    const height = Math.max(1, Math.round(image.height * scale));

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    if (!context) {
      throw new Error("2D canvas is not supported in this browser.");
    }

    canvas.width = width;
    canvas.height = height;

    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, width, height);
    context.drawImage(image, 0, 0, width, height);

    const targetBytes = targetKB * 1024;

    let low = 0.2;
    let high = 0.98;
    let currentBest = await canvasToBlob(canvas, high);

    // 🔥 Binary search for quality
    for (let i = 0; i < 10; i++) {
      const quality = (low + high) / 2;
      const blob = await canvasToBlob(canvas, quality);

      if (
        Math.abs(blob.size - targetBytes) <
        Math.abs(currentBest.size - targetBytes)
      ) {
        currentBest = blob;
      }

      if (blob.size > targetBytes) {
        high = quality;
      } else {
        low = quality;
      }
    }

    // ✅ If good enough → return
    if (currentBest.size <= targetBytes + 2000) {
      return {
        blob: currentBest,
        url: URL.createObjectURL(currentBest),
        sizeKB: currentBest.size / 1024,
      };
    }

    // 🔽 Otherwise reduce dimensions and retry
    bestBlob = currentBest;
    scale *= 0.85;
  }

  // fallback (best possible)
  return {
    blob: bestBlob!,
    url: URL.createObjectURL(bestBlob!),
    sizeKB: bestBlob!.size / 1024,
  };
}

export async function cropImage(
  file: File,
  crop: { x: number; y: number; width: number; height: number },
  output: { width: number; height: number },
) {
  const src = await fileToDataUrl(file);
  const image = await loadImage(src);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error("2D canvas is not supported in this browser.");
  }

  canvas.width = output.width;
  canvas.height = output.height;
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, output.width, output.height);
  context.drawImage(
    image,
    crop.x,
    crop.y,
    crop.width,
    crop.height,
    0,
    0,
    output.width,
    output.height,
  );

  const blob = await canvasToBlob(canvas, 0.92);

  return {
    blob,
    url: URL.createObjectURL(blob),
    sizeKB: blob.size / 1024,
  } satisfies ProcessedImageResult;
}

export async function buildPassportPhotoSheet(
  file: File,
  options: PassportSheetOptions = {},
) {
  const src = await fileToDataUrl(file);
  const {
    photoWidthMm = 35,
    photoHeightMm = 45,
    columns,
    rows,
    mode = "auto",
    orientation = "portrait",
    backgroundColor = "#ffffff",
    brightness = 100,
    contrast = 100,
    saturation = 100,
    removeBackground = false,
    marginMm = 8,
    gapMm = 2.5,
    cutLines = true,
    fullPageBackground = false,
  } = options;
  const sourceImage = removeBackground
    ? await removeBackgroundFromImage(file)
    : await loadImage(src);
  const mmToPx = 11.811;
  const margin = Math.round(marginMm * mmToPx);
  const gap = Math.round(gapMm * mmToPx);
  const pageWidth =
    orientation === "portrait"
      ? Math.round(210 * mmToPx)
      : Math.round(297 * mmToPx);
  const pageHeight =
    orientation === "portrait"
      ? Math.round(297 * mmToPx)
      : Math.round(210 * mmToPx);
  const photoWidth = Math.round(photoWidthMm * mmToPx);
  const photoHeight = Math.round(photoHeightMm * mmToPx);
  const usableWidth = pageWidth - margin * 2;
  const usableHeight = pageHeight - margin * 2;
  const autoCols = Math.max(
    1,
    Math.floor((usableWidth + gap) / (photoWidth + gap)),
  );
  const autoRows = Math.max(
    1,
    Math.floor((usableHeight + gap) / (photoHeight + gap)),
  );
  const finalColumns = mode === "fixed" ? Math.max(1, columns ?? autoCols) : autoCols;
  const finalRows = mode === "fixed" ? Math.max(1, rows ?? autoRows) : autoRows;
  const gridWidth = finalColumns * photoWidth + (finalColumns - 1) * gap;
  const gridHeight = finalRows * photoHeight + (finalRows - 1) * gap;
  const offsetX = Math.max(margin, Math.round((pageWidth - gridWidth) / 2));
  const offsetY = Math.max(margin, Math.round((pageHeight - gridHeight) / 2));
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error("2D canvas is not supported in this browser.");
  }

  canvas.width = pageWidth;
  canvas.height = pageHeight;
  context.fillStyle = fullPageBackground ? backgroundColor : "#ffffff";
  context.fillRect(0, 0, pageWidth, pageHeight);

  const processedPortrait = preparePassportPortrait(sourceImage, {
    width: photoWidth,
    height: photoHeight,
    brightness,
    contrast,
    saturation,
  });

  for (let row = 0; row < finalRows; row += 1) {
    for (let column = 0; column < finalColumns; column += 1) {
      const x = offsetX + column * (photoWidth + gap);
      const y = offsetY + row * (photoHeight + gap);
      const innerPad = Math.round(photoWidth * 0.05);

      context.fillStyle = backgroundColor;
      context.fillRect(x, y, photoWidth, photoHeight);
      context.drawImage(
        processedPortrait,
        x + innerPad,
        y + innerPad,
        photoWidth - innerPad * 2,
        photoHeight - innerPad * 2,
      );

      if (cutLines) {
        context.save();
        context.setLineDash([10, 6]);
        context.lineWidth = 1;
        context.strokeStyle = "rgba(100, 116, 139, 0.45)";
        context.strokeRect(x, y, photoWidth, photoHeight);
        context.restore();
      }
    }
  }

  const blob = await canvasToBlob(canvas, 0.95);

  return {
    blob,
    url: URL.createObjectURL(blob),
    sizeKB: blob.size / 1024,
    totalPhotos: finalRows * finalColumns,
    dimensions: {
      pageWidthPx: pageWidth,
      pageHeightPx: pageHeight,
      photoWidthPx: photoWidth,
      photoHeightPx: photoHeight,
      columns: finalColumns,
      rows: finalRows,
      orientation,
    },
  } satisfies PassportSheetResult;
}

function preparePassportPortrait(
  image: HTMLImageElement,
  options: {
    width: number;
    height: number;
    brightness: number;
    contrast: number;
    saturation: number;
  },
) {
  const {
    width,
    height,
    brightness,
    contrast,
    saturation,
  } = options;
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error("2D canvas is not supported in this browser.");
  }

  canvas.width = width;
  canvas.height = height;
  const padding = Math.round(width * 0.05);
  const innerX = padding;
  const innerY = padding;
  const innerWidth = Math.max(1, width - padding * 2);
  const innerHeight = Math.max(1, height - padding * 2);
  const sourceRatio = image.width / image.height;
  const targetRatio = innerWidth / innerHeight;

  let drawWidth = innerWidth;
  let drawHeight = innerHeight;
  let dx = innerX;
  let dy = innerY;

  if (sourceRatio > targetRatio) {
    drawHeight = innerHeight;
    drawWidth = innerHeight * sourceRatio;
    dx = innerX + (innerWidth - drawWidth) / 2;
  } else {
    drawWidth = innerWidth;
    drawHeight = innerWidth / sourceRatio;
    dy = innerY + (innerHeight - drawHeight) / 2;
  }

  // Bias the crop slightly upward so the face area sits closer to the
  // standard passport composition rather than perfectly center-centered.
  if (dy < innerY) {
    dy = innerY + (dy - innerY) * 0.72;
  }

  context.save();

  context.beginPath();
  context.rect(innerX, innerY, innerWidth, innerHeight);
  context.clip();

  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";

  context.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`;
  context.drawImage(image, dx, dy, drawWidth, drawHeight);
  context.filter = "none";

  context.restore();

  // subtle border
  context.save();
  context.strokeStyle = "rgba(148, 163, 184, 0.35)";
  context.lineWidth = 1;
  context.strokeRect(innerX, innerY, innerWidth, innerHeight);
  context.restore();

  return canvas;
}

async function removeBackgroundFromImage(file: File) {
  const src = await fileToDataUrl(file);
  const image = await loadImage(src);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error("2D canvas is not supported in this browser.");
  }

  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  context.drawImage(image, 0, 0);

  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  // Placeholder hook for future segmentation integration.
  // For now, make near-white pixels transparent so the selected background
  // color can show through independently from the removal toggle.
  for (let index = 0; index < data.length; index += 4) {
    const red = data[index];
    const green = data[index + 1];
    const blue = data[index + 2];
    const isNearWhite = red > 225 && green > 225 && blue > 225;
    const isLowColorVariance =
      Math.abs(red - green) < 22 &&
      Math.abs(green - blue) < 22 &&
      Math.abs(red - blue) < 22;

    if (isNearWhite && isLowColorVariance) {
      data[index + 3] = 0;
    }
  }

  context.putImageData(imageData, 0, 0);

  return loadImage(canvas.toDataURL("image/png"));
}

export function triggerDownload(url: string, fileName: string) {
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}
