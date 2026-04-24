import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";

const RECAPTCHA_MIN_SCORE = 0.5;

async function verifyRecaptcha(token: string, remoteip?: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.warn("[recaptcha] RECAPTCHA_SECRET_KEY not set, skipping verification");
    return true;
  }
  if (!token) return false;
  try {
    const params = new URLSearchParams({ secret, response: token });
    if (remoteip) params.append("remoteip", remoteip);
    const r = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
    const data: any = await r.json();
    if (!data.success) {
      console.warn("[recaptcha] verification failed:", data["error-codes"]);
      return false;
    }
    if (typeof data.score === "number" && data.score < RECAPTCHA_MIN_SCORE) {
      console.warn(`[recaptcha] score too low: ${data.score}`);
      return false;
    }
    return true;
  } catch (e) {
    console.error("[recaptcha] verification error:", e);
    return true;
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/leads", async (req, res) => {
    const token = req.body["g-recaptcha-response"] || "";
    const remoteip = (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() || req.ip;
    const recaptchaOk = await verifyRecaptcha(token, remoteip);
    if (!recaptchaOk) {
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
