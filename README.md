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

### 2.  Manual Testing:
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
