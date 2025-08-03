import { configDotenv } from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

configDotenv();

// Ensure DB is connected before handling requests
let isConnected = false;

export default async function handler(req, res) {
  if (!isConnected) {
    try {
      await connectDB();
      isConnected = true;
    } catch (error) {
      console.error("DB connection error:", error);
      return res.status(500).json({ error: "DB connection failed" });
    }
  }

  // Let Express handle the request
  return app(req, res);
}
