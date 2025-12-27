import { AlertCircle, CheckCircle, TrendingUp, AlertTriangle } from 'lucide-react';

interface CdaiResultsProps {
  score: number | null;
}

export default function CdaiResults({ score }: CdaiResultsProps) {
  if (score === null) {
    return (
      <div className="mt-8 p-6 bg-gray-50 rounded-lg border-2 border-gray-200 text-center">
        <p className="text-gray-500">Enter all values to calculate CDAI score</p>
      </div>
    );
  }

  const getSeverityInfo = (cdai: number) => {
    if (cdai <= 2.8) {
      return {
        level: 'Remission',
        color: 'green',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-300',
        textColor: 'text-green-800',
        icon: CheckCircle,
        description: 'Patient is in remission with minimal disease activity',
      };
    } else if (cdai <= 10.0) {
      return {
        level: 'Low Disease Activity',
        color: 'blue',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-300',
        textColor: 'text-blue-800',
        icon: TrendingUp,
        description: 'Patient has low disease activity with good control',
      };
    } else if (cdai <= 22.0) {
      return {
        level: 'Moderate Disease Activity',
        color: 'orange',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-300',
        textColor: 'text-orange-800',
        icon: AlertTriangle,
        description: 'Patient has moderate disease activity requiring monitoring',
      };
    } else {
      return {
        level: 'High Disease Activity',
        color: 'red',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-300',
        textColor: 'text-red-800',
        icon: AlertCircle,
        description: 'Patient has high disease activity requiring aggressive treatment',
      };
    }
  };

  const severity = getSeverityInfo(score);
  const Icon = severity.icon;

  return (
    <div className="mt-8 space-y-4">
      <div className={`p-6 rounded-xl border-2 ${severity.bgColor} ${severity.borderColor}`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Icon className={`w-6 h-6 ${severity.textColor}`} />
            <h3 className="text-lg font-semibold text-gray-900">CDAI Score</h3>
          </div>
          <div className={`text-4xl font-bold ${severity.textColor}`}>
            {score.toFixed(1)}
          </div>
        </div>

        <div className="space-y-2">
          <div className={`inline-block px-4 py-2 rounded-lg font-semibold ${severity.textColor} bg-white border ${severity.borderColor}`}>
            {severity.level}
          </div>
          <p className="text-gray-700 mt-3">{severity.description}</p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-3">Interpretation Guide</h4>
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between py-2 border-b border-gray-200">
            <span className="font-medium text-gray-700">≤ 2.8</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-medium">
              Remission
            </span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-200">
            <span className="font-medium text-gray-700">&gt; 2.8 - 10.0</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
              Low Activity
            </span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-200">
            <span className="font-medium text-gray-700">&gt; 10.0 - 22.0</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full font-medium">
              Moderate Activity
            </span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="font-medium text-gray-700">&gt; 22.0</span>
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full font-medium">
              High Activity
            </span>
          </div>
        </div>
      </div>

      {score > 22.0 && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-red-900 mb-1">Clinical Alert</h4>
              <p className="text-sm text-red-800">
                Patients with high activity scores should receive early and aggressive RA
                medications with close follow-up, as attaining low activity or remission-level
                scores may prevent disease progression and disability.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
