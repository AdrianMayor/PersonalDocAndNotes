'use strict';

/**
 * Bucle WHILE
 */

/* 
    while (condicion) {
        // codigo
    }
*/

let tiempo = 10;

while (tiempo >= 0) {
  console.log(`Quedan ${tiempo} horas de juego`);

  tiempo--;
}

console.log('EL bucle while ha terminado');

// Pedir una palabra al usuario (prompt) y seguirá pidiendola
// hasta que teclee STOP

let palabra = prompt('Indicame una palabra: ');

while (palabra.toUpperCase() !== 'STOP') {
  console.log(palabra);

  palabra = prompt(
    'Estas dentro del bucle, indica una palabra, teclea STOP para termiar:'
  );
}

////////

let word = prompt('Dime una palabra');
let frase = '';

while (word !== 'PARA') {
  /* 
  if (frase.length < 1) {
    frase += word;
  } else {
    frase += ' ' + word;
  }
  */
  frase += word + ' ';

  console.log(frase);

  word = prompt(
    'Indica una palabra para añadir a la cadena, teclea PARA para parar'
  );
}

// DO... WHILE

const age = 21;

while (age < 10) {
  console.log('Esto no se ejecuta nunca');
}

do {
  console.log('Esto se ejecuta al menos 1 vez');
} while (age < 10);
