import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/leads", async (req, res) => {
    // Honeypot: silently drop bots that fill the hidden "website" field
    if (req.body.website && String(req.body.website).trim() !== "") {
      return res.redirect("/thank-you");
    }

    const data = {
      fullName: req.body.fullName || req.body.full_name || "",
      email: req.body.email || "",
      phoneNumber: req.body.phoneNumber || req.body.phone_number || "",
      zipCode: req.body.zipCode || req.body.zip_code || "",
    };

    const parsed = insertLeadSchema.safeParse(data);
    if (!parsed.success) {
      const accept = req.headers.accept || "";
      if (accept.includes("application/json")) {
        return res.status(400).json({ error: parsed.error.flatten() });
      }
      return res.redirect("/?error=1");
    }

    const lead = await storage.createLead(parsed.data);

    const accept = req.headers.accept || "";
    if (accept.includes("application/json")) {
      return res.status(201).json(lead);
    }
    return res.redirect("/thank-you");
  });

  app.get("/api/leads", async (_req, res) => {
    const leads = await storage.getLeads();
    return res.json(leads);
  });

  return httpServer;
}
