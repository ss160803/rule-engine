import db from "../config/db.js";
import { parseRuleString, evaluateAST } from "../services/ruleServices.js";

// Validate Rule String
const validateRuleString = (ruleString) => {
  if (!ruleString) throw new Error("Rule string cannot be empty");
  // Additional checks can be added here
};

// Validate Attributes
const validAttributes = ["age", "department", "salary", "experience", "spend"];
const validateAttributes = (ruleString) => {
  const attributes = extractAttributesFromRuleString(ruleString);
  attributes.forEach(attr => {
    if (!validAttributes.includes(attr)) {
      throw new Error(`Invalid attribute: ${attr}`);
    }
  });
};

const extractAttributesFromRuleString = (ruleString) => {
  const regex = /\b(age|department|salary|experience|spend)\b/g;
  const matches = ruleString.match(regex);
  return matches || [];
};

// Create Rule
export const createRule = (req, res) => {
  const { rule_name, description } = req.body;
  console.log("Request body:", req.body);
  console.log("Inside createRule: ", rule_name, description);

  try {
    validateRuleString(description);
    validateAttributes(description);
    const ast = parseRuleString(description); // Generate AST from description
    const query = `INSERT INTO rules (rule_name, description) VALUES (?,?)`;
    db.query(query, [rule_name, JSON.stringify(ast)], (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ message: "Error creating rule", error: err });
      }
      console.log("Rule created with ID:", result.insertId);
      res.status(200).json({ message: "Rule created successfully with:", ruleId: result.insertId });
    });
  } catch (error) {
    console.error("Error creating rule:", error);
    res.status(400).json({ message: error.message });
  }
};

// Evaluate Rule
export const evaluateRule = (req, res) => {
  const { ruleId, userData } = req.body;
  console.log("Request body:", req.body);
  console.log("Inside evaluateRule");

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
    console.error("Error evaluating rule:", error);
    res.status(500).json({ message: "Error evaluating rule", error });
  }
};

// Modify Rule
export const modifyRule = (req, res) => {
  const { ruleId, newRuleString } = req.body;
  try {
    validateRuleString(newRuleString);
    validateAttributes(newRuleString); // Ensure new rule string is valid
    const query = `UPDATE rules SET description = ? WHERE id = ?`;
    db.query(query, [newRuleString, ruleId], (err, result) => {
      if (err) throw err;
      res.status(200).json({ message: "Rule updated successfully" });
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
