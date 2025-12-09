export const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function postReport(payload: any, token?: string) {
  const res = await fetch(`${API_BASE}/api/reports`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

// export async function fetchReports(token: string, page = 1) {
//   const res = await fetch(`${API_BASE}/api/reports?page=${page}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   if (!res.ok) throw new Error(await res.text());
//   return res.json();
// }


export async function fetchReports(token: string) {
  const response = await fetch('/api/reports', {
    method: 'GET',

    headers: {
      Authorization: `Bearer ${token}`,

      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch reports');
  }

  return response.json();
}
