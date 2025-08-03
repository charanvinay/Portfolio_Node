import { Router } from "express";
import { getAbout } from "../controllers/about.controller.js";

const router = Router();
router.use("/", getAbout);
export default router;