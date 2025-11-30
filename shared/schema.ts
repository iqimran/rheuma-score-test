import { pgTable, text, varchar, integer, real, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const activityLevels = [
  "sedentary",
  "light",
  "moderate",
  "active",
  "veryActive"
] as const;

export type ActivityLevel = typeof activityLevels[number];

export const activityLevelLabels: Record<ActivityLevel, string> = {
  sedentary: "Sedentary (little or no exercise)",
  light: "Light (exercise 1-3 days/week)",
  moderate: "Moderate (exercise 3-5 days/week)",
  active: "Active (exercise 6-7 days/week)",
  veryActive: "Very Active (hard exercise daily)"
};

export const activityMultipliers: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9
};

export const reports = pgTable("reports", {
  id: varchar("id", { length: 36 }).primaryKey(),
  age: integer("age").notNull(),
  gender: text("gender").notNull(),
  height: real("height").notNull(),
  weight: real("weight").notNull(),
  activityLevel: text("activity_level").notNull(),
  bmr: real("bmr").notNull(),
  tdee: real("tdee").notNull(),
  category: text("category").notNull(),
  userIp: text("user_ip"),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const insertReportSchema = createInsertSchema(reports).omit({
  id: true,
  createdAt: true
});

export type InsertReport = z.infer<typeof insertReportSchema>;
export type Report = typeof reports.$inferSelect;

export const calculateInputSchema = z.object({
  age: z.number().min(1).max(120),
  gender: z.enum(["male", "female"]),
  height: z.number().min(50).max(300),
  weight: z.number().min(20).max(500),
  activityLevel: z.enum(activityLevels)
});

export type CalculateInput = z.infer<typeof calculateInputSchema>;

export interface CalculationResult {
  bmr: number;
  tdee: number;
  category: string;
}
