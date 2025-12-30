import { Info, Lightbulb, Stethoscope, BookOpen } from 'lucide-react';

export default function SdaiClinicalInfo() {
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
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-green-100 p-2 rounded-lg">
            <Lightbulb className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">Why Use SDAI</h3>
        </div>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold mt-0.5">•</span>
            <span>The Simplidied Disease Activity Index (SDAI) provides an excellent overview of a patient's disease severity (it correlates closely with the CDAI which does not require laboratory data) and the DAS-28.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold mt-0.5">•</span>
            <span>The SDAI can also help guide therapy based on severity of disease.</span>
          </li>
        </ul>
      </div>

      {/* <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
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
      </div> */}

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
        <div className="flex items-start gap-2">
          <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-blue-900 mb-2">Clinical Context</h4>
            <p>
              The Simple Disease Activity Index (SDAI) is a validated composite score used to assess disease activity in rheumatoid arthritis patients.
            </p>
            <p>
              It combines objective clinical findings (tender and swollen joint counts), laboratory inflammation markers (CRP), and subjective assessments from both the patient and healthcare provider.
            </p>
            <p className="font-semibold pt-2">
              This calculator is intended for clinical decision support and should be used in conjunction with professional medical judgment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
