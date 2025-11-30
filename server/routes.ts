import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { calculateInputSchema, activityMultipliers, insertReportSchema, type CalculateInput, type CalculationResult } from "@shared/schema";

function calculateBMR(age: number, gender: string, height: number, weight: number): number {
  if (gender === "male") {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  }
}

function calculateTDEE(bmr: number, activityLevel: string): number {
  const multiplier = activityMultipliers[activityLevel as keyof typeof activityMultipliers] || 1.2;
  return bmr * multiplier;
}

function calculateBMI(height: number, weight: number): number {
  const heightInMeters = height / 100;
  return weight / (heightInMeters * heightInMeters);
}

function getCategory(bmi: number): string {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/calculate", async (req, res) => {
    try {
      const parseResult = calculateInputSchema.safeParse(req.body);
      
      if (!parseResult.success) {
        return res.status(400).json({ 
          error: "Invalid input", 
          details: parseResult.error.flatten() 
        });
      }

      const { age, gender, height, weight, activityLevel } = parseResult.data;

      const bmr = calculateBMR(age, gender, height, weight);
      const tdee = calculateTDEE(bmr, activityLevel);
      const bmi = calculateBMI(height, weight);
      const category = getCategory(bmi);

      const result: CalculationResult = {
        bmr: Math.round(bmr * 100) / 100,
        tdee: Math.round(tdee * 100) / 100,
        category
      };

      return res.json(result);
    } catch (error) {
      console.error("Error calculating calories:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  app.post("/api/reports", async (req, res) => {
    try {
      const parseResult = insertReportSchema.safeParse(req.body);
      
      if (!parseResult.success) {
        return res.status(400).json({ 
          error: "Invalid input", 
          details: parseResult.error.flatten() 
        });
      }

      const userIp = req.headers["x-forwarded-for"] as string || req.socket.remoteAddress || null;

      const report = await storage.createReport({
        ...parseResult.data,
        userIp
      });

      return res.status(201).json(report);
    } catch (error) {
      console.error("Error saving report:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/api/reports", async (req, res) => {
    try {
      const reports = await storage.getAllReports();
      return res.json(reports);
    } catch (error) {
      console.error("Error fetching reports:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  return httpServer;
}
