"use client";

import { useState } from "react";

export default function CalculatorForm({ title, description, fields }) {
  const [form, setForm] = useState({});

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-slate-800">{title}</h1>
      <p className="text-slate-600 mt-2">{description}</p>

      <div className="mt-8 space-y-6 bg-white rounded-xl shadow p-6">
        {fields.map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-slate-700">
              {field.label}
            </label>
            <input
              type="number"
              min={field.min}
              max={field.max}
              className="mt-2 w-full border rounded-lg px-3 py-2"
              onChange={(e) =>
                handleChange(field.name, e.target.value)
              }
            />
          </div>
        ))}

        <button className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700">
          Calculate
        </button>
      </div>
    </main>
  );
}
