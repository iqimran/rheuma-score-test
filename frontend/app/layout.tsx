
import { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Calorie Calculator',
  description: 'Next + Tailwind Calorie Calculator',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className="bg-gray-100">
        <div className="max-w-6xl mx-auto p-6">
          {children}
        </div>
      </body>
    </html>
  );
}
