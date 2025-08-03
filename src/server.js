import { configDotenv } from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";
configDotenv();

const PORT = process.env.PORT;
connectDB().then(() =>
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
);