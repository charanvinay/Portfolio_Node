import { Router } from "express";
import { getWorks, getWorkTags } from "../controllers/work.controller.js";

const router = Router();
router.get("/", getWorks);
router.get("/tags", getWorkTags);
export default router;