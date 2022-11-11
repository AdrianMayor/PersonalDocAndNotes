'use strict';

/**
 * MÉTODOS FUNCIONALES DE ARRAY
 */

// Son metodos que funcionan con callback

const numeros = [2, 10, 5, 8, 22, 50];
const colores = ['azul', 'blanco', 'negro'];

// if ('azul' === 'negro' && 'blanco' === 'negro' && 'negro' === 'negro')

/**
 * EVERY()
 *
 * Funciona igual que el condicional AND
 */

// Son todos los numeros mayores de 20?
console.log(numeros.every((num) => num > 20));

// Son todos los números menores de 100?
console.log(numeros.every((num) => num < 100));

// Todos los colores empiezan por la letra 'a'?
console.log(colores.every((color) => color.slice(0, 1) === 'a'));

//////////////////////

// Cómo funciona every?

function customEvery(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      return false;
    }
  }

  return true;
}

// Son todos los números menores de 100?
console.log(customEvery(numeros, (num) => num < 100));
