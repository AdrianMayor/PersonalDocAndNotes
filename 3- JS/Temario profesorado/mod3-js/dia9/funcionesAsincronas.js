'use strict';

/**
 * Funciones Asíncronas
 *
 * async ... await
 *
 * La palabra await indica a la funcion que debe esperar a tener la respuesta
 * de una promesa antes de continuar
 *
 * Es otra manera de consumir datos de una api
 */

function multiplicaPor2(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 500);
  });
}

async function funcionAsincrona(num) {
  const respuesta1 = await multiplicaPor2(num); // 8
  const respuesta2 = await multiplicaPor2(respuesta1); // 16
  const respuesta3 = await multiplicaPor2(respuesta2); // 32

  console.log(respuesta3);
}

funcionAsincrona(4);

/////////////////////////////////////////////

// Creamos una funcion que devolvera de la api de rick y morty sus personajes

// https://rickandmortyapi.com/api/character

async function getCharacters() {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');

    const characters = await response.json(); // response.json() -> devuelve una promesa

    console.log(characters);
  } catch (error) {
    console.error(error.message);
  }
}

getCharacters();
