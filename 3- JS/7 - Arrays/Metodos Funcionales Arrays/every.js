"use strict";

/* 
    METODOS FUNCIONALES DE ARRAY

    -> Son metodos que funcionan con callback
*/

const numeros = [2, 10, 5, 8, 22, 50];
const colores = ["blanco", "azul", "negro"];

/* 
    EVEY()

        -> Funciona igual que un condicional AND
*/

/* if ('blanco'=== 'negro'&& 'azul' ==='negro' && 'negro' === 'negro') {
    return true;
} */

// Son todos los numeros mayores de 20?
console.log(numeros.every((num) => num > 20));

//Son todos los numeros menores que 100?
console.log(numeros.every((num) => num < 100));

// todos los colores empiezan por la letra 'a'? | Nos estamos quedando solo con la primera posicion del array, por tanto da true
console.log(colores.every((key) => key.slice(0, 1) === "a"));

///////////////////////////

// Como funciona every?

function customEvery(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      return false;
    }
  }
  return true;
}

console.log(customEvery(numeros, (num) => num < 100));
