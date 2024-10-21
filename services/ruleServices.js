import Node from "../models/Node.js";

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

const validateRuleString = (ruleString) => {
  if (!ruleString) throw new Error("Rule string cannot be empty");
  // Additional checks can be added here
};

export const parseRuleString = (ruleString) => {
  validateRuleString(ruleString);
  validateAttributes(ruleString);
  // Continue parsing rule string into AST
  return new Node('operator', null, null, ruleString);
};

export const evaluateAST = (ast, data) => {
  // Placeholder logic to evaluate AST against data
  if (ast.type === 'operator' && ast.value === 'age > 30') {
    return data.age > 30;
  }
  return false;
};
