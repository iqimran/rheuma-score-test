import { CalculatorCard } from "@/components/CalculatorCard";
import { calculatorsList } from "@/lib/calculators";

export function CalculatorGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {calculatorsList.map((c) => (
        <CalculatorCard
          key={c.key}
          title={c.title}
          desc={c.subtitle}
          href={c.href}
          badge={c.badge}
        />
      ))}
    </div>
  );
}
