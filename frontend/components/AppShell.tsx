import Link from "next/link";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="sticky top-0 z-20 border-b border-white/60 bg-white/70 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-ink-900 text-white grid place-items-center shadow-soft">Rx</div>
            <div className="leading-tight">
              <div className="font-semibold text-ink-900">RheumaCalc</div>
              {/* <div className="text-xs text-ink-500">UI micro-frontend</div> */}
            </div>
          </Link>
          <nav className="flex items-center gap-2">
            <Link className="btn-ghost" href="/">Calculators</Link>
          </nav>
        </div>
      </header>

      {children}

      {/* <footer className="mt-10 border-t border-ink-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-ink-500">
          Built with Next.js + Tailwind. Replace <span className="font-medium">NEXT_PUBLIC_API_URL</span> to point to your Laravel API.
        </div>
      </footer> */}
    </div>
  );
}
