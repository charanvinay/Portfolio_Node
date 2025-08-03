import { Router } from "express";
import { getExperiences } from "../controllers/experiences.controller.js";

const router = Router();
router.get("/", getExperiences);
export default router;