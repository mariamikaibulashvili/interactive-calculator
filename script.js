let firstOperand = "";      
let secondOperand = "";    
let currentOperator = null;

function updateDisplay(value) {
    document.getElementById('display-value').innerText = value || "0";
}


function appendNumber(number) {
    if (currentOperator === null) {
        firstOperand += number;
        updateDisplay(firstOperand);
    } else {
        secondOperand += number;
        updateDisplay(secondOperand);
    }
}

function appendOperator(operator) {
    if (firstOperand === "") return;
    currentOperator = operator;
}

function clearDisplay() {
    firstOperand = "";
    secondOperand = "";
    currentOperator = null;
    updateDisplay("0");
}

function calculateResult() {
    if (firstOperand === "" || secondOperand === "" || currentOperator === null) return;

    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);
    let finalResult = 0;

    if (currentOperator === '+') {
        finalResult = num1 + num2;
    } else if (currentOperator === '-') {
        finalResult = num1 - num2;
    } else if (currentOperator === '*') {
        finalResult = num1 * num2;
    } else if (currentOperator === '/') {
        if (num2 === 0) {
            updateDisplay("Error");
            return;
        }
        finalResult = num1 / num2;
    }

    updateDisplay(finalResult);
    firstOperand = finalResult.toString();
    secondOperand = "";
    currentOperator = null;
}