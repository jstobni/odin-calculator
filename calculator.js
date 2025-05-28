document.addEventListener('DOMContentLoaded', function() {
    console.log(add(4, 5));
    console.log(subtract(4, 5));
    console.log(multiply(4, 5));
    console.log(divide(4, 5));

    let digitButtons = document.querySelectorAll('.btn-number');
    for (let button of digitButtons) {
        button.addEventListener('click', () => {
        display(button.dataset.buttonValue)
        })
    }

    let operatorButtons = document.querySelectorAll('.btn-operator');
    for (let button of operatorButtons) {
        button.addEventListener('click', () => {
        display(button.dataset.buttonValue)
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

function display(button) {
    console.log(button)
    // Store the display div and button pressed
    const display = document.querySelector('#calculatorDisplayBottom');
    let currentDisplay = document.createElement('span')
    let displayValue

    // If the number is a digit (0-9)
    if (0 >= button <= 9) {
        currentDisplay.innerHTML = `${button}`
        if (displayValue === undefined) {
            displayValue = button
        } else {
            let newDisplayValue = displayValue.toString() + button
            displayValue = parseInt(newDisplayValue)
        }
        console.log(displayValue)
        display.appendChild(currentDisplay)
    }  


}