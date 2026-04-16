import express from "express";
import { insertLeadSchema } from "../shared/schema";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const leads: any[] = [];

app.post("/api/leads", async (req, res) => {
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
    return res.redirect(303, "/?error=1");
  }

  leads.push({ ...parsed.data, id: String(leads.length + 1) });

  const accept = req.headers.accept || "";
  if (accept.includes("application/json")) {
    return res.status(201).json(parsed.data);
  }
  return res.redirect(303, "/thank-you");
});

app.get("/api/leads", (_req, res) => {
  return res.json(leads);
});

export default app;
