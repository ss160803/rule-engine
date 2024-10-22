document.getElementById('rule-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const ruleName = document.getElementById('rule-name').value.trim();
    const ruleDesc = document.getElementById('rule-desc').value.trim();

    if(!ruleName || !ruleDesc){
        document.getElementById('result').innerText = 'Error: Rule name and description cannot be empty.';
        document.getElementById('result').classList.add('alert', 'alert-danger');
        return;
    }
    try{
        const response = await fetch('/api/rules/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ rule_name: ruleName, description: ruleDesc })
        });
        const result = await response.json();
        if(response.ok) {
            document.getElementById('result').innerText = `Rule created successfully with rule id: ${result.ruleId}`;
            document.getElementById('result').classList.add('alert', 'alert-success');
        }else{
            document.getElementById('result').innerText = `Error creating rule: ${result.message}`;
            document.getElementById('result').classList.add('alert', 'alert-danger');
        }

    }catch(error){
        document.getElementById('result').innerText = 'Error creating rule. Please try again.';
        document.getElementById('result').classList.add('alert', 'alert-danger');
    }    
});

document.getElementById('evaluate-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const ruleId = document.getElementById('rule-id').value.trim();
    const userData = document.getElementById('user-data').value.trim();

    if (isNaN(ruleId)) {
        document.getElementById('result').innerText = 'Error: Rule ID must be a number.';
        document.getElementById('result').classList.add('alert', 'alert-danger');
        return;
    }

    let parsedUserData;
    try {
        parsedUserData = JSON.parse(userData);
    } catch (error) {
        document.getElementById('result').innerText = 'Error: User data must be in JSON format.';
        document.getElementById('result').classList.add('alert', 'alert-danger');
        return;
    }

    try {
        const response = await fetch('/api/rules/evaluate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ruleId: ruleId, userData: parsedUserData })
        });
        const result = await response.json();
        if (response.ok) {
            document.getElementById('result').innerText = `${result.message}. Evaluation Result: ${result.result}`;
            document.getElementById('result').classList.add('alert', 'alert-info');
        } else {
            document.getElementById('result').innerText = `Error: ${result.message}`;
            document.getElementById('result').classList.add('alert', 'alert-danger');
        }
    } catch (error) {
        document.getElementById('result').innerText = 'Error evaluating rule. Please try again.';
        document.getElementById('result').classList.add('alert', 'alert-danger');
    }
});
