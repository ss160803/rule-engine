# Rule Engine with AST

## Overview
This project implements a simple rule engine using an Abstract Syntax Tree (AST) to determine user eligibility based on various attributes.

## Prerequisites
- Node.js
- MySQL
- XAMPP (optional)
- Postman

## Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-repo-url.git
   cd rule-engine
   
2. **Install dependencies:**
   ```sh
   npm install
   
3. **Configure MySQL database:**
   ```sh
   CREATE DATABASE rule_engine_db;
   USE rule_engine_db;
   CREATE TABLE rules (
       id INT AUTO_INCREMENT PRIMARY KEY,
       rule_name VARCHAR(255) NOT NULL,
       description TEXT NOT NULL
   );
   
4. **Start the server:**
   ```sh
   nodemon server.js

## API Endpoints

- **Create Rule**: `POST /api/rules/create`
  ```json
  {
    "rule_name": "example",
    "description": "((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience >5)"
  }

- **Evaluate Rule**: `POST /api/rules/evaluate`
  ```json
  {
    "ruleId": 1,
    "userData": {"age": 35, "department": "Sales", "salary": 60000, "experience": 3}
  }

## Testing

This project has undergone thorough testing to ensure robust functionality. Here’s a breakdown of the testing methods employed:

### 1. Unit Testing
Unit tests ensure individual functions work as expected. I used Mocha and Chai for these tests.

#### Running Unit Tests:
1. **Install dependencies** (if not already installed):
   ```sh
   npm install
2. **Run the unit tests:**
   ```sh
   npx mocha test/ruleService.test.js
   
### 2.  Integration Testing:
Integration tests validate the full flow of the application, ensuring all components work seamlessly together. We use Supertest along with Mocha and Chai for these tests.

#### Running Integartion Tests:
1. **Ensure your MySQL server is running.**
2. **Run the integration tests:**
   ```sh
   npm test
##### Test Cases: 
- **Create Rule:** This test checks if a rule can be created and returns its ID.
- **Evaluate Rule:** This test validates that the rule evaluation returns the correct result.

### 3. Validation Testing:
This section details the validation testing implemented for the Rule Engine project. The validation tests ensure that rule strings and attributes are correctly validated to maintain data integrity and reliability.
and reliability.

## Testing Approach
- **Unit Testing**: Validates individual functions in the `ruleServices.js`.
- **Integration Testing**: Ensures the entire validation workflow functions seamlessly.
## Validation Logic
1. **Validation of Rule Strings**:
   - **Empty Rule String**: Ensures the rule string is not empty.
   - **Invalid Comparisons**: Catches invalid comparison operators.
   - **Missing Operators**: Ensures logical operators are present between conditions.

2. **Validation of Attributes**:
   - **Valid Attributes**: Ensures only predefined valid attributes are used.
   - **Extraction of Attributes**: Correctly extracts attributes from rule strings.
   - **Handling of Invalid Attributes**: Catches and handles invalid attributes.

## Running Validation Tests:
Follow these steps to run the validation tests:
1. **Navigate to the Project Directory**:
   ```sh
   cd path/to/project
2. **Install Dependencies:**
   ```sh
   npm install
3. **Run Validation Tests:**
   ```sh
   npx mocha test/validation.test.js
## Test Cases:
1. ## Empty Rule String:
      - Description: Validates that an error is thrown when the rule string is empty.
      - Test:
      ```Javascript
      expect(() => validateRuleString("")).to.throw("Rule string cannot be empty");
2. ## Invalid Comparison in Rule String::
      - Description: Ensures that invalid comparison operators are caught.
      - Test:
      ```Javascript
      expect(() => validateRuleString("age => 30")).to.throw("Invalid comparison in rule string");

3. ## Missing Operators in Rule String:
      - Description: Validates that logical operators are present between conditions.
      - Test:
      ```Javascript
      expect(() => validateRuleString("age 30")).to.throw("Missing operator in rule string");
4. ## Invalid Attribute Handling:
      - Description:  Ensures invalid attributes are caught and handled.
      - Test:
      ```Javascript
      expect(() => validateAttributes("age > 30 AND invalid_attribute = 'Sales'")).to.throw("Invalid attribute: invalid_attribute");


### 4.  Manual Testing:
Manual testing ensures the application behaves as expected from the user’s perspective.
#### Running Manual Tests:
1. **Start the server:**
   ```sh
   nodemon server.js
2. **Open the application:** `in your browser at` `http://localhost:3000`
3. **Creating a Rule:**
   - Enter Rule Name: "Example Rule"
   - Enter Rule Description: `((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience >5)`
   - Click on `Create Rule` button
   - Verify the Response: Ensure a message displays the rule id.

4. **Evaluating a Rule:**
   - Enter Rule ID: the ID received from creating the rule.
   - Enter User Data: 
      ```json
      {
         "age": 35,
         "department": "Sales",
         "salary": 60000,
         "experience": 3
      }
   
   - Click on `Evaluate Rule` button
   - Verify the Result: Ensure the evaluation result is displayed accurately.

## Dockerfile
Currently blank for future use. Intended for backend containerization.

## Version Control
- Follow Git best practices. Push your changes to GitHub.
## License
This project is licensed under the MIT License.
## Commit and Push:

1. **Add and Commit**:
   ```sh
   git add README.md
   git commit -m "Add comprehensive project README"
   git push origin main
