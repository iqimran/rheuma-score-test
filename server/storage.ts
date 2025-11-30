import { reports, type Report, type InsertReport } from "@shared/schema";
import { db } from "./db";
import { desc } from "drizzle-orm";
import { randomUUID } from "crypto";

export interface IStorage {
  createReport(report: InsertReport): Promise<Report>;
  getAllReports(): Promise<Report[]>;
}

export class DatabaseStorage implements IStorage {
  async createReport(insertReport: InsertReport): Promise<Report> {
    const id = randomUUID();
    const [report] = await db
      .insert(reports)
      .values({ ...insertReport, id })
      .returning();
    return report;
  }

  async getAllReports(): Promise<Report[]> {
    return db.select().from(reports).orderBy(desc(reports.createdAt));
  }
}

export const storage = new DatabaseStorage();
