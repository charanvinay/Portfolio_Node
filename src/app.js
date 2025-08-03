import express from "express";
import routes from "./routes/index.js";
import cors from "cors";
const app = express();

const allowedOrigins = ['https://charanvinaynarni.netlify.app', 'http://localhost:2345'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  }
}));
app.use(express.json())
app.use("/uploads", express.static("uploads"))
app.use("/api", routes);

export default app;