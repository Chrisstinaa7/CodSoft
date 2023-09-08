
let displayValue = '';
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

//Event listeners for all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        if (buttonText === '=') {
            calculateResult();
        } else if (buttonText === 'C') {
            clearDisplay();
        } else {
            appendToDisplay(buttonText);
        }
    });
});

function appendToDisplay(value) {
    displayValue += value;
    display.value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    display.value = '';
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        display.value = result;
        displayValue = result.toString();
    } catch (error) {
        display.value = 'Error';
        displayValue = '';
    }
}
