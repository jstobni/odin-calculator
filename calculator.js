document.addEventListener('DOMContentLoaded', function() {

    // Add event listener to number buttons
    let digitButtons = document.querySelectorAll('.btn-number');
    for (let button of digitButtons) {
        let digitValue = button.dataset.buttonValue
        button.addEventListener('click', () => {
        display(digitValue)
        })
    }

    // Add event listener to operator buttons
    let operatorButtons = document.querySelectorAll('.btn-operator');
    for (let button of operatorButtons) {
        let operatorValue = button.dataset.buttonValue
        button.addEventListener('click', () => {
        display(operatorValue)
        })
    }
    
});

function operate(x, operator, y) {
    if (operator === "+") {
        add(x, y);
    }
    else if (operator === "-") {
        subtract(x, y);
    }
    else if (operator === "*") {
        multiply(x, y)
    }
    else if (operator === "/") {
        divide(x, y);
    }
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y
}

function display(buttonValue) {
    // Store the display div and button pressed
    let outputDisplay = document.querySelector('#calculatorFirstNumText');
    let displayContainer = document.querySelector('#calculatorDisplayBottom')
    let displayValue = document.querySelector('#calculatorFirstNumText').innerHTML;

    // If the buttonValue is a digit (0-9) and no operator exists
    if (buttonValue <= 9 && buttonValue >= 0) {
        if (displayValue === 0) {
            displayValue = buttonValue
        } else {
            let newDisplayValue = displayValue.toString() + buttonValue
            displayValue = parseInt(newDisplayValue)
        }
        console.log(displayValue)
        outputDisplay.innerHTML = `${displayValue}`
    }

    // If the buttonValue is an operator
    else if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
        let operatorValue = document.createElement('span')
        operatorValue.innerHTML = `${buttonValue}`
        displayContainer.appendChild(operatorValue)
    }
    
    // If buttonValue is a digit (0-9) and an operator exists


}