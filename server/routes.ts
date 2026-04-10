import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/leads", async (req, res) => {
    const parsed = insertLeadSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.flatten() });
    }
    const lead = await storage.createLead(parsed.data);
    return res.status(201).json(lead);
  });

  app.get("/api/leads", async (_req, res) => {
    const leads = await storage.getLeads();
    return res.json(leads);
  });

  return httpServer;
}
