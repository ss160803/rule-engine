import express from "express";
import bodyParser from "body-parser";
import ruleRoutes from "./routes/ruleRoutes.js";
import db from "./config/db.js";

const app = express();
app.use(bodyParser.json());

app.use("/api/rules", ruleRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
