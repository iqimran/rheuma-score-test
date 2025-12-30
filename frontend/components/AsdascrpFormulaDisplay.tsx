import { BookOpen } from 'lucide-react';

function FormulaDisplay() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center gap-2 mb-6">
        <BookOpen className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-semibold text-slate-800">Formula</h2>
      </div>

      <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200">
        <div className="font-mono text-sm text-slate-800 leading-relaxed space-y-2">
          <div className="text-lg font-semibold text-blue-600 mb-4">
            ASDAS-CRP =
          </div>
          <div className="pl-4 space-y-1">
            <div>(0.12 × Back Pain)</div>
            <div>+ (0.06 × Morning Stiffness Duration)</div>
            <div>+ (0.11 × Patient Global Assessment)</div>
            <div>+ (0.07 × Peripheral Pain/Swelling)</div>
            <div>+ (0.58 × ln(CRP + 1))</div>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <h3 className="font-semibold text-slate-800">Variables:</h3>
        <ul className="space-y-2 text-sm text-slate-600">
          <li className="flex gap-2">
            <span className="font-medium text-slate-700">Back Pain:</span>
            Patient-reported (0-10 scale)
          </li>
          <li className="flex gap-2">
            <span className="font-medium text-slate-700">Morning Stiffness:</span>
            Duration severity (0-10 scale)
          </li>
          <li className="flex gap-2">
            <span className="font-medium text-slate-700">Patient Global:</span>
            Disease activity perception (0-10 scale)
          </li>
          <li className="flex gap-2">
            <span className="font-medium text-slate-700">Peripheral Pain:</span>
            Joints excluding spine (0-10 scale)
          </li>
          <li className="flex gap-2">
            <span className="font-medium text-slate-700">CRP:</span>
            CRP: C-Reactive Protein in mg/L (uses natural logarithm)
          </li>
        </ul>
          <p className="mt-4 text-slate-600">
          The logarithmic transformation of CRP (ln(CRP + 1)) receives the highest weighting coefficient (0.58), making it the most influential component of the score.
        </p>
      </div>
    </div>
  );
}

export default FormulaDisplay;
