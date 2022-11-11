'use strict';

// Crear un bucle que vaya de 0 a 100 incrementando de 10 en 10
/* for (let i = 0; i <= 100; i += 10) {
  console.log(i);
} */

// Crear un bucle que vaya de 50 a 30 decrementando de 1 en 1
/* for (let i = 50; i >= 30; i--) {
  console.log(i);
} */

// Bucle que recorra los numeros del 0 al 10 y nos diga si el numero
// es par o impar

/* for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} es par`);
  } else {
    console.log(`${i} es impar`);
  }
} */

// Crear un bucle que pida al usuario una palabra y se muestra por pantalla
// si el usuario teclea 'salir' el bucle finaliza

// Escribir un programa que pida al usuario un número entero y muestre por pantalla
// un triángulo rectángulo como el de más abajo, de altura y número introducido

/* 
    1
    12
    123
    1234
    12345
*/

let cadena = '';
// let numero = prompt('Dime las vueltas del bucle:');

for (let i = 1; i <= 5; i++) {
  cadena += i;

  console.log(cadena);
}

/* for (let i = 5; i >= 1; i--) {
  cadena.slice(i);

  console.log(cadena.slice(i));
} */

/* 

    *
    **
    ***
    ****
    *****

*/

for (let i = 1; i <= 5; i++) {
  let resultado = '';

  for (let j = 1; j <= i; j++) {
    resultado += '*';
  }

  console.log(resultado);
}
