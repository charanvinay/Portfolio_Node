import { Router } from "express";
import aboutRouter from "./about.js";
import experiencesRouter from "./experiences.js";
import worksRouter from "./works.js";
const router = Router();

router.use("/about", aboutRouter);
router.use("/experiences", experiencesRouter);
router.use("/works", worksRouter);
export default router;
