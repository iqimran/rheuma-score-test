import { FieldDef } from "@/lib/types";

export function NumberField({
  field,
  value,
  onChange,
}: {
  field: FieldDef;
  value: number;
  onChange: (v: number) => void;
}) {
  const min = field.min ?? 0;
  const max = field.max ?? 999999;

  return (
    <div className="rounded-2xl border border-white/60 bg-white/50 p-4">
      <label className="label">{field.label}</label>
      {field.hint && <div className="hint mt-1">{field.hint}</div>}
      <div className="mt-2 flex items-center gap-2">
        <input
          className="input"
          type="number"
          inputMode="decimal"
          min={min}
          max={max}
          step={field.step ?? 1}
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        {field.unit && (
          <span className="shrink-0 rounded-xl border border-ink-100 bg-white px-3 py-2 text-sm text-ink-700">
            {field.unit}
          </span>
        )}
      </div>
      <div className="mt-2 text-xs text-ink-500">
        Range: {min}–{max}{field.unit ? ` ${field.unit}` : ""}
      </div>
    </div>
  );
}
