import { Minus, Plus } from "lucide-react";

export function QuantityStepper({
  value,
  onChange,
  min = 1,
}: {
  value: number;
  onChange: (n: number) => void;
  min?: number;
}) {
  return (
    <div className="inline-flex items-center border border-primary/30">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        className="grid size-9 place-items-center text-primary-light/70 transition-colors hover:text-primary disabled:opacity-30"
        disabled={value <= min}
        aria-label="Decrease quantity"
      >
        <Minus className="size-3.5" />
      </button>
      <span className="w-10 text-center text-sm tabular-nums text-primary-light">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className="grid size-9 place-items-center text-primary-light/70 transition-colors hover:text-primary"
        aria-label="Increase quantity"
      >
        <Plus className="size-3.5" />
      </button>
    </div>
  );
}
