import { useState, useEffect } from 'react';
import InputField from '../components/fields/InputField';

interface CalculatorFormProps {
  onCalculate: (result: number) => void;
}

interface FormValues {
  backPain: string;
  morningStiffness: string;
  patientGlobal: string;
  peripheralPain: string;
  esr: string;
}

function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  const [values, setValues] = useState<FormValues>({
    backPain: '',
    morningStiffness: '',
    patientGlobal: '',
    peripheralPain: '',
    esr: '',
  });

  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const { backPain, morningStiffness, patientGlobal, peripheralPain, esr } = values;

    if (backPain && morningStiffness && patientGlobal && peripheralPain && esr) {
      const bp = parseFloat(backPain);
      const ms = parseFloat(morningStiffness);
      const pg = parseFloat(patientGlobal);
      const pp = parseFloat(peripheralPain);
      const esrValue = parseFloat(esr);

      if (!isNaN(bp) && !isNaN(ms) && !isNaN(pg) && !isNaN(pp) && !isNaN(esrValue)) {
        const result =
          0.08 * bp +
          0.07 * ms +
          0.11 * pg +
          0.09 * pp +
          0.29 * Math.sqrt(esrValue);

        onCalculate(parseFloat(result.toFixed(2)));
      }
    } else {
      onCalculate(null as any);
    }
  }, [values, onCalculate]);

  const handleReset = () => {
    setValues({
      backPain: '',
      morningStiffness: '',
      patientGlobal: '',
      peripheralPain: '',
      esr: '',
    });
  };

  return (
    <div className="space-y-6">
      <InputField
        label="Back Pain"
        name="backPain"
        value={values.backPain}
        onChange={handleChange}
        min={0}
        max={10}
        step={0.1}
        description="Patient-reported level of AS neck, back, or hip pain (0-10 scale)"
      />

      <InputField
        label="Duration of Morning Stiffness"
        name="morningStiffness"
        value={values.morningStiffness}
        onChange={handleChange}
        min={0}
        max={10}
        step={0.1}
        description="Patient-reported severity upon waking (0-10 scale)"
      />

      <InputField
        label="Patient Global Assessment"
        name="patientGlobal"
        value={values.patientGlobal}
        onChange={handleChange}
        min={0}
        max={10}
        step={0.1}
        description="Patient's perception of disease activity over the past week (0-10 scale)"
      />

      <InputField
        label="Peripheral Pain/Swelling"
        name="peripheralPain"
        value={values.peripheralPain}
        onChange={handleChange}
        min={0}
        max={10}
        step={0.1}
        description="Patient-reported pain/swelling in joints excluding neck, back, or hips (0-10 scale)"
      />

      <InputField
        label="ESR (Erythrocyte Sedimentation Rate)"
        name="esr"
        value={values.esr}
        onChange={handleChange}
        min={0}
        max={200}
        step={1}
        unit="mm/h"
        description="Laboratory value in millimeters per hour"
      />

      <button
        onClick={handleReset}
        className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-colors"
      >
        Reset All Fields
      </button>
    </div>
  );
}

export default CalculatorForm;
