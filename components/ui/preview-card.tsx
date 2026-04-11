import { FileText, ImageIcon } from "lucide-react";

type PreviewCardProps = {
  label: string;
  previewUrl?: string | null;
  fileName?: string;
  meta?: string;
  isPdf?: boolean;
};

export function PreviewCard({
  label,
  previewUrl,
  fileName,
  meta,
  isPdf = false,
}: PreviewCardProps) {
  return (
    <div className="rounded-[24px] border border-ink/10 bg-muted/40 p-4">
      <div className="mb-3">
        <p className="text-sm font-semibold">{label}</p>
        {fileName ? (
          <p className="mt-1 text-xs text-ink/60">
            {fileName}
            {meta ? ` | ${meta}` : ""}
          </p>
        ) : null}
      </div>

      <div className="flex min-h-56 items-center justify-center overflow-hidden rounded-2xl border border-ink/10 bg-white">
        {previewUrl && !isPdf ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={previewUrl}
            alt={label}
            className="h-full max-h-72 w-full object-contain"
          />
        ) : previewUrl && isPdf ? (
          <div className="flex flex-col items-center gap-3 px-4 py-10 text-center">
            <FileText className="h-14 w-14 text-accent" />
            <p className="text-sm text-ink/70">
              PDF ready to download after processing.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 px-4 py-10 text-center">
            <ImageIcon className="h-14 w-14 text-ink/35" />
            <p className="text-sm text-ink/55">Preview will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
