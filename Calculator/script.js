const output = document.querySelector('.output');
const allClear = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const equals = document.querySelector('[data-equals]');
const numbers = document.querySelectorAll('[data-number]');
const operations = document.querySelectorAll('[data-operation]');

let previousOperandTextElement = document.querySelector('[data-previous-operand]');
let currentOperandTextElement = document.querySelector('[data-current-operand]');

let firstValue = '';
let secondValue = '';
let operation = undefined;

numbers.forEach(number => {
  number.addEventListener('click', () => {
    if (operation) {
      secondValue += number.innerText;
      currentOperandTextElement.innerText = secondValue;
    } else {
      firstValue += number.innerText;
      currentOperandTextElement.innerText = firstValue;
    }
  });
});

operations.forEach(operationBtn => {
  operationBtn.addEventListener('click', () => {
    operation = operationBtn.innerText;
    previousOperandTextElement.innerText = `${firstValue} ${operation}`;
    currentOperandTextElement.innerText = '';
  });
});

allClear.addEventListener('click', () => {
  firstValue = '';
  secondValue = '';
  operation = undefined;
  previousOperandTextElement.innerText = '';
  currentOperandTextElement.innerText = '';
});

deleteBtn.addEventListener('click', () => {
  if (secondValue) {
    secondValue = secondValue.substring(0, secondValue.length - 1);
    currentOperandTextElement.innerText = secondValue;
  } else if (firstValue) {
    firstValue = firstValue.substring(0, firstValue.length - 1);
    currentOperandTextElement.innerText = firstValue;
  }
});

equals.addEventListener('click', () => {
  let result;
  switch (operation) {
    case '+':
      result = parseFloat(firstValue) + parseFloat(secondValue);
      break;
    case '-':
      result = parseFloat(firstValue) - parseFloat(secondValue);
      break;
    case '*':
      result = parseFloat(firstValue) * parseFloat(secondValue);
      break;
    case '÷':
      result = parseFloat(firstValue) / parseFloat(secondValue);
      break;
    default:
      return;
  }
  currentOperandTextElement.innerText = result;
  firstValue = result;
  secondValue = '';
  operation = undefined;
  
});