import express from "express";
import { getStatistics } from "../controllers/stats.controller.js";

const router = express.Router();

// Public route - no authentication required for landing page stats
router.get("/", getStatistics);

export default router;
