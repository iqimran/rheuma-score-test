export default function CalculatorLayout({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-800">{title}</h2>
        <p className="text-slate-600">{description}</p>
      </div>

      <div className="bg-white/70 backdrop-blur rounded-xl shadow p-6">
        {children}
      </div>
    </section>
  );
}
