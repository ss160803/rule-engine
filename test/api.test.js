import { expect } from 'chai';
import request from 'supertest';
import { app } from '../server.js';

describe('API Endpoints', function() {
  this.timeout(15000); // Increase timeout to 15000ms

  it('should create a new rule and return its ID', (done) => {
    request(app)
      .post('/api/rules/create')
      .send({ rule_name: 'Test Rule', description: "age > 30" })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.have.property('ruleId');
        done(); // Ensure done() is called after expect
      });
  });

  it('should evaluate a rule and return the result', (done) => {
    request(app)
      .post('/api/rules/evaluate')
      .send({ ruleId: 13, userData: { age: 35, department: 'Sales' } }) // Use ruleId: 13
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.result).to.be.true;
        done(); // Ensure done() is called after expect
      });
  });
});
