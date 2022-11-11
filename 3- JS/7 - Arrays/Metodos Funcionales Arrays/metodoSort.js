"use strict";

/* 
    METODOS FUNCIONALES -> (Porque utilizan funciones callbacks)
*/

const frutas = ["uva", "manzana", "platano", "naranja"];

console.log(frutas);

/* 
    SORT() -> nos permite ordenar los elemento de un array
*/

console.log(frutas.sort()); // ordenamos el array de frutas por orden alfabetico
console.log(frutas.sort().reverse()); // ordenamos el array de frutas por orden alfabetico inverso

// Con strings va perfecto,ya que trata los elementos como string, pero con numeros da problemas

const numeros = [10, 2, 50, 6, 23];

console.log(numeros.sort()); // Los ordena como strings

// Para evitar esto usamos una funcion de comparacion

function comparacion(a, b) {
  /* 
    Compara todas las parejas de numeros y:
        // -1: 'a' es menor que 'b' por lo que situa a 'a' en un indice menor
        // 0: lo deja donde esta
        // 1: situa a 'a' en un indice mayor a 'b'
    */
  return a - b;
}

console.log(numeros.sort(comparacion));
console.log(numeros.sort((a, b) => a - b));
