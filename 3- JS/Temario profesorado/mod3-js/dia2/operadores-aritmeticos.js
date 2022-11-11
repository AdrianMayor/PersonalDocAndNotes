'use strict';

/**
 * OPERADORES ARITMETICOS
 */

// suma
console.log('suma:', 5 + 3);

// resta
console.log('resta:', 5 - 3);

// multiplicacion
console.log('multiplicacion:', 5 * 3);

// division
console.log('division:', 5 / 3);

// el resto de una division -> %
console.log('resto de la division:', 5 % 3);
// se usa sobretodo para saber si un número es par o impar
console.log('el numero 10 es par?', 10 % 2);

// Operadores del objeto Math
console.log('Raiz cuadrada de 4:', Math.sqrt(4));

// OPERADORES QUE CAMBIAN EL VALOR DE LA VARIABLE
let numeroA = 5;
let numeroB = 10;

console.log(numeroA);

// suma 1 al valor de numeroA -> ++
numeroA++; // numeroA = numeroA + 1;
console.log('NumeroA++', numeroA);

// restar 1 al valor de numeroA -> --
numeroA--;
console.log('NumeroA--', numeroA);

// asignarle el resultado de una suma
numeroA += numeroB; // numeroA = numeroA + numeroB;
console.log('numeroA+=numeroB', numeroA);

numeroA -= numeroB; // numeroA = numeroA - numeroB;
console.log('numeroA -= numeroB', numeroA);

// JavaScript sigue el orden de las matematicas
console.log(2 + 2 * 4);
console.log((2 + 2) * 4);
console.log(10 - 5 * 2 + 4);
