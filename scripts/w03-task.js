/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
  }
  
function addNumbers() {
    const add1 = document.getElementById("add1");
    const add2 = document.getElementById("add2");
    const sum = document.getElementById("sum");
  
    const num1 = Number(add1.value);
    const num2 = Number(add2.value);
  
    sum.value = add(num1, num2);
  }
  
document.querySelector('#addNumbers').addEventListener('click', addNumbers); 

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
  }
  
  const subtractNumbers = function() {
    const subtract1 = document.getElementById("subtract1");
    const subtract2 = document.getElementById("subtract2");
    const difference = document.getElementById("difference");
  
    const num1 = Number(subtract1.value);
    const num2 = Number(subtract2.value);
  
    difference.value = subtract(num1, num2);
  }
  
  document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
  const factor1 = document.getElementById("factor1");
  const factor2 = document.getElementById("factor2");
  const product = document.getElementById("product");

  const num1 = Number(factor1.value);
  const num2 = Number(factor2.value);

  product.value = multiply(num1, num2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    if (divisor === 0) {
      throw new Error('Cannot divide by zero');
    }
    return dividend / divisor;
  }
  
  const divideNumbers = () => {
    const dividend = document.getElementById("dividend");
    const divisor = document.getElementById("divisor");
    const quotient = document.getElementById("quotient");
  
    const num1 = Number(dividend.value);
    const num2 = Number(divisor.value);
  
    try {
      quotient.value = divide(num1, num2);
    } catch (error) {
      alert(error.message);
    }
  }
  
  document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
const subtotal = document.getElementById("subtotal");
const member = document.getElementById("member");
const getTotal = document.getElementById("getTotal");
const total = document.getElementById("total");

getTotal.addEventListener('click', () => {
  const subtotalValue = Number(subtotal.value);
  let discount = 0;
  if (member.checked) {
    discount = subtotalValue * 0.2;
  }
  const totalValue = subtotalValue - discount;
  total.textContent = `$${totalValue.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
