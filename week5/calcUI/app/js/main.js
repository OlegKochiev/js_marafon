const calcBtns = document.getElementsByClassName('calc__btn');
const calcInput = document.getElementById('calcInput');

const keypadOperations = ['×', '÷', '+', '-'];
const keypadNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const keypadEqual = '=';
const keypadClear = 'С';
const keypadBackspace = 'backspace';

for (btn of calcBtns) {
  btn.addEventListener('click', checkBtnType);
}

function checkBtnType(event) { // Эта функция ловит нажатие на клавишу калькулятор и определяет тип этой клавиши => [мат. оператор/цифра/знак равно/кнопка Clear/кнопка Backspace]

  const btn = event.target.textContent;

  switch (true) {
    case keypadOperations.includes(btn):
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
  if (calcValue !== '0') {
    if (keypadOperations.includes(calcValue[calcValue.length - 1])) { // Проверям последний введенный символ, если это математический оператор, то заменяем его на тот, который вводим
      calcValue = calcValue.slice(0, -1) + operation; // Заменяем крайний математический оператор на нововведенный
    } else {
      calcValue += operation;
    }
    calcInput.value = calcValue; // доваляем математический оператор в выражение
  } else if (calcValue === '0' && operation === '-') {
    calcInput.value = operation;
  }
}

function addNumberInInput(number) {
  let calcValue = calcInput.value;
  if (calcValue === '0' && number !== '0') { // Делаем так, что бы в input при очистке выражения был 0, и убераем его, когда начинаем вводить в него цифры
    calcValue = number;
    calcInput.value = calcValue;
  } else if (calcValue !== '0') {
    if (!(keypadOperations.includes(calcValue[calcValue.length - 1]) && number === '0')) {
      calcValue += number;
      calcInput.value = calcValue;
    }
  }
}

function clearInput() {
  calcInput.value = '0';
}

function backspaceInput() {
  let calcValue = calcInput.value;
  if (calcValue.length > 1) { // Если удаляем последнюю цифру, то на ее место ставим 0
    calcInput.value = calcValue.slice(0, -1);
  } else {
    calcInput.value = '0'; // Здесь
  }
}

function checkNumbersLength() {
  switch (true) {
    case (calcInput.value.length > 16):
      calcInput.style.fontSize = '25px';
      break;
    case (calcInput.value.length > 10):
      calcInput.style.fontSize = '35px';
      break;
    case (calcInput.value.length >= 6):
      calcInput.style.fontSize = '55px';
      break;
    case (calcInput.value.length < 6):
      calcInput.style.fontSize = '96px';
      break;
    default:
      console.log('Something is wrong!');
      break;
  }
  if (calcInput.value.length > 6) {}
}

function calculate() {
  let numbersArray = [];
  let operationsArray = [];
  let expression = calcInput.value;

  splitInputExpression(expression);

  if (numbersArray.length === operationsArray.length) {
    operationsArray.pop();
  }

  let result = 0;
  result = +getResult().toFixed(2);
  calcInput.value = result;


  function splitInputExpression(string) {
    for (let i = 1; i < string.length; i++) {
      if (keypadOperations.includes(string[i])) {
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
      for (let j = 0; j < keypadOperations.length; j++) {
        for (let i = 0; i < operationsArray.length; i++) {
          if (keypadOperations[j] === operationsArray[i]) {
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