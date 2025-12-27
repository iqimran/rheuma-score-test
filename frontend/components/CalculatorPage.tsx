"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FieldDef, CalculatorConfig } from "../lib/types";
import { NumberField } from "../components/fields/NumberField";
import { SliderField } from "../components/fields/SliderField";
import { ResultPanel } from "../components/ResultPanel";

function initValues(fields: FieldDef[]) {
  const o: Record<string, number> = {};
  for (const f of fields) o[f.name] = f.defaultValue ?? 0;
  return o;
}

export function CalculatorPage({ config }: { config: CalculatorConfig }) {
  const [values, setValues] = useState<Record<string, number>>(() => initValues(config.fields));
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const onChange = (name: string, v: number) => {
    setValues((prev) => ({ ...prev, [name]: v }));
    setResult(null);
    setError(null);
  };

  const canCallApi = useMemo(() => Boolean(apiUrl), [apiUrl]);

  const calculate = async () => {
    setLoading(true);
    setError(null);
    try {
      if (!apiUrl) {
        // UI fallback when API isn't wired yet
        setResult({
          score: "—",
          activity: "Connect API to compute",
          percent: 35,
          note: "Set NEXT_PUBLIC_API_URL in .env.local",
        });
        return;
      }

      const res = await fetch(`${apiUrl}/reports`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          calculator_type: config.apiType,
          inputs: values,
        }),
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || `Request failed (${res.status})`);
      }

      setResult(await res.json());
    } catch (e: any) {
      setError(e?.message ?? "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-xs text-ink-500">
            <Link className="hover:underline" href="/">Calculators</Link> <span className="mx-1">/</span> {config.title}
          </div>
          <h1 className="mt-1 text-2xl md:text-3xl font-semibold text-ink-900">{config.title}</h1>
          <p className="mt-2 text-ink-600 max-w-3xl">{config.subtitle}</p>
        </div>
        <div className="hidden md:flex gap-2">
          <div className="glass px-4 py-3">
            <div className="text-xs text-ink-500">Mode</div>
            <div className="text-sm font-medium text-ink-900">{config.badge}</div>
          </div>
          <div className="glass px-4 py-3">
            <div className="text-xs text-ink-500">API</div>
            <div className="text-sm font-medium text-ink-900">{canCallApi ? "Connected" : "Not set"}</div>
          </div>
        </div>
      </div>

      <section className="mt-6 grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 glass p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-ink-900">Inputs</div>
              <div className="hint mt-1">Match the referenced calculator fields. Units are shown per input.</div>
            </div>
            <button className="btn-ghost" onClick={() => { setValues(initValues(config.fields)); setResult(null); setError(null); }}>
              Reset
            </button>
          </div>

          <div className="mt-5 grid md:grid-cols-2 gap-5">
            {config.fields.map((f) => {
              if (f.kind === "slider") {
                return (
                  <SliderField
                    key={f.name}
                    field={f}
                    value={values[f.name] ?? 0}
                    onChange={(v) => onChange(f.name, v)}
                  />
                );
              }
              return (
                <NumberField
                  key={f.name}
                  field={f}
                  value={values[f.name] ?? 0}
                  onChange={(v) => onChange(f.name, v)}
                />
              );
            })}
          </div>

          <button
            onClick={calculate}
            disabled={loading}
            className="btn-primary mt-6 w-full"
          >
            {loading ? "Calculating…" : "Calculate score"}
          </button>

          {error && (
            <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
              {error}
            </div>
          )}
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="glass p-6">
            <div className="text-sm font-semibold text-ink-900">Result</div>
            <div className="hint mt-1">Your backend should return score + activity category (and optionally percent).</div>
            <ResultPanel result={result} scaleHints={config.scaleHints} />
          </div>

          <div className="card p-6">
            <div className="text-sm font-semibold text-ink-900">Interpretation bands</div>
            <div className="mt-3 space-y-2">
              {config.scaleHints.map((h) => (
                <div key={h.label} className="flex items-center justify-between rounded-xl border border-ink-100 bg-white px-3 py-2">
                  <div className="text-sm font-medium text-ink-800">{h.label}</div>
                  <div className="text-xs text-ink-500">{h.range}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
