import { FieldDef } from "@/lib/types";

export function SliderField({
  field,
  value,
  onChange,
}: {
  field: FieldDef;
  value: number;
  onChange: (v: number) => void;
}) {
  const min = field.min ?? 0;
  const max = field.max ?? 100;

  return (
    <div className="rounded-2xl border border-white/60 bg-white/50 p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="label">{field.label}</div>
          {field.hint && <div className="hint mt-1">{field.hint}</div>}
        </div>
        <div className="rounded-xl border border-ink-100 bg-white px-3 py-1.5 text-sm text-ink-800">
          {value}{field.unit ? ` ${field.unit}` : ""}
        </div>
      </div>
      <input
        className="mt-4 w-full"
        type="range"
        min={min}
        max={max}
        step={field.step ?? 1}
        value={Number.isFinite(value) ? value : 0}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <div className="mt-2 flex justify-between text-xs text-ink-500">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}
