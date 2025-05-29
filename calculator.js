document.addEventListener('DOMContentLoaded', function() {

    // Add event listener to number buttons
    let digitButtons = document.querySelectorAll('.btn-number');
    for (let button of digitButtons) {
        let digitValue = button.dataset.buttonValue
        button.addEventListener('click', () => {
        display(digitValue)
        })
    };

    // Add event listener to operator buttons
    let operatorButtons = document.querySelectorAll('.btn-operator');
    for (let button of operatorButtons) {
        let operatorValue = button.dataset.buttonValue
        button.addEventListener('click', () => {
        display(operatorValue)
        })
    };

    // Add event listener to equal button
    let equalButton = document.querySelector('.btn-equal')
    equalButton.addEventListener('click', () => {
        compute()
    });

    // Add event listener to clear button
    let clearButton = document.querySelector('.btn-clear')
    clearButton.addEventListener('click', () => {
        clear()
    });
    
});

function operate(x, operator, y) {
    if (operator === '+') {
        add(x, y);
    }
    else if (operator === '-') {
        subtract(x, y);
    }
    else if (operator === '*') {
        multiply(x, y)
    }
    else if (operator === '/') {
        divide(x, y);
    }
}

function add(x, y) {
    let outputNum1 = document.querySelector('#calculatorFirstNumText');
    let outputOperator = document.querySelector('#calculatorOperatorText');
    let outputNum2 = document.querySelector('#calculatorSecondNumText');

    x = parseInt(x)
    y = parseInt(y)
    
    outputNum1.innerHTML = `${x + y}`
    outputOperator.innerHTML = ''
    outputNum2.innerHTML = ''
    
}

function subtract(x, y) {
    let outputNum1 = document.querySelector('#calculatorFirstNumText');
    let outputOperator = document.querySelector('#calculatorOperatorText');
    let outputNum2 = document.querySelector('#calculatorSecondNumText');

    x = parseInt(x)
    y = parseInt(y)
    
    outputNum1.innerHTML = `${x - y}`
    outputOperator.innerHTML = ''
    outputNum2.innerHTML = ''
}

function multiply(x, y) {
    let outputNum1 = document.querySelector('#calculatorFirstNumText');
    let outputOperator = document.querySelector('#calculatorOperatorText');
    let outputNum2 = document.querySelector('#calculatorSecondNumText');

    x = parseInt(x)
    y = parseInt(y)
    
    outputNum1.innerHTML = `${x * y}`
    outputOperator.innerHTML = ''
    outputNum2.innerHTML = ''
}

function divide(x, y) {
    let outputNum1 = document.querySelector('#calculatorFirstNumText');
    let outputOperator = document.querySelector('#calculatorOperatorText');
    let outputNum2 = document.querySelector('#calculatorSecondNumText');

    x = parseInt(x)
    y = parseInt(y)
    
    outputNum1.innerHTML = `${x / y}`
    outputOperator.innerHTML = ''
    outputNum2.innerHTML = ''
}

function compute() {
    let x = document.querySelector('#calculatorFirstNumText').innerHTML;
    let operator = document.querySelector('#calculatorOperatorText').innerHTML;
    let y = document.querySelector('#calculatorSecondNumText').innerHTML;
    let outputValue = document.querySelector('#calculatorReturnText');
    let outputNum1 = document.querySelector('#calculatorFirstNumText').innerHTML;
    let outputOperator = document.querySelector('#calculatorOperatorText').innerHTML;
    let outputNum2 = document.querySelector('#calculatorSecondNumText').innerHTML;
    
    outputValue.innerHTML = `${outputNum1} ${outputOperator} ${outputNum2}`

    operate(x, operator, y)

}

function clear() {
    let outputNum1 = document.querySelector('#calculatorFirstNumText');
    let outputOperator = document.querySelector('#calculatorOperatorText');
    let outputNum2 = document.querySelector('#calculatorSecondNumText');
    let outputValue = document.querySelector('#calculatorReturnText');

    outputNum1.innerHTML = ''
    outputOperator.innerHTML = ''
    outputNum2.innerHTML = ''
    outputValue.innerHTML = ''
}

function display(buttonValue) {
    // Store the display div and button pressed
    let outputNum1 = document.querySelector('#calculatorFirstNumText');
    let displayNum1 = document.querySelector('#calculatorFirstNumText').innerHTML;
    let outputOperator = document.querySelector('#calculatorOperatorText');
    let displayOperator = document.querySelector('#calculatorOperatorText').innerHTML;
    let outputNum2 = document.querySelector('#calculatorSecondNumText');
    let displayNum2 = document.querySelector('#calculatorSecondNumText').innerHTML;

    // If the buttonValue is a digit (0-9) and no operator exists
    if ((buttonValue <= 9 && buttonValue >= 0) && displayOperator === '') {
        if (displayNum1 === 0) {
            displayNum1 = buttonValue
        } else {
            let newDisplayValue = displayNum1.toString() + buttonValue
            displayNum1 = parseInt(newDisplayValue)
        }
        console.log(displayNum1)
        outputNum1.innerHTML = `${displayNum1}`
    }

    // If the buttonValue is an operator
    else if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
        // If second half of the expression exists
        if (outputNum2.innerHTML !== '') {
            compute()
            outputOperator.innerHTML = `${buttonValue}`
        }
        else {
            outputOperator.innerHTML = `${buttonValue}`
        } 
    }
    
    // If buttonValue is a digit (0-9) and an operator exists
    else if ((buttonValue <= 9 && buttonValue >= 0) && displayOperator !== '') {
        if (displayNum2 === 0) {
            displayNum2 = buttonValue
        } else {
            let newDisplayValue = displayNum2.toString() + buttonValue
            displayNum2 = parseInt(newDisplayValue)
        }
        outputNum2.innerHTML = `${displayNum2}`
    }
}