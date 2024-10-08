const operands = document.getElementsByClassName("operand");
const operators = document.getElementsByClassName("operator");
const equal = document.getElementById("equal");
const display = document.getElementById("display");
let flag = true;
let first_value = ""
let second_value = ""
let symbol = "";

// Function to update the display
function updateDisplay() {
    let expression = first_value + symbol + second_value;
    display.innerText = expression || "0"; // Show "0" if no input yet
}

for (let i = 0; i < operands.length; i++) {
    operands[i].addEventListener("click", function () {
        const value = operands[i].innerText;

        // If an operator has been chosen, this value goes to the second operand
        if (symbol) {
            second_value += value;
            console.log(second_value, "second_value");
        } else {
            // Otherwise, it goes to the first operand
            first_value += value;
            console.log(first_value, "first_value");
        }
        updateDisplay(); // Update the display with the current expression
    });
}


for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function () {
        symbol = operators[i].innerText;
        console.log(symbol);
        flag = false;
        updateDisplay(); // Update the display with the current expression
    });
}

// When the equal button is clicked, perform the calculation
equal.addEventListener("click", function () {
    let answer;

    // Convert strings to numbers
    const num1 = parseFloat(first_value);
    const num2 = parseFloat(second_value);

    // Perform the operation based on the chosen symbol
    if (symbol == '+') {
        answer = num1 + num2;
    } else if (symbol == '-') {
        answer = num1 - num2;
    } else if (symbol == '*') {
        answer = num1 * num2;
    } else if (symbol == '/') {
        if (num2 !== 0) {
            answer = num1 / num2;
        } else {
            answer = "Error (Divide by 0)";
        }
    } else if (symbol == '%') {
        answer = num1 % num2;
    }

    // Display the result in the console or update a display element on your page
    console.log(answer, "answer");
    // Display the result on the page
    display.innerText = answer;
    // Optionally, reset the variables for the next calculation
    first_value = '';
    second_value = '';
    symbol = '';
});