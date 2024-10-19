import express from "express";
import { createRule, evaluateRule } from "../controllers/ruleController.js";
const router = express.Router();

router.post("/create", createRule);
router.post("/evaluate", evaluateRule);

export default router;
