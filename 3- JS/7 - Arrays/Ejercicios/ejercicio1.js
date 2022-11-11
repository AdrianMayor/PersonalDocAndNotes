"use strict";

/**
 * ###################
 * ### Ejercicio 1 ###
 * ###################
 *
 * Crea una funcion que recibe un array de números y devuelve uno nuevo
 * con el doble de cada número
 */

console.log("Array Inicial");
const numbers = [1, 2, 3, 4];
console.log(numbers);

console.log("");
console.log("Ejercicio hecho con bucles propios");
function double(array) {
  const numberX2 = [];
  for (const value of array) {
    numberX2.push(value * 2);
  }
  console.log(numberX2);
}

double(numbers);

console.log("");
console.log("Ejercicio hecho con metodo funcional MAP");
function doubleNumbers(currentValue) {
  return currentValue * 2;
}

console.log(numbers.map(doubleNumbers));
