"use client";

import { useState, useEffect } from 'react';
import { Activity, AlertCircle, Info } from 'lucide-react';

function DAS28ESR() {
  const [tenderJointCount, setTenderJointCount] = useState(0);
  const [swollenJointCount, setSwollenJointCount] = useState(0);
  const [crp, setCrp] = useState(0);
  const [globalHealth, setGlobalHealth] = useState(5);
  const [das28Score, setDas28Score] = useState(null);

  const calculateDAS28 = () => {
    const tjcSqrt = Math.sqrt(tenderJointCount);
    const sjcSqrt = Math.sqrt(swollenJointCount);
    const crpLn = Math.log(crp + 1);
    const ghScaled = globalHealth * 10;

    const score = (0.56 * tjcSqrt) + (0.28 * sjcSqrt) + (0.70 * crpLn) + (0.014 * ghScaled);

    return score;
  };

  useEffect(() => {
    const score = calculateDAS28();
    setDas28Score(score);
  }, [tenderJointCount, swollenJointCount, crp, globalHealth]);

  const getInterpretation = (score) => {
    if (score < 2.6) {
      return { label: 'Remission', color: 'bg-emerald-100 border-emerald-400 text-emerald-800', severity: 'Disease in remission' };
    } else if (score >= 2.6 && score < 3.2) {
      return { label: 'Low Disease Activity', color: 'bg-green-100 border-green-400 text-green-800', severity: 'Low disease activity' };
    } else if (score >= 3.2 && score <= 5.1) {
      return { label: 'Moderate Disease Activity', color: 'bg-amber-100 border-amber-400 text-amber-800', severity: 'Moderate disease activity' };
    } else {
      return { label: 'High Disease Activity', color: 'bg-red-100 border-red-400 text-red-800', severity: 'High disease activity' };
    }
  };

  const interpretation = das28Score !== null ? getInterpretation(das28Score) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Activity className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-slate-800">DAS28-ESR Calculator</h1>
          </div>
          <p className="text-slate-600 text-center">Disease Activity Score-28 for Rheumatoid Arthritis with ESR</p>
        </header>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-6">Clinical Parameters</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Tender Joint Count (0-28 joints)
                  </label>
                  <input
                    type="text"
                    min="0"
                    max="28"
                    value={tenderJointCount}
                    onChange={(e) => setTenderJointCount(Math.min(28, Math.max(0, parseInt(e.target.value) || 0)))}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                  <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                    <span>Min: 0</span>
                    <span>Max: 28</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Swollen Joint Count (0-28 joints)
                  </label>
                  <input
                    type="text"
                    min="0"
                    max="28"
                    value={swollenJointCount}
                    onChange={(e) => setSwollenJointCount(Math.min(28, Math.max(0, parseInt(e.target.value) || 0)))}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                  <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                    <span>Min: 0</span>
                    <span>Max: 28</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    C-Reactive Protein (ESR) in mg/L
                  </label>
                  <input
                    type="text"
                    min="0"
                    step="0.1"
                    value={crp}
                    onChange={(e) => setCrp(Math.max(0, parseFloat(e.target.value) || 0))}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                  <p className="mt-1 text-xs text-slate-500">Enter ESR value in mg/L</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Patient Global Health Assessment (0-10)
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.5"
                    value={globalHealth}
                    onChange={(e) => setGlobalHealth(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-slate-600">0 (Very well)</span>
                    <span className="text-2xl font-bold text-blue-600">{globalHealth.toFixed(1)}</span>
                    <span className="text-sm text-slate-600">10 (Very poor)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-600" />
                Formula & Calculation
              </h2>

              <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto">
                <div className="text-slate-700 mb-3">
                  <strong>DAS28-ESR</strong> = 0.56×√(TJC) + 0.28×√(SJC) + 0.36×ln(CRP+1) + 0.014×GH×10 + 0.96
                </div>
              </div>

              {das28Score !== null && (
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between">
                    <span>0.56 × √({tenderJointCount}) =</span>
                    <span className="font-semibold">{(0.56 * Math.sqrt(tenderJointCount)).toFixed(3)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>0.28 × √({swollenJointCount}) =</span>
                    <span className="font-semibold">{(0.28 * Math.sqrt(swollenJointCount)).toFixed(3)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>0.36 × ln({crp}+1) =</span>
                    <span className="font-semibold">{(0.36 * Math.log(crp + 1)).toFixed(3)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>0.014 × {globalHealth} × 10 =</span>
                    <span className="font-semibold">{(0.014 * globalHealth * 10).toFixed(3)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Constant =</span>
                    <span className="font-semibold">0.960</span>
                  </div>
                  <div className="border-t border-slate-300 pt-2 mt-2"></div>
                  <div className="flex justify-between text-base font-bold text-slate-800">
                    <span>DAS28-ESR Score =</span>
                    <span className="text-blue-600">{das28Score.toFixed(2)}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            {das28Score !== null && interpretation && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-xl font-semibold text-slate-800 mb-4">Result</h2>

                <div className={`rounded-lg border-2 p-4 mb-4 ${interpretation.color}`}>
                  <div className="text-4xl font-bold mb-2">{das28Score.toFixed(2)}</div>
                  <div className="text-lg font-semibold">{interpretation.label}</div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="text-slate-600">{'< 2.6'}</span>
                    <span className="font-medium text-emerald-700">Remission</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="text-slate-600">2.6 - 3.2</span>
                    <span className="font-medium text-green-700">Low Activity</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="text-slate-600">3.2 - 5.1</span>
                    <span className="font-medium text-amber-700">Moderate Activity</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-600">{'> 5.1'}</span>
                    <span className="font-medium text-red-700">High Activity</span>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Clinical Pearls</h3>
                  <ul className="text-sm text-blue-800 space-y-2">
                    <li>• A "treat to target" approach is recommended</li>
                    <li>• Joint assessment excludes feet</li>
                    <li>• Inter-rater variability exists in joint classification</li>
                    <li>• Lower scores indicate better disease control</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-800 mb-3">About DAS28-ESR</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                The Disease Activity Score-28 with ESR is a validated measure of rheumatoid arthritis disease activity.
                It combines objective and subjective measures to provide a comprehensive assessment of disease status and
                treatment response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DAS28ESR;
