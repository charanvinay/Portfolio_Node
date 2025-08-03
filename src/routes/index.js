import { Router } from "express";
import aboutRouter from "./about.js"
const router = Router();

router.use("/about", aboutRouter);
export default router;