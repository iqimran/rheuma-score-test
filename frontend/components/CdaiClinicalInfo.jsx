import { Info, Lightbulb, Stethoscope, BookOpen } from 'lucide-react';

export default function CdaiClinicalInfo() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-blue-100 p-2 rounded-lg">
            <Stethoscope className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">When to Use</h3>
        </div>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold mt-0.5">•</span>
            <span>All patients with rheumatoid arthritis</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold mt-0.5">•</span>
            <span>Reassessing patients after initiating new RA medications</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold mt-0.5">•</span>
            <span>At every patient visit for optimal RA management</span>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-green-100 p-2 rounded-lg">
            <Lightbulb className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">Why Use CDAI</h3>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed">
          The CDAI provides a comprehensive disease severity overview using only clinical data,
          without requiring laboratory tests. It correlates closely with laboratory-based indices
          (SDAI, DAS-28) and helps guide therapy intensity based on activity levels.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-purple-100 p-2 rounded-lg">
            <BookOpen className="w-5 h-5 text-purple-600" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">Key Facts</h3>
        </div>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-purple-600 font-bold mt-0.5">✓</span>
            <span>
              <strong>Simple and Fast:</strong> No laboratory tests required, can be
              calculated at point of care
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 font-bold mt-0.5">✓</span>
            <span>
              <strong>Validated Tool:</strong> Widely accepted and used in clinical practice
              and research
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 font-bold mt-0.5">✓</span>
            <span>
              <strong>Treatment Guidance:</strong> Helps determine appropriate treatment
              intensity and monitoring frequency
            </span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
        <div className="flex items-start gap-2">
          <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-blue-900 mb-2">Clinical Guidance</h4>
            <p className="text-sm text-blue-800 leading-relaxed">
              Disease activity should be assessed at every patient visit. Early identification
              and aggressive treatment of high disease activity can prevent disease progression,
              joint damage, and long-term disability in patients with rheumatoid arthritis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
