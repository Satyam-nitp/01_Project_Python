let display = document.getElementById("display");
let currentExpression = "";

// Append the value to the display and expression
function appendValue(value) {
    currentExpression += value;
    display.innerText = currentExpression;
}

// Clear the display
function clearDisplay() {
    currentExpression = "";
    display.innerText = "";
}

// Send the expression to the backend and evaluate the result
function calculateResult() {
    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ expression: currentExpression }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            display.innerText = data.error;
        } else {
            display.innerText = data.result;
            currentExpression = "";  // Clear after result
        }
    })
    .catch(error => {
        display.innerText = "Error";
    });
}
