'use client';
import { useEffect, useState } from 'react';
import { fetchReports } from '../../lib/api';

export default function ReportsPage() {
  const [token, setToken] = useState<string | null>(null);
  const [reports, setReports] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const t = localStorage.getItem('api_token');
    setToken(t);
  }, []);

  useEffect(() => {
    if (!token) return;
    setLoading(true);
    fetchReports(token).then(r => {
      setReports(r);
    }).catch(err => {
      alert('Error fetching reports: ' + err.message);
    }).finally(() => setLoading(false));
  }, [token]);

  if (!token) {
    return (
      <div className="p-6 bg-white rounded shadow">
        <h2 className="text-lg font-semibold">Admin reports</h2>
        <p className="mt-2 text-gray-600">No API token found. Go to home and paste the admin API token and save it.</p>
        <a href="/" className="mt-4 inline-block text-sky-600">Back to calculator</a>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">All Reports (Admin)</h2>
      {loading && <div>Loading...</div>}
      {reports && (
        <div className="space-y-4">
          {reports.data.map((r: any) => (
            <div key={r.id} className="p-4 border rounded">
              <div className="flex justify-between">
                <div>
                  <div className="text-sm text-gray-500">#{r.id} — {r.created_at}</div>
                  <div className="font-semibold">Calories: {r.result_calories} kcal</div>
                  <div className="text-sm">Gender: {r.gender} Age: {r.age}</div>
                  <div className="text-sm">Weight: {r.weight_kg} kg Height: {r.height_display}</div>
                  <div className="text-sm">Activity: {r.activity_level.replace('_',' ')}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">User: {r.user ? r.user.email : 'guest'}</div>
                </div>
              </div>

              <div className="mt-3">
                <details>
                  <summary className="cursor-pointer text-sky-600">View breakdown</summary>
                  <pre className="mt-2 bg-gray-100 p-3 rounded text-xs overflow-auto">{JSON.stringify(r.breakdown, null, 2)}</pre>
                </details>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
