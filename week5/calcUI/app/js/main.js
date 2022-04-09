// @ts-nocheck
const calcInput = document.getElementById("calcInput");
const ZERO = "0";
const KEYPAD_OPERATIONS = "×÷+-";

const FONT_SIZE = {
  96: "96px",
  55: "55px",
  35: "35px",
  25: "25px",
};

function setInputFontSize(fontSize) {
  calcInput.style.fontSize = fontSize;
}

function checkNumbersLength() {
  switch (true) {
    case (calcInput.value.length > 16):
      setInputFontSize(FONT_SIZE[25]);
      break;
    case (calcInput.value.length > 10):
      setInputFontSize(FONT_SIZE[35]);
      break;
    case (calcInput.value.length >= 6):
      setInputFontSize(FONT_SIZE[55]);
      break;
    case (calcInput.value.length < 6):
      setInputFontSize(FONT_SIZE[96]);
      break;
    default:
      break;
  }
}

function addOperationInInput(event) { // Эта функция добавляет математический оператор в поле input
  checkNumbersLength();
  const operation = event.target.textContent;
  let calcValue = calcInput.value;
  if (calcValue !== ZERO) {
    if (KEYPAD_OPERATIONS.includes(calcValue[calcValue.length - 1])) {
      calcValue = calcValue.slice(0, -1) + operation;
    } else {
      calcValue += operation;
    }
    calcInput.value = calcValue; // доваляем математический оператор в выражение
  } else if (calcValue === ZERO && operation === "-") {
    calcInput.value = operation;
  }
}

function addNumberInInput(event) { // Эта функия добавляет цифру в поле input
  checkNumbersLength();
  const number = event.target.textContent;
  let calcValue = calcInput.value;
  switch (true) {
    case calcValue === ZERO && number !== ZERO:
      calcValue = number;
      calcInput.value = calcValue;
      break;
    case !(KEYPAD_OPERATIONS.includes(calcValue[calcValue.length - 1])
    && number === ZERO
    && calcValue !== ZERO):
      calcValue += number;
      calcInput.value = calcValue;
      break;
    default:
      break;
  }
}

function clearInput() {
  calcInput.value = ZERO;
  checkNumbersLength();
}

function backspaceInput() {
  const calcValue = calcInput.value;
  if (calcValue.length > 1) {
    calcInput.value = calcValue.slice(0, -1);
  } else {
    calcInput.value = ZERO;
  }
  checkNumbersLength();
}

function calculate() {
  const numbersArray = [];
  const operationsArray = [];
  const expression = calcInput.value;
  let result = 0;
  function splitInputExpression(string) {
    for (let i = 1; i < string.length; i += 1) {
      if (KEYPAD_OPERATIONS.includes(string[i])) {
        numbersArray.push(string.slice(0, i));
        operationsArray.push(string.slice(i, i + 1));
        splitInputExpression(string.slice(i + 1, string.length));
        return;
      }
    }
    if (string !== "") {
      numbersArray.push(string);
    }
  }

  function getResult() {
    do {
      for (let j = 0; j < KEYPAD_OPERATIONS.length; j += 1) {
        for (let i = 0; i < operationsArray.length; i += 1) {
          if (KEYPAD_OPERATIONS[j] === operationsArray[i]) {
            switch (operationsArray[i]) {
              case "×":
                numbersArray[i] = +numbersArray[i] * +numbersArray[i + 1];
                break;
              case "÷":
                numbersArray[i] = +numbersArray[i] / +numbersArray[i + 1];
                break;
              case "+":
                numbersArray[i] = +numbersArray[i] + +numbersArray[i + 1];
                break;
              case "-":
                numbersArray[i] = +numbersArray[i] - +numbersArray[i + 1];
                break;
              default:
                break;
            }
            numbersArray.splice(i + 1, 1);
            operationsArray.splice(i, 1);
          }
        }
      }
    } while (numbersArray.length > 1);
    return numbersArray[0];
  }

  splitInputExpression(expression);
  if (numbersArray.length === operationsArray.length) {
    operationsArray.pop();
  }
  result = +getResult().toFixed(2);
  calcInput.value = result;
  checkNumbersLength();
}

document.getElementById("equalBtn").addEventListener("click", calculate);
document.getElementById("clearBtn").addEventListener("click", clearInput);
document.getElementById("backspaceBtn").addEventListener("click", backspaceInput);
document.querySelectorAll(".calc__btn--number").forEach((btnNumber) => {
  btnNumber.addEventListener("click", addNumberInInput);
});

document.querySelectorAll(".calc__btn--operation").forEach((btnOperation) => {
  btnOperation.addEventListener("click", addOperationInInput);
});
