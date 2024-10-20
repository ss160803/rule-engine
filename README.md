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
