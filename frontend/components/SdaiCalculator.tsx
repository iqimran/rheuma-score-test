import { Calculator as CalcIcon, TrendingUp } from 'lucide-react';
import SdaiResults from './SdaiResults';

interface SdaiCalculatorProps {
  tenderJoints: string;
  setTenderJoints: (value: string) => void;
  swollenJoints: string;
  setSwollenJoints: (value: string) => void;
  crp: string;
  setCrp: (value: string) => void;
  patientGlobal: string;
  setPatientGlobal: (value: string) => void;
  providerGlobal: string;
  setProviderGlobal: (value: string) => void;
}

export default function SdaiCalculator({
  tenderJoints,
  setTenderJoints,
  swollenJoints,
  setSwollenJoints,
  crp,
  setCrp,
  patientGlobal,
  setPatientGlobal,
  providerGlobal,
  setProviderGlobal,
}: SdaiCalculatorProps) {

    const calculateSDAI = (): number | null => {
    const tj = parseFloat(tenderJoints);
    const sj = parseFloat(swollenJoints);
    const pg = parseFloat(patientGlobal);
    const prvg = parseFloat(providerGlobal);
    let crpMgL = parseFloat(crp);  

    if (isNaN(tj) || isNaN(sj) || isNaN(pg) || isNaN(prvg) || isNaN(crpMgL)) {
      return null;
    }
      
    // 🔹 Convert CRP from mg/L → mg/dL
    crpMgL = crpMgL / 10;

    const score = tj + sj + pg + prvg + crpMgL;
    return Number(score.toFixed(2));
  };

  const sdaiScore = calculateSDAI();

  const handleInputChange = (
    value: string,
    setter: (value: string) => void,
    max: number
  ) => {
    if (value === '' || value === '.') {
      setter(value);
      return;
    }

    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue >= 0 && numValue <= max) {
      setter(value);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
        <div className="flex items-center gap-2 text-white">
          <CalcIcon className="w-5 h-5" />
          <h2 className="text-xl font-semibold">Calculate SDAI Score</h2>
        </div>
      </div>

      <div className="p-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tender Joint Count
              <span className="text-gray-500 font-normal ml-2">(0-28 joints)</span>
            </label>
            <input
              type="number"
              value={tenderJoints}
              onChange={(e) => handleInputChange(e.target.value, setTenderJoints, 28)}
              placeholder="Enter number of tender joints"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-lg"
              min="0"
              max="28"
              step="1"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Swollen Joint Count
              <span className="text-gray-500 font-normal ml-2">(0-28 joints)</span>
            </label>
            <input
              type="number"
              value={swollenJoints}
              onChange={(e) => handleInputChange(e.target.value, setSwollenJoints, 28)}
              placeholder="Enter number of swollen joints"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-lg"
              min="0"
              max="28"
              step="1"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              C-Reactive Protein (CRP)
              <span className="text-gray-500 font-normal ml-2">(0-200 mg/dL)</span>
            </label>
            <input
              type="number"
              value={crp}
              onChange={(e) => handleInputChange(e.target.value, setCrp, 200)}
              placeholder="Enter CRP level in mg/dL (0-200)"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-lg"
              min="0"
              max="200"
              step="0.1"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Patient Global Assessment
              <span className="text-gray-500 font-normal ml-2">(0-10 scale)</span>
            </label>
            <p className="text-sm text-gray-600 mb-2 italic">
              Considering all the ways arthritis affects you, how well are you doing?
            </p>
            <input
              type="number"
              value={patientGlobal}
              onChange={(e) => handleInputChange(e.target.value, setPatientGlobal, 10)}
              placeholder="Enter patient assessment (0-10)"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-lg"
              min="0"
              max="10"
              step="0.1"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0 = Very Well</span>
              <span>10 = Very Poorly</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Provider Global Assessment
              <span className="text-gray-500 font-normal ml-2">(0-10 scale)</span>
            </label>
            <p className="text-sm text-gray-600 mb-2 italic">
              Disease Activity Classification
            </p>
            <input
              type="number"
              value={providerGlobal}
              onChange={(e) => handleInputChange(e.target.value, setProviderGlobal, 10)}
              placeholder="Enter provider assessment (0-10)"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-lg"
              min="0"
              max="10"
              step="0.1"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0 = No Activity</span>
              <span>10 = Maximum Activity</span>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-start gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Formula</h3>
              <p className="text-sm text-gray-700 font-mono bg-white px-3 py-2 rounded border border-blue-200">
                SDAI = Tender Joint Count + Swollen Joint Count + CRP (mg/dL) + Patient Global Activity + Provider Global Activity
              </p>
            </div>
          </div>
        </div>

        <SdaiResults score={sdaiScore} />
      </div>
    </div>
  );
}
