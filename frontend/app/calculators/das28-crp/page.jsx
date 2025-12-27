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
      0.36 * Math.log(crp + 1) +
      0.014 * vas +
      0.96;

    setScore(Number(result.toFixed(2)));
  };

  const toggleFormula = () => {
    const formulaBox = document.getElementById("formulaBox");
    formulaBox.style.display = formulaBox.style.display === "none" ? "block" : "none";
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <Card className="max-w-md w-full p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">
          DAS28-CRP Calculator
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


        <button onClick={toggleFormula}>Show Formula</button>
        <div id="formulaBox" style={{ display: "none", marginTop: "12px" }}>
          <strong>DAS28-CRP Formula</strong><br />
          DAS28-CRP = 0.56 × √TJC28 + 0.28 × √SJC28 + 0.36 × ln(CRP + 1) + 0.014 × GH + 0.96
        </div>
      </Card>
    </div>
  );
}
