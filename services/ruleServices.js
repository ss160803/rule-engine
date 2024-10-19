import Node from "../models/Node.js";

export const parseRuleString = (ruleString) => {
    // Implement logic to parse ruleString and return AST (Node object)
    // Placeholder implementation
    return new Node('operator', null, null, ruleString);
};

export const evaluateAST = (ast, data) => {
    // Implement logic to evaluate AST against data
    // Placeholder implementation
    return true; // Assume always true for now
};
