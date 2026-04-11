"use client";

import { Upload } from "lucide-react";
import { cn } from "@/lib/utils";

type FileInputProps = {
  accept: string;
  label: string;
  helper?: string;
  onChange: (file: File | null) => void;
  className?: string;
};

export function FileInput({
  accept,
  label,
  helper,
  onChange,
  className,
}: FileInputProps) {
  return (
    <label
      className={cn(
        "flex cursor-pointer flex-col items-center justify-center rounded-[24px] border border-dashed border-ink/20 bg-muted/60 px-5 py-8 text-center transition hover:border-accent/40 hover:bg-accent/5",
        className,
      )}
    >
      <Upload className="h-8 w-8 text-accent" />
      <span className="mt-3 text-base font-semibold">{label}</span>
      {helper ? (
        <span className="mt-2 text-sm leading-6 text-ink/65">{helper}</span>
      ) : null}
      <input
        className="sr-only"
        type="file"
        accept={accept}
        onChange={(event) => onChange(event.target.files?.[0] ?? null)}
      />
    </label>
  );
}
