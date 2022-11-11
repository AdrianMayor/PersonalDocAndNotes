'use strict';

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

function sonIguales(arrA, arrB) {
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      return 'Son distintos';
    }
  }

  return 'Son iguales';
}

console.log(sonIguales(arr1, arr2));
console.log(sonIguales(arr1, arr3));
console.log(sonIguales(arr1, arr4));
console.log(sonIguales(arr2, arr3));
console.log(sonIguales(arr2, arr3));
console.log(sonIguales(arr3, arr4));
