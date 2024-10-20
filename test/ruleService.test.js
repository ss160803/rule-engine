// Import dependencies
import { expect } from 'chai';
import { parseRuleString, evaluateAST } from '../services/ruleServices.js';

// Describe the test suite for Rule Service
describe('Rule Service', () => {
  
  // Test case for parseRuleString function
  it('should correctly parse a rule string into an AST', () => {
    const ruleString = "(age > 30 AND department = 'Sales')";
    const ast = parseRuleString(ruleString);
    expect(ast).to.be.an('object');
    // Further checks on the structure of the AST
  });

  // Test case for evaluateAST function
  it('should evaluate an AST against user data correctly', () => {
    const ast = {
      type: 'operator',
      left: {
        type: 'operand',
        value: 'age > 30'
      },
      right: {
        type: 'operand',
        value: 'department = \'Sales\''
      },
      value: 'AND'
    };
    const userData = { age: 35, department: 'Sales' };
    const result = evaluateAST(ast, userData);
    expect(result).to.be.true;
  });
});
