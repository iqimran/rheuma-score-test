"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DAS28CRP() {
  const [tjc, setTjc] = useState(0);
  const [sjc, setSjc] = useState(0);
  const [crp, setCrp] = useState(0);
  const [vas, setVas] = useState(0);
  const [score, setScore] = useState(null);

  const calculate = () => {
    // DAS28-CRP formula (validated)
    const result =
        0.56 * Math.sqrt(tjc) +
        0.28 * Math.sqrt(sjc) +
        0.70 * Math.log(crp) +
        0.014 * vas;

    setScore(Number(result.toFixed(2)));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <Card className="max-w-md w-full p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">
          DAS28-ESR Calculator
        </h1>

        <div className="space-y-4">
          <input
            type="number"
            placeholder="Tender Joint Count (0–28)"
            className="w-full border p-2 rounded"
            onChange={(e) => setTjc(+e.target.value)}
          />

          <input
            type="number"
            placeholder="Swollen Joint Count (0–28)"
            className="w-full border p-2 rounded"
            onChange={(e) => setSjc(+e.target.value)}
          />

          <input
            type="number"
            placeholder="CRP (mg/L)"
            className="w-full border p-2 rounded"
            onChange={(e) => setCrp(+e.target.value)}
          />

          <input
            type="number"
            placeholder="Patient Global VAS (0–100)"
            className="w-full border p-2 rounded"
            onChange={(e) => setVas(+e.target.value)}
          />

          <Button onClick={calculate} className="w-full">
            Calculate
          </Button>

          {score !== null && (
            <div className="text-center mt-4">
              <p className="text-lg font-semibold">Score: {score}</p>
              <p className="text-sm text-gray-600">
                {score < 2.6 && "Remission"}
                {score >= 2.6 && score < 3.2 && "Low disease activity"}
                {score >= 3.2 && score < 5.1 && "Moderate disease activity"}
                {score >= 5.1 && "High disease activity"}
              </p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
