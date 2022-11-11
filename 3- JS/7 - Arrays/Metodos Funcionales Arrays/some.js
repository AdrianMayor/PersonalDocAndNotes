"use strict";

/* 
    METODOS FUNCIONALES DE ARRAY

         -> Son metodos que funcionan con callback
*/

const numeros = [2, 10, 5, 8, 22, 50];
const colores = ["blanco", "azul", "negro"];

/* 
    SOME()

    -> Devuelve verdadero (true) si en el callback ALGUNO de los elementos de los arrays cumple con la condicion indicada
    -> Es igual o similar a la doncidion OR de los if 
*/

// Alguno de los numeros es mayor de 20?
console.log(numeros.some((num) => num > 20));

// Alguno de los numeros es mayor de 100?
console.log(numeros.some((key) => key > 100));

// El array colores tiene el
console.log(colores.some((color) => color === "negro"));

/* if ('blanco'=== 'negro'||'azul' ==='negro' || 'negro' === 'negro') {
    return true;
} */

///////////////////////////////////

// Como funciona some()?

function customSome(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return true;
    }
  }
  return false;
}

console.log(customSome(numeros, (num) => num > 20));
