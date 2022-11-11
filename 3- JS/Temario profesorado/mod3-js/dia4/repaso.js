'use strict';

/**
 * BUCLES
 */

// FOR
/* 
    for (contador ; condicion (numero de vueltas) ; modificador del contador) {
        // codigo
    }
*/

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

console.log('Me ejecuto cuando termina el bucle');

let numVueltas = 20;
for (let i = 30; i >= numVueltas; i -= 2) {
  console.log(i);
}

//// Parar un bucle -> BREAK

for (let i = 1; i < 30; i += 2) {
  if (i > 7) {
    console.log('Paramos el bucle');
    break;
    console.log('Esto no se ejecuta');
  }

  console.log(i);
}

//// Saltar una vuelta del bucle -> CONTINUE

let h = 5;
for (let i = h; i < 30; i += 5) {
  if (i === 10) {
    console.log('Me salto el numero 10');
    continue;
  }

  console.log(i);
}

// WHILE (mientras)

let palabra = prompt('Dime una palabra: (stop para detener el bucle)');

let cadenaTexto = '';

while (palabra !== 'stop') {
  cadenaTexto += palabra + ' ';

  console.log(cadenaTexto);
  palabra = prompt('Dime otra palabra (stop para detener el bucle):');
}

// DO... WHILE

do {
  console.log('Se ejecuta una vez por lo menos aunque la condicion sea false');
} while (10 < 3);

//////
let edad = parseInt(prompt('Dime tu edad:'));
console.log(edad + 10);
