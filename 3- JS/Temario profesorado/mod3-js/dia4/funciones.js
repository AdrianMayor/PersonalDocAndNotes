'use strict';

/**
 * Funciones
 */

/* 
    function nombre() {
        // Codigo de la funcion
    }

    nombre();
*/

// Declaramos una funcion
function sayHi() {
  console.log('Hola!');
}

// Llamamos a la funcion
sayHi();

// Funcion con argumentos

function suma(numA, numB) {
  console.log(numA + numB);
}

suma(10, 5);

console.log('Hay mucho codigo de por medio');

/* let numeroA = parseInt(prompt('Dime un numero: '));
let numeroB = parseInt(prompt('Dime otro numero: ( teclea 0 para detener)'));

while (numeroB !== 0) {
  suma(numeroA, numeroB);

  numeroA = parseInt(prompt('Dime un numero: '));
  numeroB = parseInt(prompt('Dime otro numero: ( teclea 0 para detener)'));
} */

/* function operacion(numA, numB, numC, opeador) {
    if (!numC) {
        console.log(numA + numB);
    }

    console.log(numA + numB + numC);
} */

// RETURN

function duplicarNumero(num) {
  return num * 2; // Devuelve el numero * 2
}

console.log(duplicarNumero(4));

// Se puede asignar lo que devuelve la funcion a una variable
let elDobleDe = duplicarNumero(4);

console.log(elDobleDe);

function suma2(numA, numB) {
  return numA + numB;
}

let operacionMasCompleja = suma2(10, 5) / 2;
console.log(operacionMasCompleja);

function operacion(numA, numB, numC) {
  if (!numC) {
    return numA + numB;
  } else if (!numA) {
    return numB + numC;
  }

  return numA + numB + numC;
}

// null y undefined son false
console.log(operacion(null, 5, 10));
