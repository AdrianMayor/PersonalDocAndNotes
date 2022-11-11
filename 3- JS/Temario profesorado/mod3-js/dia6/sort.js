'use strict';

/**
 * MÉTODOS FUNCIONALES
 */

// Son métodos que utilizan callbacks

const frutas = ['uva', 'manzana', 'platano', 'naranja'];

console.log(frutas);

/**
 * SORT()
 */
// nos permite ordenar los elementos de un array

console.log(frutas.sort()); // ordenamos el array frutas
console.log(frutas.sort().reverse()); // lo ordenamos de manera inversa

//// El metodo sort trata los elementos como strings, por lo que con los numeros tiene
// problems

const numeros = [10, 2, 50, 6, 23];

console.log(numeros.sort());

// Para evitar esto usamos una funcion de comparacion

function comparacion(a, b) {
  // -1 : 'a' es menor que 'b' por lo que situa a 'a' en un indice menor
  // 0 : los deja como está
  // 1 : situa a 'a' en un indice mayor a 'b'
  return a - b;
}

console.log(numeros.sort(comparacion));
console.log(numeros.sort((a, b) => a - b));
