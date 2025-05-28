document.addEventListener('DOMContentLoaded', function() {
    console.log(add(4, 5));
    console.log(subtract(4, 5));
    console.log(multiply(4, 5));
    console.log(divide(4, 5));
    
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