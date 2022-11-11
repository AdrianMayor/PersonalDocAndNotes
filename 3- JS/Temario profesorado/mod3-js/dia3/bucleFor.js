'use strict';

/**
 * Bucle FOR
 */

/* 
    for (declaracion de contador ; condicion ; modificacion del contador) {
        // codigo a ejecutar
    }
*/

for (let i = 0; i < 10; i++) {
  // codigo
  console.log(i);
}

for (let i = 0; i <= 100; i += 5) {
  console.log(i);
}

console.log('Bucle de 100 a 0');
for (let i = 100; i >= 0; i -= 10) {
  console.log(i);
}

console.log('Yo no me ejecuto hasta que los bucles terminan');

// Parar un bucle
for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i === 5) {
    break;
  }
}

console.log('Saltamos una vuelta');
// Saltar alguna vuelta del bucle
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

console.log('***************************');
// Pedimos al usuario que indique un numero de vueltas
let numeroVueltas = prompt('Cuantas veces quieres que se repita el bucle');

for (let i = 4; i <= numeroVueltas; i++) {
  console.log(i);
}
