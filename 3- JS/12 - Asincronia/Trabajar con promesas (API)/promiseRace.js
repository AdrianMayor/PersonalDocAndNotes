"use strict";

/* 
    Promise.race() -> Recibe un array de promesas y devuelve una unica promesa

        -> Devolvera el resultado (resuleto o rechazado) de la primera promesa en cumplirse
*/

function generarPromesa() {
  return new Promise((resolve, reject) => {
    const random = Math.round(Math.random() * 10);

    setTimeout(() => {
      if (random > 5) {
        resolve(`Resuelta promesa numero ${num}`);
      } else {
        reject(`Rechazada promesa ${num}`);
      }
    }, Math.random() * 500);
  });
}

// Creamos un array de promesas

const arrayPromesas = [
  generarPromesas(1),
  generarPromesas(2),
  generarPromesas(3),
  generarPromesa(4),
];

// El metodo race() del objeto Promise devuelve una promesa, la mas rapida en cumplirse para bien o para mal

Promise.race(arrayPromesas)
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
