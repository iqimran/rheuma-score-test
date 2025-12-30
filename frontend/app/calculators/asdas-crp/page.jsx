"use client";

import { useState } from "react";
import { Calculator, Info, Activity } from 'lucide-react';
import CalculatorForm from '@/components/AsdascrpCalculatorForm';
import ResultDisplay from '@/components/AsdascrpResultDisplay';
import FormulaDisplay from '@/components/AsdascrpFormulaDisplay';
import InfoSection from '@/components/AsdascrpInfoSection';

export default function ASDASCRP() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Activity className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-slate-800">
              ASDAS-CRP Calculator
            </h1>
          </div>
          <p className="text-slate-600 text-lg">
            Ankylosing Spondylitis Disease Activity Score with CRP
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-2 mb-6">
                <Calculator className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-slate-800">
                  Patient Assessment
                </h2>
              </div>
              <CalculatorForm onCalculate={setResult} />
            </div>

            <FormulaDisplay />
          </div>

          <div className="space-y-6">
            <ResultDisplay result={result} />
            <InfoSection />
          </div>
        </div>

        {/* <footer className="mt-12 text-center text-slate-500 text-sm">
          <p>© 2025 ASDAS-ESR Calculator • For educational and clinical use</p>
        </footer> */}
      </div>
    </div>
  );
}
