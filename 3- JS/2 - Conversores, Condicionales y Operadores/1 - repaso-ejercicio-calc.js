"use strict";

// los prompt son alertas que tienen un input por parte del usuario
let numA = parseFloat(prompt("Dime un numero"));
if (isNaN(numA)) {
  alert("Numero no valido");
}
let numB = parseFloat(prompt("Dime un segundo numero"));
if (isNaN(numB)) {
  alert("Numero no valido");
}

alert("Esto es una alerta"); // alerta al uso
confirm("Permites que acceda a tu ubicacion"); // alerta pidiendo confirmacion si o no , true or false

let operador = prompt("Dime un tipo de operador (+, -, *, /, %)");

switch (operador) {
  case "+":
    console.log(numA + numB);
    break;
  case "-":
    console.log(numA - numB);
    break;
  case "*":
    console.log(numA * numB);
    break;
  case "/":
    console.log(numA / numB);
    break;
  case "%":
    console.log(numA % numB);
    break;
  default:
    alert("Operador no valido");
    break;
}
