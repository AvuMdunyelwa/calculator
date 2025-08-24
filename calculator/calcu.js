// dom elements
const inputBox = document.querySelector('#inputBox');
let isInputValueZero = true;
let allClear = document.querySelector('.allClear');
let operators = document.querySelectorAll('.operator');
let signOperators = document.querySelectorAll('.signOperator');
let equalBtn = document.querySelector('.equalBtn');
let value1;
let currentOperator;
let currentSign;

// displaying the number clicked in the input
function digitPressed(button) {
    const inputBox = document.querySelector('#inputBox');
    
    if(isInputValueZero) {
        inputBox.value = button;
        isInputValueZero = false;
    }else {
        let currentValue = inputBox.value;
        inputBox.value = currentValue + button;
    }

}

// operator clicked
function digitDisplay() {
    let digits = document.querySelectorAll('.digit');
    digits.forEach((digit) => {
        digit.addEventListener('click', () => {
            digitPressed(digit.textContent);
        });
    })
}

digitDisplay();

// clear the entire input
function allClearButt() {
    inputBox.value = 0;
    isInputValueZero = true;
};

allClear.addEventListener('click', allClearButt);

function operatorPressed(operator) {
    currentOperator = operator;
    value1 = parseFloat(inputBox.value);
    isInputValueZero = true;
}

operators.forEach((sign) => {
    sign.addEventListener('click', () => {
        operatorPressed(sign.textContent);
    });
})

// equal button
function equalBtnPressed() {
    let value2 = parseFloat(inputBox.value);
    let finalTotal;

    switch(currentOperator) {
        case "+": 
            finalTotal = value1 + value2;
            break;
        case "-": 
        finalTotal = value1 - value2;
            break;
            case "/": 
            finalTotal = value1 / value2;
            break;
        case "x": 
        finalTotal = value1 * value2;
        break;
        
    }
    inputBox.value = finalTotal;
    if(isNaN(finalTotal)) {
        alert('enter valid number');
        inputBox.value = 0;
    };
    
    value1 = 0;
    isInputValueZero = true;
}

equalBtn.addEventListener('click', equalBtnPressed);

// sign operator

function operatorSigns(currentSign) {
    switch(currentSign) {
        case '%':
            inputBox.value = inputBox.value / 100;
            break;
        case '.':
            inputBox.value = inputBox.value + '.';
            console.log(typeof(inputBox.value));
            defaultE(currentSign);
            break;
        case '+/-': 
            inputBox.value = inputBox.value * -1;
            break;
    }   

    inputBox.value = parseFloat(inputBox.value);
    isInputValueZero = true;
}

signOperators.forEach((sign) => {
    sign.addEventListener('click', () => {
        operatorSigns(sign.textContent);
    })
})

function defaultE(sign) {
    if(sign.contains('.')) {
       sign.textContent = '';
    }
