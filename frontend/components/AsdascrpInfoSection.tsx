import { Info } from 'lucide-react';

function AsdascrpInfoSection() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center gap-2 mb-6">
        <Info className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-semibold text-slate-800">About</h2>
      </div>

      <div className="space-y-4 text-sm text-slate-600">
        <p>
          The <strong className="text-slate-800">ASDAS-CRP</strong> calculator helps
          clinicians track ankylosing spondylitis severity over time and guide
          treatment decisions.
        </p>

        <div className="pt-4 border-t border-slate-200">
          <h3 className="font-semibold text-slate-800 mb-2">Clinical Use</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li> Use in patients with confirmed ankylosing spondylitis to assess disease activity and guide treatment decisions.</li>
          </ul>
        </div>

        <div className="pt-4 border-t border-slate-200">
          <h3 className="font-semibold text-slate-800 mb-2">Clinical Context</h3>
          <p className="text-sm text-slate-700">
            ASDAS-CRP provides a composite measure of disease activity incorporating both patient-reported outcomes and objective inflammatory markers. It is particularly useful for:
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Monitoring treatment response</li>
            <li>Determining when to escalate or de-escalate therapy</li>
            <li>Clinical trial endpoints</li>
            <li>Standardized disease activity assessment</li>
          </ul>
        </div>

        <div className="pt-4 border-t border-slate-200">
          <h3 className="font-semibold text-slate-800 mb-2">Limitations</h3>
          <ul className="space-y-2 list-disc list-inside">
              <li>Requires laboratory CRP measurement</li>
              <li>Patient-reported measures may be subjective</li>
              <li>May not capture all aspects of disease burden</li>
          </ul>
        </div>

        {/* <div className="pt-4 border-t border-slate-200 bg-blue-50 rounded-lg p-4 -mx-2">
          <p className="text-xs text-blue-800">
            <strong>Disclaimer:</strong> This calculator is for educational and
            clinical reference purposes. Always consult with qualified healthcare
            professionals for medical decisions.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default AsdascrpInfoSection;
