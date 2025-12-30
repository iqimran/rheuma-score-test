import { Info } from 'lucide-react';

function AsdasesrInfoSection() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center gap-2 mb-6">
        <Info className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-semibold text-slate-800">About</h2>
      </div>

      <div className="space-y-4 text-sm text-slate-600">
        <p>
          The <strong className="text-slate-800">ASDAS-ESR</strong> calculator helps
          clinicians track ankylosing spondylitis severity over time and guide
          treatment decisions.
        </p>

        <div className="pt-4 border-t border-slate-200">
          <h3 className="font-semibold text-slate-800 mb-2">Clinical Use</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Monitor disease progression</li>
            <li>Assess treatment effectiveness</li>
            <li>Guide therapeutic decisions</li>
            <li>Track patient outcomes</li>
          </ul>
        </div>

        <div className="pt-4 border-t border-slate-200">
          <h3 className="font-semibold text-slate-800 mb-2">Important Notes</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Most variables rely on patient reporting</li>
            <li>ESR is the sole objective measurement</li>
            <li>ASDAS-CRP is preferred when available</li>
            <li>This ESR variant is an acceptable alternative</li>
          </ul>
        </div>

        <div className="pt-4 border-t border-slate-200 bg-blue-50 rounded-lg p-4 -mx-2">
          <p className="text-xs text-blue-800">
            <strong>Disclaimer:</strong> This calculator is for educational and
            clinical reference purposes. Always consult with qualified healthcare
            professionals for medical decisions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AsdasesrInfoSection;
