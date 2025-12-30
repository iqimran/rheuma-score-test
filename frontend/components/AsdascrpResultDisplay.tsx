import { TrendingUp, AlertCircle } from 'lucide-react';

interface ResultDisplayProps {
  result: number | null;
}

function ResultDisplay({ result }: ResultDisplayProps) {
  const getActivityLevel = (score: number) => {
    if (score < 1.3) {
      return {
        level: 'Inactive Disease',
        color: 'bg-green-500',
        textColor: 'text-green-700',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
      };
    } else if (score >= 1.3 && score <= 2.0) {
      return {
        level: 'Low Disease Activity',
        color: 'bg-yellow-500',
        textColor: 'text-yellow-700',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
      };
    } else if (score >= 2.1 && score <= 3.5) {
      return {
        level: 'High Disease Activity',
        color: 'bg-orange-500',
        textColor: 'text-orange-700',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-200',
      };
    } else {
      return {
        level: 'Very High Disease Activity',
        color: 'bg-red-500',
        textColor: 'text-red-700',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200',
      };
    }
  };

  if (result === null) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-6 h-6 text-slate-400" />
          <h2 className="text-2xl font-semibold text-slate-800">Result</h2>
        </div>
        <div className="text-center py-12">
          <AlertCircle className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-500">
            Enter all values to calculate the ASDAS-CRP score
          </p>
        </div>
      </div>
    );
  }

  const activity = getActivityLevel(result);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-semibold text-slate-800">Result</h2>
      </div>

      <div className="text-center space-y-6">
        <div>
          <p className="text-sm text-slate-600 mb-2">ASDAS-CRP Score</p>
          <div className="text-6xl font-bold text-slate-800">{result}</div>
        </div>

        <div
          className={`p-6 rounded-xl border-2 ${activity.bgColor} ${activity.borderColor}`}
        >
          <div className={`w-4 h-4 ${activity.color} rounded-full mx-auto mb-3`} />
          <p className={`text-xl font-semibold ${activity.textColor}`}>
            {activity.level}
          </p>
        </div>

        <div className="space-y-3 pt-4 border-t border-slate-200">
          <h3 className="font-semibold text-slate-800 text-sm">
            Interpretation Guide
          </h3>
          <div className="space-y-2 text-left text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-slate-600">
                <span className="font-medium">&lt;1.3:</span> Inactive
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <span className="text-slate-600">
                <span className="font-medium">1.3-2.0:</span> Low
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full" />
              <span className="text-slate-600">
                <span className="font-medium">2.1-3.5:</span> High
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="text-slate-600">
                <span className="font-medium">&gt;3.5:</span> Very High
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultDisplay;
