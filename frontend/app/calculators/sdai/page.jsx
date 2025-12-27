"use client";

import { useState } from 'react';
import SdaiCalculator from '@/components/SdaiCalculator';
import SdaiClinicalInfo from '@/components/SdaiClinicalInfo';
import { Activity } from 'lucide-react';

function SdaiCalculatorPage() {
  const [tenderJoints, setTenderJoints] = useState('');
  const [swollenJoints, setSwollenJoints] = useState('');
  const [crp, setCrp] = useState('');
  const [patientGlobal, setPatientGlobal] = useState('');
  const [providerGlobal, setProviderGlobal] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-blue-600 p-3 rounded-xl">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">SDAI Calculator</h1>
          </div>
          <p className="text-xl text-gray-600">
            Simple Disease Activity Index for Rheumatoid Arthritis
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SdaiCalculator
              tenderJoints={tenderJoints}
              setTenderJoints={setTenderJoints}
              swollenJoints={swollenJoints}
              setSwollenJoints={setSwollenJoints}
              crp={crp}
              setCrp={setCrp}
              patientGlobal={patientGlobal}
              setPatientGlobal={setPatientGlobal}
              providerGlobal={providerGlobal}
              setProviderGlobal={setProviderGlobal}
            />
          </div>

          <div className="lg:col-span-1">
            <SdaiClinicalInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SdaiCalculatorPage;
