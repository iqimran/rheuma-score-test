"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ASDASCRP() {
  const [backPain, setBackPain] = useState(0);
  const [morningStiff, setMorningStiff] = useState(0);
  const [ptGlobal, setPtGlobal] = useState(0);
  const [peripheral, setPeripheral] = useState(0);
  const [crp, setCrp] = useState(0);
  const [score, setScore] = useState(null);

  const calculate = () => {
    const result =
      0.12 * backPain +
      0.06 * morningStiff +
      0.11 * ptGlobal +
      0.07 * peripheral +
      0.58 * Math.log(crp + 1);

    setScore(+result.toFixed(2));
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold">ASDAS-CRP Calculator</h1>

      <input type="number" placeholder="Back Pain (0-10)" onChange={(e) => setBackPain(+e.target.value)} />
      <input type="number" placeholder="Morning Stiffness (0-10)" onChange={(e) => setMorningStiff(+e.target.value)} />
      <input type="number" placeholder="Patient Global (0-10)" onChange={(e) => setPtGlobal(+e.target.value)} />
      <input type="number" placeholder="Peripheral Pain (0-10)" onChange={(e) => setPeripheral(+e.target.value)} />
      <input type="number" placeholder="CRP (mg/L)" onChange={(e) => setCrp(+e.target.value)} />

      <Button onClick={calculate}>Calculate ASDAS-CRP</Button>

      {score !== null && <p>ASDAS-CRP Score: {score}</p>}
    </div>
  );
}
