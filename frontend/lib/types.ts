export type FieldKind = "number" | "slider";

export type FieldDef = {
  name: string;
  label: string;
  kind?: FieldKind;
  hint?: string;
  unit?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
};

export type ScaleHint = { label: string; range: string };

export type CalculatorConfig = {
  key: string;
  href: string;
  title: string;
  subtitle: string;
  badge: string;
  apiType: string;
  fields: FieldDef[];
  scaleHints: ScaleHint[];
};
