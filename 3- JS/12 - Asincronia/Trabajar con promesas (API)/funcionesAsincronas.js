"use strict";

/* 
    FUNCIONES ASINCRONAS

        -> Forma mas ordenada de TRABAJAR/GESTIONAR APIS || Otra manera de consumir datos de una API

        -> async ... await

        La palabra await indica a la funcion que debe esperar a tener la respuesta de una promesa antes de continuar
*/

function multiplicaPor2(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 500);
  });
}

async function funcinoAsincrona(num) {
  const respuesta1 = await multiplicaPor2(num); // valor 8
  const respuesta2 = await multiplicaPor2(respuesta1); // valor 16
  const respuesta3 = await multiplicaPor2(respuesta2); // valor 32

  console.log(respuesta3);
}

funcinoAsincrona(4);

/////////////////////////////////////////////////////

// Creamos una funcion que devolvera de la API de Rick y Morty, sus personajes -> https://rickandmortyapi.com/api/character

async function getCharacters() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");

    console.log(response);

    const body = await response.json(); // response.json() -> Devuelve una promesa

    console.log(body);
  } catch (error) {
    console.error(error.message);
  }
}

getCharacters();
