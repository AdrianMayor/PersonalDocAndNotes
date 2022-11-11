'use strict';

// Crear 2 variables para numeros
// Otra variable tipo texto (string) para el operador

let numA = parseFloat(prompt('Dime un numero:'));
let numB = parseFloat(prompt('Dime otro numero:'));

let operador = prompt('Dime un tipo de operador (+, -, *, /, %)');

// Solucion con if
if (operador === '+') {
  console.log(numA + numB);
} else if (operador === '-') {
  console.log(numA - numB);
} else if (operador === '*') {
  console.log(numA * numB);
} else if (operador === '/') {
  console.log(numA / numB);
} else if (operador === '%') {
  console.log(numA % numB);
} else {
  alert('No es un operador valido');
}

// Solucion con switch
switch (operador) {
  case '+':
    console.log(numA + numB);
    break;
  case '-':
    console.log(numA - numB);
    break;
  case '*':
    console.log(numA * numB);
    break;
  case '/':
    console.log(numA / numB);
    break;
  case '%':
    alert(numA % numB);
    break;

  default:
    alert('No es un operador valido');
    break;
}

/* alert('Esto es una alerta');

confirm('Permites que acceda a tu ubicacion?'); */

/* if (confirm('Permites que acceda a tu ubicacion?')) {
  // codigo para acceder a su ubicacion
} else {
  alert(':(');
} */
