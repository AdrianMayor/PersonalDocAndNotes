'use strict';

/**
 * PROMESAS
 *
 *  estado inicial es pendiente, una promesa se resuelve o se rechaza
 */

const miPromesa = new Promise((resolve, reject) => {
  const random = Math.round(Math.random() * 10);

  setTimeout(() => {
    if (random > 5) {
      resolve('Todo va bien');
    } else {
      reject('Algo ha fallado');
    }
  }, 2000);
});

////////////

// Trabajar con promesas

// console.log(miPromesa);

miPromesa
  .then((response) => console.log(response))
  .catch((error) => console.error(error))
  .finally(() =>
    console.log('finally() -> pase lo que pase finally se ejecuta')
  );

////////////////////////

// Ejemplo para recojer los valores de la api de personajes de Rick y Morty

const url = 'https://rickandmortyapi.com/api/character';

// El metodo fetch devuelve una promesa
fetch(url)
  .then((response) => response.json())
  .then((body) => {
    const { results } = body;

    console.log(results);
  })
  .catch((error) => console.error(error));
