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


/* Arrow Function - Multiply Numbers */


/* Open Function Use - Divide Numbers */


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
