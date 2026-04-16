import express from "express";
import { registerRoutes } from "../server/routes";
import { createServer } from "http";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const httpServer = createServer(app);
let initialized: Promise<void> | null = null;
async function init() {
  if (!initialized) {
    initialized = registerRoutes(httpServer, app).then(() => undefined);
  }
  return initialized;
}

export default async function handler(req: any, res: any) {
  await init();
  return app(req, res);
}
