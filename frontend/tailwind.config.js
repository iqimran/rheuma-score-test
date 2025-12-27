/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        ink: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1f2937',
          900: '#0f172a',
        },
      },
      boxShadow: {
        glass: '0 10px 30px rgba(2, 6, 23, 0.10)',
        soft: '0 8px 20px rgba(2, 6, 23, 0.08)',
      },
      borderRadius: {
        '2xl': '1.25rem',
      },
      backgroundImage: {
        hero: 'radial-gradient(1200px 600px at 10% 10%, rgba(34,211,238,0.25), transparent 55%), radial-gradient(1000px 500px at 90% 0%, rgba(99,102,241,0.22), transparent 45%), radial-gradient(900px 500px at 50% 100%, rgba(16,185,129,0.18), transparent 55%)',
      },
    },
  },
  plugins: [],
};
