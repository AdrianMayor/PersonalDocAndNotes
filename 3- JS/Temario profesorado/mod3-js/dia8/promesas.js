'use strict';

/**
 * PROMESAS
 *
 *  El estado inicial es pendiente
 */

// Crear una promesa -> recibe entre paréntesis un callback
const miPromesa = new Promise((resolve, reject) => {
  // El callback recibe 2 argumentos:
  //  - resolve: completado con exito
  //  - reject: la promesa falla

  // Para simular una promesa real utilizaremos un timeout
  setTimeout(() => {
    const random = Math.round(Math.random() * 10);

    if (random > 5) {
      resolve('Todo ha ido bien');
    } else {
      reject('Algo ha fallado');
    }
  }, 2000);
});

/**
 * GESTIONAR / TRABAJAR CON UNA PROMESA
 */

// El metodo then(), si todo ha ido bien, retorna lo que devuelva la promesa
// catch() -> es el encargado de gestionar el error si la promesa falla
// finally -> (opcional) siempre se ejecutará

miPromesa
  .then((response) => console.log(response))
  .catch((error) => console.error(error))
  .finally(() => console.log('finally() -> yo pase lo que pase me ejecuto'));

///////////////

// CASO REAL

// Vamos a pedir a la api de rick y morty sus datos
// https://rickandmortyapi.com/api/character

// La manera que tenemos de pedir datos a una api es usando el método fetch()
// Este devuelve una promesa

fetch('https://rickandmortyapi.com/api/character')
  .then((response) => response.json()) // devuelve otra promesa
  .then((data) => {
    const { results } = data;

    const personajesVivos = results.filter(
      (personaje) =>
        personaje.status === 'Alive' && personaje.species === 'Alien'
    );

    console.log(personajesVivos);
  })
  .catch((error) => console.error(error));

fetch('https://www.el-tiempo.net/api/json/v2/home')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
