interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  min: number;
  max: number;
  step: number;
  unit?: string;
  description: string;
}

function InputField({
  label,
  name,
  value,
  onChange,
  min,
  max,
  step,
  unit,
  description,
}: InputFieldProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '' || (parseFloat(val) >= min && parseFloat(val) <= max)) {
      onChange(name, val);
    }
  };

  const percentage = value ? ((parseFloat(value) - min) / (max - min)) * 100 : 0;

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-semibold text-slate-700">{label}</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={value}
            onChange={handleInputChange}
            min={min}
            max={max}
            step={step}
            className="w-20 px-3 py-1.5 border-2 border-slate-200 rounded-lg text-right font-medium text-slate-800 focus:border-blue-500 focus:outline-none"
            placeholder="0"
          />
          {unit && <span className="text-sm text-slate-600 font-medium">{unit}</span>}
        </div>
      </div>

      <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="absolute h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="text-xs text-slate-500">{description}</p>
    </div>
  );
}

export default InputField;
