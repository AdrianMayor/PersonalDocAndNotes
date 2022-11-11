'use strict';

/**
 * MÉTODOS FUNCIONALES DE ARRAY
 */

// Son metodos que funcionan con callback

const numeros = [2, 10, 5, 8, 22, 50];
const colores = ['azul', 'blanco', 'negro'];

// if ('azul' === 'negro' || 'blanco' === 'negro' || 'negro' === 'negro')

/**
 * SOME()
 *
 * Es igual a la condicion OR de los if
 */

// Devuelve true si en el callback ALGUNO de los elementos del array cumple la condicion indicada

// Alguno de los numeros es mayor de 20?
console.log(numeros.some((num) => num > 20));

// Alguno de los numeros es mayor de 100?
console.log(numeros.some((num) => num > 100));

// El array colores tiene el color negro?
console.log(colores.some((color) => color === 'negro'));

/////////////////////////

// Cómo funciona some()?

function customSome(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return true;
    }
  }

  return false;
}

// Alguno de los numeros es mayor de 20?
console.log(customSome(numeros, (num) => num > 20));
