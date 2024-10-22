import Node from "../models/Node.js"; 

const validAttributes = ["age", "department", "salary", "experience", "spend"];

// Extracts only valid attributes from the rule string
export const extractAttributesFromRuleString = (ruleString) => {
  const regex = /\b\w+\b/g;
  const matches = ruleString.match(regex) || [];
  const filteredAttributes = matches.filter(attr => validAttributes.includes(attr));
  
  console.log("Extracted words:", matches); // Logging all extracted words
  console.log("Filtered attributes:", filteredAttributes); // Logging only valid attributes
  return filteredAttributes;
};

export const validateAttributes = (ruleString) => {
  // Extract words and filter out the valid attributes
  const words = ruleString.match(/\b\w+\b/g) || [];
  
  words.forEach(word => {
    // Check if the word is not an attribute and not an operator
    if (!validAttributes.includes(word) && isNaN(word) && !["AND", "OR", "NOT"].includes(word)) {
      console.log(`Invalid attribute found: ${word}`); // Logging for debug
      throw new Error(`Invalid attribute: ${word}`);
    }
  });
};

export const validateRuleString = (ruleString) => {
  if (!ruleString) throw new Error("Rule string cannot be empty");

  // Check for invalid comparisons and missing operators
  const invalidComparisonRegex = /[^<>=!]=[^<>=]/;
  if (invalidComparisonRegex.test(ruleString)) {
    throw new Error("Invalid comparison in rule string");
  }

  const missingOperatorRegex = /[A-Za-z0-9]+\s+[A-Za-z0-9]+/;
  if (missingOperatorRegex.test(ruleString)) {
    throw new Error("Missing operator in rule string");
  }
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
