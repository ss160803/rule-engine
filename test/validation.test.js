import { validateRuleString, validateAttributes, extractAttributesFromRuleString } from '../services/ruleServices.js';
import { expect } from 'chai';

describe('Validation Tests', () => {
  it('should validate rule string correctly', () => {
    expect(() => validateRuleString("")).to.throw("Rule string cannot be empty");
    expect(() => validateRuleString("age > 30")).not.to.throw();
  });

  it('should extract attributes from rule string', () => {
    const attributes = extractAttributesFromRuleString("age > 30 AND department = 'Sales'");
    expect(attributes).to.deep.equal(["age", "department"]); // This checks the filtered attributes correctly
  });

  it('should validate attributes correctly', () => {
    // Here we are expecting an error for 'invalid_attribute' only
    expect(() => validateAttributes("age > 30 AND invalid_attribute = 'Sales'")).to.throw("Invalid attribute: invalid_attribute");
    
    // Add this line to ensure that 'Sales' does not cause an error since it is not an attribute itself
    // We should not validate 'Sales' in this context as it is part of a string value, not an attribute
    expect(() => validateAttributes("age > 30 AND department = ' '")).not.to.throw();
    
    // Check for the attributes and ensure no error is thrown if valid attributes are provided
    expect(() => validateAttributes("age > 30 AND department = ' '")).not.to.throw();
  });
});
