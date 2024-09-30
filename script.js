function appendToDisplay(value) {
    const display = document.getElementById('display');
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/'];

    // Prevent multiple operators or starting with an operator
    if (operators.includes(value)) {
        // Prevent operators at the start or immediately after another operator
        if (display.value === '0' || operators.includes(lastChar)) {
            return; // Ignore if an operator is added after another operator or as the first input
        }
    }

    // Only allow one decimal per number
    if (value === '.') {
        const currentValue = display.value.split(/[\+\-\*\/]/).pop(); // Get the last number
        if (currentValue.includes('.')) {
            return; // Ignore if the last number already has a decimal
        }
    }

    // If display is '0' and the input is a number, replace the '0'
    if (display.value === '0' && !operators.includes(value)) {
        display.value = value;
    } else {
        display.value += value;
    }
}

function removeLastCharacter() {
    const display = document.getElementById('display');
    
    // Remove the last character from the display value
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';  // Reset to '0' if the last character is removed
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '0';  // Always reset to '0' when cleared
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
