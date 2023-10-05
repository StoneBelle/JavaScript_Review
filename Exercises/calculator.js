function add(num1, num2) {
    return num1 + num2
}

function sub(num1, num2) {
    return num1 - num2
}

function div(num1, num2) {
    return num1 / num2
}

function mul(num1, num2) {
    return num1 * num2
}

function Calculate(num1, num2, operator) {
    return operator(num1, num2)
}


// Calculate(5, 5, add)
// Calculate(5, 5, sub)
// Calculate(10, 2, div)
// Calculate(5, 5, mul)
