'use client';

import { useState, useMemo } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { Activity, Info, Calculator as CalcIcon, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DAS28Calculator() {
  const [patientId, setPatientId] = useState('');
  const [tenderJoints, setTenderJoints] = useState('');
  const [swollenJoints, setSwollenJoints] = useState('');
  const [esr, setEsr] = useState('');
  const [crp, setCrp] = useState('');
  const [globalHealth, setGlobalHealth] = useState([50]);

  /* -------------------- parsed values -------------------- */
  const tjc = Number(tenderJoints) || 0;
  const sjc = Number(swollenJoints) || 0;
  const esrVal = Number(esr);
  const crpVal = Number(crp);
  const gh = globalHealth[0];

  const mode = esr ? 'ESR' : crp ? 'CRP' : null;

  /* -------------------- calculation -------------------- */
  const result = useMemo(() => {
    if (!mode || tjc < 0 || tjc > 28 || sjc < 0 || sjc > 28) return null;

    const getInterpretation = (score) => {
      if (score < 2.6) return 'Remission';
      if (score < 3.2) return 'Low Disease Activity';
      if (score <= 5.1) return 'Moderate Disease Activity';
      return 'High Disease Activity';
    };

    const getColor = (score) => {
      if (score < 2.6) return 'text-green-600';
      if (score < 3.2) return 'text-blue-600';
      if (score <= 5.1) return 'text-yellow-600';
      return 'text-red-600';
    };

    if (mode === 'ESR' && esrVal > 0) {
      const score =
        0.56 * Math.sqrt(tjc) +
        0.28 * Math.sqrt(sjc) +
        0.7 * Math.log(esrVal) +
        0.014 * gh;

      return {
        type: 'ESR',
        score,
        interpretation: getInterpretation(score),
        color: getColor(score),
      };
    }

    if (mode === 'CRP' && crpVal >= 0) {
      const score =
        0.56 * Math.sqrt(tjc) +
        0.28 * Math.sqrt(sjc) +
        0.36 * Math.log(crpVal + 1) +
        0.014 * gh +
        0.96;

      return {
        type: 'CRP',
        score,
        interpretation: getInterpretation(score),
        color: getColor(score),
      };
    }

    return null;
  }, [tjc, sjc, esrVal, crpVal, gh, mode]);

  const handlePrint = () => window.print();

  /* -------------------- UI -------------------- */
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* HEADER */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-blue-600 p-3 rounded-xl">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold">DAS28 Calculator</h1>
          </div>
          <p className="text-slate-600">
            Disease Activity Score in 28 Joints
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* INPUT PANEL */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-lg border-slate-200">
                          
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <CalcIcon className="h-5 w-5" />
                  Calculate DAS28
                </CardTitle>
              </CardHeader>
                          
             <CardContent className="space-y-6 pt-6">
                  <div>
                    <Label htmlFor="patientId" className="text-base font-semibold text-slate-700">Patient ID</Label>
                    <Input
                        id="patientId"
                        placeholder="Enter patient identifier"
                        type="number"
                        value={patientId}
                        onChange={(e) => setPatientId(e.target.value)}
                        className="mt-2 h-11"
                    />
                 </div>
                
                  <Separator />
                              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <Label htmlFor="tenderJoints" className="text-base font-semibold text-slate-700">Tender Joints (TJC)</Label>
                        <p className="text-xs text-slate-500 mt-1 mb-2">Range: 0-28 joints</p>
                        <Input
                        id="tenderJoints"
                        min="0"
                        max="28"
                        placeholder="0"
                        type="number"
                        value={tenderJoints}
                        onChange={(e) => setTenderJoints(e.target.value)}
                        className="h-11"
                        />
                    </div>
                    
                    <div>
                        <Label htmlFor="swollenJoints" className="text-base font-semibold text-slate-700">
                        Swollen Joints (SJC)
                        </Label>
                        <p className="text-xs text-slate-500 mt-1 mb-2">Range: 0-28 joints</p>
                        <Input
                        id="swollenJoints"
                        type="number"
                        min="0"
                        max="28"
                        placeholder="0"
                        value={swollenJoints}
                        onChange={(e) => setSwollenJoints(e.target.value)}
                        className="h-11"
                        />
                    </div>
                </div>
                    
                 <Separator />
                              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="esr" className="text-base font-semibold text-slate-700">
                      ESR (mm/hr)
                    </Label>
                    <p className="text-xs text-slate-500 mt-1 mb-2">Erythrocyte Sedimentation Rate</p>
                    <Input
                      id="esr"
                      type="number"
                      min="0"
                      placeholder="0"
                      value={esr}
                        onChange={(e) => {
                            setEsr(e.target.value);
                            if (e.target.value) setCrp(''); // Clear CRP if ESR is entered
                        }
                        }
                      className="h-11"
                    />
                  </div>

                  <div>
                    <Label htmlFor="crp" className="text-base font-semibold text-slate-700">
                      CRP (mg/L)
                    </Label>
                    <p className="text-xs text-slate-500 mt-1 mb-2">C-Reactive Protein</p>
                    <Input
                      id="crp"
                      type="number"
                      min="0"
                      step="0.1"
                      placeholder="0"
                      value={crp}
                        onChange={(e) => {
                            setCrp(e.target.value);
                            if (e.target.value) setEsr(''); // Clear ESR if CRP is entered
                        } }
                      className="h-11"
                    />
                  </div>
                </div>

                 <Separator />
                              
                <div>
                  <Label className="text-base font-semibold text-slate-700">
                    Patient Global Health Assessment (VAS)
                  </Label>
                  <p className="text-xs text-slate-500 mt-1 mb-4">
                    How do you feel today? (0 = Best, 100 = Worst)
                  </p>
                  <div className="px-2">
                    <Slider
                      value={globalHealth}
                      onValueChange={setGlobalHealth}
                      max={100}
                      step={1}
                      className="my-6"
                    />
                    <div className="flex justify-between text-sm mt-2">
                      <span className="text-green-600 font-medium">0 - Best</span>
                      <span className="text-lg font-bold text-blue-600">{globalHealth[0]}</span>
                      <span className="text-red-600 font-medium">Worst - 100</span>
                    </div>
                 </div>
                </div>
                            
            </CardContent>
                          
            </Card>

            {/* FORMULA */}
            {mode && (
       
            <Card className="shadow-lg border-blue-200 bg-gradient-to-br from-blue-50 to-white">

            <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
                <Info className="h-5 w-5" />
                DAS28 Formula
            </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-blue-100">          
            {mode === 'ESR' && (
            <>
            <p className="font-semibold text-slate-800 mb-2">DAS28-ESR Formula:</p>
            <code className="text-sm text-slate-600 block overflow-x-auto">
            DAS28-ESR = 0.56√TJC + 0.28√SJC + 0.70 ln(ESR) + 0.014 GH
            </code>
            </>

            )}
                    
            {mode === 'CRP' && (
            <>
            <p className="font-semibold text-slate-800 mb-2">DAS28-CRP Formula:</p>
            <code className="text-sm text-slate-600 block overflow-x-auto">
            DAS28-CRP = 0.56 × √(TJC) + 0.28 × √(SJC) + 0.36 × ln(CRP + 1) + 0.014 × GH + 0.96
            </code>
            </>
            )}
            </div>
                
            <div className="text-xs text-slate-600 mt-4 space-y-1">
            <p><strong>TJC:</strong> Tender Joint Count (0-28)</p>
            <p><strong>SJC:</strong> Swollen Joint Count (0-28)</p>
            <p><strong>ESR:</strong> Erythrocyte Sedimentation Rate (mm/hr)</p>
            <p><strong>CRP:</strong> C-Reactive Protein (mg/L)</p>
            <p><strong>GH:</strong> General Health (0-100 VAS scale)</p>
            </div>
            </CardContent>

            </Card>
           
            )}
          </div>

          {/* RESULT PANEL */}
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                Results
                <Button size="sm" variant="outline" onClick={handlePrint}>
                  <Printer className="h-4 w-4" />
                </Button>
              </CardTitle>
              <CardDescription>Disease activity score</CardDescription>
            </CardHeader>

            <CardContent>
              {result ? (
                <div className="space-y-3">
                  <p className="text-sm">DAS28-{result.type}</p>
                  <p className={`text-4xl font-bold ${result.color}`}>
                    {result.score.toFixed(2)}
                  </p>
                  <p className={`font-semibold ${result.color}`}>
                    {result.interpretation}
                  </p>
                </div>
              ) : (
                <p className="text-sm text-slate-500">
                  Enter values to calculate score
                </p>
              )}

              <Separator className="my-4" />

              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Clinical Note</AlertTitle>
                <AlertDescription>
                    The DAS28 is a composite measure used to assess disease activity in rheumatoid arthritis. It should be used in conjunction with clinical judgment and other diagnostic criteria.
                </AlertDescription>
              </Alert>
            </CardContent>
                      
          </Card>
                  
        </div>

            {/* ABOUT */}
        <Card className="mt-8 shadow-lg border-slate-200">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50">
                <CardTitle>About DAS28</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
                <div className="prose prose-slate max-w-none">
                <p className="text-slate-700">
                    The Disease Activity Score 28 (DAS28) is a validated index used to measure disease activity
                    in patients with rheumatoid arthritis (RA). It combines information from swollen joints,
                    tender joints, acute phase reactants (ESR or CRP), and patient global assessment.
                </p>
                <p className="text-slate-700 mt-4">
                    <strong>Clinical Applications:</strong>
                </p>
                <ul className="text-slate-700 mt-2 space-y-1">
                    <li>Monitoring disease progression over time</li>
                    <li>Assessing response to treatment</li>
                    <li>Making treatment decisions</li>
                    <li>Clinical research and trials</li>
                </ul>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
