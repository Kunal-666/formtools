"use client";

type RangeInputProps = {
  label: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
};

export function RangeInput({
  label,
  min,
  max,
  step = 1,
  value,
  onChange,
}: RangeInputProps) {
  return (
    <label className="block space-y-3">
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-medium text-ink/75">{label}</span>
        <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-semibold">
          {value}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-ink/10 accent-accent"
      />
    </label>
  );
}
