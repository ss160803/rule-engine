import db from "../config/db.js";
import { parseRuleString, evaluateAST } from "../services/ruleServices.js";

export const createRule = (req, res) => {
    const { rule_name, description } = req.body;
    console.log("Inside createRule: ", rule_name, description);
    try {
        const ast = parseRuleString(description); // Generate AST from description
        const query = `INSERT INTO rules (rule_name, description) VALUES (?,?)`;
        db.query(query, [rule_name, JSON.stringify(ast)], (err, result) => {
            if (err) {
                console.error("Database error:", err);
                return res.status(500).json({ message: "Error creating rule", error: err });
            }
            res.status(200).json({ message: "Rule created successfully", ruleId: result.insertId });
        });
    } catch (error) {
        console.error("Error creating rule:", error);
        res.status(500).json({ message: "Error creating rule", error });
    }
};

export const evaluateRule = (req, res) => {
    const { ruleId, userData } = req.body;
    try {
        const query = `SELECT description FROM rules WHERE id = ?`;
        db.query(query, [ruleId], (err, results) => {
            if (err) throw err;
            if (results.length > 0) {
                const ruleString = results[0].description;
                const ast = JSON.parse(ruleString); // Parse AST from stored description
                const evaluationResult = evaluateAST(ast, userData); // Evaluate rule against user data
                res.status(200).json({ message: "Rule evaluated successfully", result: evaluationResult });
            } else {
                res.status(404).json({ message: "Rule not found" });
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Error evaluating rule", error });
    }
};
