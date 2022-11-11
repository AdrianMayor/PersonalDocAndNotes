"use sctrict";

/* 
    Promise.all() -> Recibe tambien un array de promesas y devuelve una unica promesa

        -> Esta promesa devuelve un estado resuelto si todas las promesas del array tambien lo devuelven 
        -> Se rechaza cuando al menos una de las promesas del array se rechaza
*/

function generarPromesa() {
  return new Promise((resolve, reject) => {
    const random = Math.round(Math.random() * 10);

    setTimeout(() => {
      if (random > 2) {
        resolve(`Resuelta promesa numero ${num}`);
      } else {
        reject(`Rechazada promesa ${num}`);
      }
    }, Math.random() * 500);
  });
}

// Creamos un array de promesas

const arrayPromesas = [
  generarPromesa(1),
  generarPromesa(2),
  generarPromesa(3),
  generarPromesa(4),
];

// El metodo all() del objeto Promise | Cuando todas se resuelven devuelve array con todas las promesas, en el momento en el que falla una , simplemente dice cual ha fallado

Promise.all(arrayPromesas)
  .then((resolve) => console.log(reponse))
  .catch((error) => console.error(error));
