import express from "express";
import bodyParser from "body-parser";
import ruleRoutes from "./routes/ruleRoutes.js";

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

// app.post("/simple", (req, res) => {
//     console.log("Simple POST request received");
//     res.status(200).send("Simple POST route is working");
// });

app.use("/api/rules", ruleRoutes); // Make sure this line is correct

if (process.env.NODE_ENV !== 'test') {
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Server running on port ${port}`));
}

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Server running on port ${port}`));

export {app};
