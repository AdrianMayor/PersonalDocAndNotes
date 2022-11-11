'use strict';

/**
 * Promise.all()
 *
 * Recibe tambien un array de promesas y devuelve una unica promesa
 *
 * Esta promesa devuelve un estado resuelto si todas las promesas del array
 * tambien lo devuelven
 *
 * Se rechaza cuando al menos una de las promesas del array se rechaza
 */

function generarPromesa(num) {
  return new Promise((resolve, reject) => {
    const random = Math.round(Math.random() * 10);

    setTimeout(() => {
      if (random > 2) {
        resolve(`Resuelta promesa numero ${num}`);
      } else {
        reject(`Rechazada promesa numero ${num}`);
      }
    }, Math.random() * 5000);
  });
}

// Creamos un array de promesas

const arrayPromesas = [
  generarPromesa(1),
  generarPromesa(2),
  generarPromesa(3),
  generarPromesa(4),
];

Promise.all(arrayPromesas)
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
