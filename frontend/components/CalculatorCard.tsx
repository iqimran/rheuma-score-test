import Link from "next/link";

interface CalculatorCardProps {
  title: string;
  desc: string;
  href: string;
}

export function CalculatorCard({ title, desc, href }: CalculatorCardProps) {
  return (
    <Link href={href} className="group card p-5 hover:shadow-glass transition">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-lg font-semibold text-ink-900 group-hover:text-brand-700 transition">
            {title}
          </div>
          <div className="mt-1 text-sm text-ink-600">{desc}</div>
        </div>
        {/* <div className="shrink-0 rounded-xl border border-ink-100 bg-ink-50 px-3 py-1 text-xs text-ink-600">
          {badge ?? "Calculator"}
        </div> */}
      </div>
      <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-700">
        Open <span className="transition group-hover:translate-x-0.5">→</span>
      </div>
    </Link>
  );
}
