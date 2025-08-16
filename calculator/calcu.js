// dom elements
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
       // signOptor(button);
        isInputValueZero = false;
    }else {
        let currentValue = inputBox.value;
        inputBox.value = currentValue + button;
       // signOptor(inputBox.value);
        console.log(currentValue);
    }

}

// operator clicked
function digitDisplay() {
    let digits = document.querySelectorAll('.digit');
    console.log(digits);
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
    value1 = parseInt(inputBox.value);
    isInputValueZero = true;
}

operators.forEach((sign) => {
    sign.addEventListener('click', () => {
        operatorPressed(sign.textContent);
    });
})

// equal button
function equalBtnPressed() {
    let value2 = parseInt(inputBox.value);
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
    console.log(finalTotal);
    
    value1 = 0;
    isInputValueZero = true;
}

equalBtn.addEventListener('click', equalBtnPressed);

// sign operator

/*function signOptor(value) {
    let percent = document.querySelector('.percentage');
    let percentSum;

    percent.addEventListener('click', () => {
        console.log(inputBox.value);
        percentSum = parseInt(value) / 100; 
        console.log('clicked');
        console.log(percentSum);  
    });
}*/

function signOptor(sign) {
    const inputBox = document.querySelector('#inputBox');
    const currentInpu = parseInt(inputBox.value);

    if(sign === '%') {
        inputBox.value = currentInpu / 100;
    }else if(sign === ',') {
        inputBox.value = parseFloat(currentInpu + ',');
    }else if(sign === '+/-') {
        inputBox.value = '-' + currentInpu;
    }else{
        inputBox.value = currentInpu;
    }

};

signOperators.forEach((sign) => {
    sign.addEventListener('click', () => {
        signOptor(sign.textContent);
    });
})