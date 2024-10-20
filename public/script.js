document.getElementById('rule-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const ruleName = document.getElementById('rule-name').value;
    const ruleDesc = document.getElementById('rule-desc').value;

    const response = await fetch('/api/rules/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ rule_name: ruleName, description: ruleDesc })
    });

    const result = await response.json();
    document.getElementById('result').innerText = `Rule created successfully with rule id: ${result.ruleId}`;
});

document.getElementById('evaluate-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const ruleId = document.getElementById('rule-id').value;
    const userData = JSON.parse(document.getElementById('user-data').value);

    const response = await fetch('/api/rules/evaluate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ruleId: ruleId, userData: userData })
    });

    const result = await response.json();
    document.getElementById('result').innerText = `${result.message}. Evaluation Result: ${result.result}`;
});
