import express from "express";
import routes from "./routes/index.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Handle __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const allowedOrigins = [
  "https://charanvinaynarni.netlify.app",
  "http://localhost:2345",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use(express.json());

// Serve uploads folder from absolute path
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", routes);

export default app;