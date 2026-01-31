import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "../components/AppShell";

export const metadata: Metadata = {
  icons: {
    icon: "/remo-favicon.png",
  },
  title: "Rheumatology Calculators",
  description: "DAS28, CDAI, SDAI, ASDAS calculators (frontend UI)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-ink-50">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
