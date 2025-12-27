export function ResultPanel({
  result,
  scaleHints,
}: {
  result: any;
  scaleHints: { label: string; range: string }[];
}) {
  const score = result?.score ?? "—";
  const activity = result?.activity ?? "—";
  const percent = typeof result?.percent === "number" ? Math.max(0, Math.min(100, result.percent)) : 0;

  return (
    <div className="mt-4">
      <div className="flex items-end justify-between">
        <div>
          <div className="text-xs text-ink-500">Score</div>
          <div className="text-4xl font-semibold text-ink-900">{score}</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-ink-500">Activity</div>
          <div className="text-base font-medium text-brand-700">{activity}</div>
        </div>
      </div>

      <div className="mt-4 h-2 rounded-full bg-ink-200 overflow-hidden">
        <div className="h-2 rounded-full bg-brand-600" style={{ width: `${percent}%` }} />
      </div>

      {result?.note && (
        <div className="mt-3 text-xs text-ink-500">
          {result.note}
        </div>
      )}

      {!result && (
        <div className="mt-3 text-sm text-ink-600">
          Enter values, then calculate.
        </div>
      )}
    </div>
  );
}
