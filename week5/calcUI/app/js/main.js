const calcInput = document.getElementById('calcInput');
const ZERO = '0';
const KEYPAD_EQUAL = '=';
const KEYPAD_CLEAR = 'С';
const KEYPAD_BACKSPACE = 'backspace';
const KEYPAD_OPERATIONS = {
  mult: '×',
  del: '÷',
  sum: '+',
  diff: '-'
}

const KEYPAD_NUMBERS = {
  0: ZERO,
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9'
}

const FONT_SIZE = {
  96: '96px',
  55: '55px',
  35: '35px',
  25: '25px'
}



document.getElementById('equalBtn').addEventListener('click', calculate);
document.getElementById('clearBtn').addEventListener('click', clearInput);
document.getElementById('backspaceBtn').addEventListener('click', backspaceInput);
document.querySelectorAll('.calc__btn--number').forEach(btnNumber => {
  btnNumber.addEventListener('click', () => addNumberInInput(this));
});
document.querySelectorAll('.calc__btn--operation').forEach(btnOperation => {
  btnOperation.addEventListener('click', () => addOperationInInput(this));
});





function checkBtnType(event) { // Эта функция ловит нажатие на клавишу калькулятор и определяет тип этой клавиши => [мат. оператор/цифра/знак равно/кнопка Clear/кнопка Backspace]

  const btn = event.target.textContent;

  switch (true) {
    case KEYPAD_OPERATIONS.includes(btn):
      addOperationInInput(btn);
      break;
    case keypadNumbers.includes(btn):
      addNumberInInput(btn);
      break;
    case keypadEqual === btn:
      calculate();
      break;
    case keypadClear === btn:
      clearInput();
      break;
    case keypadBackspace === btn:
      backspaceInput();
      break;
    default:
      console.log('Somethin is wrong!');
      break;
  }

  checkNumbersLength();
}

function addOperationInInput(operation) { // Эта функция добавляет математический оператор в поле input
  let calcValue = calcInput.value;
  if (calcValue !== ZERO) {
    KEYPAD_OPERATIONS.includes(calcValue[calcValue.length - 1]) ? calcValue = calcValue.slice(0, -1) + operation : calcValue += operation;
    calcInput.value = calcValue; // доваляем математический оператор в выражение
  } else if (calcValue === ZERO && operation === '-') {
    calcInput.value = operation;
  }
}

function addNumberInInput(btn) { // Эта функия добавляет цифру в поле input
  let number = btn.target.textContent;
  let calcValue = calcInput.value;

  switch (true) {
    case calcValue === ZERO && number !== ZERO:
      calcValue = number;
      calcInput.value = calcValue;
      break;
    case !(KEYPAD_OPERATIONS.is(calcValue[calcValue.length - 1]) && number === ZERO && calcValue !== ZERO):
      calcValue += number;
      calcInput.value = calcValue;
      break;
  }
}

function clearInput() { // Очищаем поле ввода input
  calcInput.value = ZERO;
}

function backspaceInput() { // Удалаем последний символ из поля ввода input
  let calcValue = calcInput.value;
  if (calcValue.length > 1) { // Если удаляем последнюю цифру, то на ее место ставим 0
    calcInput.value = calcValue.slice(0, -1);
  } else {
    calcInput.value = ZERO; // Здесь
  }
}

function checkNumbersLength() {
  switch (true) {
    case (calcInput.value.length > 16):
      setInputFontSize(FONT_SIZE[25])
      break;
    case (calcInput.value.length > 10):
      setInputFontSize(FONT_SIZE[35])
      break;
    case (calcInput.value.length >= 6):
      setInputFontSize(FONT_SIZE[55])
      break;
    case (calcInput.value.length < 6):
      setInputFontSize(FONT_SIZE[96])
      break;
    default:
      console.log('Something is wrong!');
      break;
  }
}

function setInputFontSize(fontSize) {
  calcInput.style.fontSize = fontSize;
}

function calculate() {
  let numbersArray = [];
  let operationsArray = [];
  let expression = calcInput.value;
  let result = 0;
  splitInputExpression(expression);

  numbersArray.length === operationsArray.length ? operationsArray.pop() : '';

  result = +getResult().toFixed(2);
  calcInput.value = result;

  function splitInputExpression(string) {
    for (let i = 1; i < string.length; i++) {
      if (KEYPAD_OPERATIONS.includes(string[i])) {
        numbersArray.push(string.slice(0, i));
        operationsArray.push(string.slice(i, i + 1));
        splitInputExpression(string.slice(i + 1, string.length));
        return;
      }
    }
    string !== '' ? numbersArray.push(string) : '';
  }

  function getResult() {
    do {
      for (let j = 0; j < KEYPAD_OPERATIONS.length; j++) {
        for (let i = 0; i < operationsArray.length; i++) {
          if (KEYPAD_OPERATIONS[j] === operationsArray[i]) {
            switch (operationsArray[i]) {
              case '×':
                numbersArray[i] = +numbersArray[i] * +numbersArray[i + 1];
                break;
              case '÷':
                numbersArray[i] = +numbersArray[i] / +numbersArray[i + 1];
                break;
              case '+':
                numbersArray[i] = +numbersArray[i] + +numbersArray[i + 1];
                break;
              case '-':
                numbersArray[i] = +numbersArray[i] - +numbersArray[i + 1];
                break;
            }
            numbersArray.splice(i + 1, 1);
            operationsArray.splice(i, 1);
          }
        }
      }
    } while (numbersArray.length > 1)
    return numbersArray[0];
  }
}