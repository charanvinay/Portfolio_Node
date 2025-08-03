import express from "express";
import routes from "./routes/index.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json())
app.use("/uploads", express.static("uploads"))
app.use("/api", routes);

export default app;