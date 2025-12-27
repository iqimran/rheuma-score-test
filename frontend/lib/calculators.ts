import { CalculatorConfig } from "../lib/types";

export const calculators: Record<string, CalculatorConfig> = {
  das28_crp: {
    key: "das28_crp",
    href: "/calculators/das28-crp",
    title: "DAS28 – CRP",
    subtitle: "Disease Activity Score-28 for Rheumatoid Arthritis using CRP (inputs match referenced tools).",
    badge: "RA • CRP",
    apiType: "das28_crp",
    fields: [
      { name: "tjc", label: "Tender Joint Count (0–28)", min: 0, max: 28, step: 1, defaultValue: 0 },
      { name: "sjc", label: "Swollen Joint Count (0–28)", min: 0, max: 28, step: 1, defaultValue: 0 },
      { name: "crp", label: "CRP", hint: "C-reactive protein", unit: "mg/L", min: 0, max: 300, step: 0.1, defaultValue: 0 },
      { name: "pga", label: "Patient Global Assessment", hint: "0–100 scale", kind: "slider", unit: "", min: 0, max: 100, step: 1, defaultValue: 0 },
    ],
    scaleHints: [
      { label: "Remission", range: "≤ 2.6" },
      { label: "Low", range: "> 2.6 to ≤ 3.2" },
      { label: "Moderate", range: "> 3.2 to ≤ 5.1" },
      { label: "High", range: "> 5.1" },
    ],
  },

  das28_esr: {
    key: "das28_esr",
    href: "/calculators/das28-esr",
    title: "DAS28 – ESR",
    subtitle: "Disease Activity Score-28 for Rheumatoid Arthritis using ESR (inputs match referenced tools).",
    badge: "RA • ESR",
    apiType: "das28_esr",
    fields: [
      { name: "tjc", label: "Tender Joint Count (0–28)", min: 0, max: 28, step: 1, defaultValue: 0 },
      { name: "sjc", label: "Swollen Joint Count (0–28)", min: 0, max: 28, step: 1, defaultValue: 0 },
      { name: "esr", label: "ESR", hint: "Erythrocyte sedimentation rate", unit: "mm/hr", min: 0, max: 200, step: 1, defaultValue: 0 },
      { name: "pga", label: "Patient Global Assessment", hint: "0–100 scale", kind: "slider", min: 0, max: 100, step: 1, defaultValue: 0 },
    ],
    scaleHints: [
      { label: "Remission", range: "≤ 2.6" },
      { label: "Low", range: "> 2.6 to ≤ 3.2" },
      { label: "Moderate", range: "> 3.2 to ≤ 5.1" },
      { label: "High", range: "> 5.1" },
    ],
  },

  cdai: {
    key: "cdai",
    href: "/calculators/cdai",
    title: "CDAI",
    subtitle: "Clinical Disease Activity Index for Rheumatoid Arthritis.",
    badge: "RA • Clinical",
    apiType: "cdai",
    fields: [
      { name: "tjc", label: "Tender Joint Count (0–28)", min: 0, max: 28, step: 1, defaultValue: 0 },
      { name: "sjc", label: "Swollen Joint Count (0–28)", min: 0, max: 28, step: 1, defaultValue: 0 },
      { name: "pga", label: "Patient Global Assessment", hint: "0–10 scale (if your backend uses 0–100, adjust here)", kind: "slider", min: 0, max: 10, step: 0.5, defaultValue: 0 },
      { name: "ega", label: "Physician Global Assessment", hint: "0–10 scale", kind: "slider", min: 0, max: 10, step: 0.5, defaultValue: 0 },
    ],
    scaleHints: [
      { label: "Remission", range: "≤ 2.8" },
      { label: "Low", range: "> 2.8 to ≤ 10" },
      { label: "Moderate", range: "> 10 to ≤ 22" },
      { label: "High", range: "> 22" },
    ],
  },

  sdai: {
    key: "sdai",
    href: "/calculators/sdai",
    title: "SDAI",
    subtitle: "Simple Disease Activity Index for Rheumatoid Arthritis.",
    badge: "RA • Lab+Clinical",
    apiType: "sdai",
    fields: [
      { name: "tjc", label: "Tender Joint Count (0–28)", min: 0, max: 28, step: 1, defaultValue: 0 },
      { name: "sjc", label: "Swollen Joint Count (0–28)", min: 0, max: 28, step: 1, defaultValue: 0 },
      { name: "pga", label: "Patient Global Assessment", hint: "0–10 scale", kind: "slider", min: 0, max: 10, step: 0.5, defaultValue: 0 },
      { name: "ega", label: "Physician Global Assessment", hint: "0–10 scale", kind: "slider", min: 0, max: 10, step: 0.5, defaultValue: 0 },
      { name: "crp", label: "CRP", hint: "C-reactive protein", unit: "mg/dL or mg/L (match backend)", min: 0, max: 30, step: 0.1, defaultValue: 0 },
    ],
    scaleHints: [
      { label: "Remission", range: "≤ 3.3" },
      { label: "Low", range: "> 3.3 to ≤ 11" },
      { label: "Moderate", range: "> 11 to ≤ 26" },
      { label: "High", range: "> 26" },
    ],
  },

  asdas_esr: {
    key: "asdas_esr",
    href: "/calculators/asdas-esr",
    title: "ASDAS – ESR",
    subtitle: "Ankylosing Spondylitis Disease Activity Score using ESR.",
    badge: "AS • ESR",
    apiType: "asdas_esr",
    fields: [
      { name: "back_pain", label: "Back pain", hint: "0–10", kind: "slider", min: 0, max: 10, step: 0.5, defaultValue: 0 },
      { name: "duration_morning_stiffness", label: "Duration of morning stiffness", hint: "0–10", kind: "slider", min: 0, max: 10, step: 0.5, defaultValue: 0 },
      { name: "peripheral_pain_swelling", label: "Peripheral pain/swelling", hint: "0–10", kind: "slider", min: 0, max: 10, step: 0.5, defaultValue: 0 },
      { name: "patient_global", label: "Patient global assessment", hint: "0–10", kind: "slider", min: 0, max: 10, step: 0.5, defaultValue: 0 },
      { name: "esr", label: "ESR", unit: "mm/hr", min: 0, max: 200, step: 1, defaultValue: 0 },
    ],
    scaleHints: [
      { label: "Inactive", range: "< 1.3" },
      { label: "Moderate", range: "≥ 1.3 to < 2.1" },
      { label: "High", range: "≥ 2.1 to ≤ 3.5" },
      { label: "Very high", range: "> 3.5" },
    ],
  },

  asdas_crp: {
    key: "asdas_crp",
    href: "/calculators/asdas-crp",
    title: "ASDAS – CRP",
    subtitle: "Ankylosing Spondylitis Disease Activity Score using CRP.",
    badge: "AS • CRP",
    apiType: "asdas_crp",
    fields: [
      { name: "back_pain", label: "Back pain", hint: "0–10", kind: "slider", min: 0, max: 10, step: 0.5, defaultValue: 0 },
      { name: "duration_morning_stiffness", label: "Duration of morning stiffness", hint: "0–10", kind: "slider", min: 0, max: 10, step: 0.5, defaultValue: 0 },
      { name: "peripheral_pain_swelling", label: "Peripheral pain/swelling", hint: "0–10", kind: "slider", min: 0, max: 10, step: 0.5, defaultValue: 0 },
      { name: "patient_global", label: "Patient global assessment", hint: "0–10", kind: "slider", min: 0, max: 10, step: 0.5, defaultValue: 0 },
      { name: "crp", label: "CRP", unit: "mg/L", min: 0, max: 300, step: 0.1, defaultValue: 0 },
    ],
    scaleHints: [
      { label: "Inactive", range: "< 1.3" },
      { label: "Moderate", range: "≥ 1.3 to < 2.1" },
      { label: "High", range: "≥ 2.1 to ≤ 3.5" },
      { label: "Very high", range: "> 3.5" },
    ],
  },
};

export const calculatorsList = Object.values(calculators);
