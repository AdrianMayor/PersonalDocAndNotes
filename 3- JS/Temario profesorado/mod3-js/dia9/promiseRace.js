'use strict';

/**
 * Promise.race()
 *
 * Recibe un array de promesas y devuelve una única promesa
 *
 * Devolverá el resultado (resuelto o rechazado) de la primera promesa
 * en cumplirse
 */

function generarPromesa(num) {
  return new Promise((resolve, reject) => {
    const random = Math.round(Math.random() * 10);

    setTimeout(() => {
      if (random > 5) {
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

// El metodo race() del objeto Promise devuelve una promesa

Promise.race(arrayPromesas)
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
