"use strict";

/**
 * ###################
 * ### Ejercicio 3 ###
 * ###################
 *
 * Crea una funcion que recibe 2 array y devuelva true si son iguales
 * (si tienen el mismo contenido) y false si no
 */

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [2, 3, 1];
const arr4 = [4, 2, 1];

console.log(arr1 === arr2); // Ojo esto no sirve, hay que comparar el contenido
console.log("");

function comparison(array, array2) {
  for (const value of array) {
    const check = array2.includes(value);
    if (!check) {
      return console.log("Los array son distintos");
    }
  }
  return console.log("Los arrays son iguales");
}

comparison(arr1, arr3);
comparison(arr1, arr2);
comparison(arr1, arr4);
