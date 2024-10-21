import express from "express";
import { createRule, evaluateRule, modifyRule} from "../controllers/ruleController.js";
const router = express.Router();

router.post("/create", (req, res, next) => {
    console.log("Route hit: /create");
    next();
}, createRule);

router.post("/evaluate", (req, res, next) => {
    console.log("Route hit: /evaluate");
    next();
}, evaluateRule);

router.post("/modify", (req, res, next) => {
    console.log("Route hit: /modify");
    next();
  }, modifyRule);

// router.get("/test", (req, res) => {
//     console.log("Route hit: /test");
//     res.status(200).send("Test route is working");
// });


export default router;
