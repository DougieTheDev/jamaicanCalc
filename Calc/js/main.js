let currentInput = '';
let firstNumber = null;
let secondNumber = null;
let operator = null;

// Get the result display
const resultElement = document.getElementById('result');

// Handle number input
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.value;
        resultElement.textContent = currentInput;
    });
});

// Handle operator input
const operatorButtons = document.querySelectorAll('input[type="button"]:not(.number):not(#equal):not(#clear)');
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (firstNumber === null) {
            firstNumber = parseFloat(currentInput);
        } else {
            secondNumber = parseFloat(currentInput);
        }

        operator = button.value;
        currentInput = '';
    });
});

// Handle clear button
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
    currentInput = '';
    firstNumber = null;
    secondNumber = null;
    operator = null;
    resultElement.textContent = '0';
});

// Handle equal button
const equalButton = document.getElementById('equal');
equalButton.addEventListener('click', () => {
    if (firstNumber !== null && currentInput !== '') {
        secondNumber = parseFloat(currentInput);
        let result;

        // Perform the selected operation
        switch (operator) {
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case 'x':
                result = firstNumber * secondNumber;
                break;
            case '÷':
                if (secondNumber === 0) {
                    result = 'Error: Division by zero';
                } else {
                    result = firstNumber / secondNumber;
                }
                break;
            default:
                result = '';
        }

        resultElement.textContent = result;
        currentInput = result.toString();
        firstNumber = result;
        secondNumber = null;
        operator = null;
    }
});
