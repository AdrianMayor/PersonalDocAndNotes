/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Escribe un programa que permita al usuario concatenar elementos en un string.
 * El programa finalizará cuando el usuario introduzca el string "fin", y se
 * mostrará por consola el contenido del array.
 *
 */

// Bucles + array || Podemos hacerlo con strings
// Cada palabra que introduce el usuario es un elemento nuevo del array

'use strict';

// Con strings
let word;
let cadenaResultado = '';

while (word !== 'fin') {
  word = prompt('Indica una palabra (fin para terminar)');

  if (word !== 'fin') cadenaResultado += word += ' ';

  console.log(cadenaResultado);
}

// Con arrays
let word2;
const arrayResultado = [];

while (word2 !== 'fin') {
  word2 = prompt('(Array) Indica una palabra (fin para terminar)');

  if (word2 !== 'fin') arrayResultado.push(word2);

  console.log(arrayResultado.join(' '));
}
