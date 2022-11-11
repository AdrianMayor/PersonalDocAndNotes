"use strict";

/* 
    FETCH()  -> Es un metodo para hacer peticiones a otros servidores

    Por lo general lo haremos con:
        -> URLs que de APIs que no devuenvan un JSON

    Es un metodo asincrono que devuelve una promesa
*/

const apiUrl = "https://anapioficeandfire.com/api/characters";

/* const data = fetch(apiUrl);

console.log(data); */

async function getDatos(url) {
  const response = await fetch(url);

  const datos = await response.json();

  return datos;
}

async function imprimirDatos(url) {
  const info = await getDatos(url);

  console.log(info);

  const { results } = info;

  console.log(results);

  for (const result of results) {
    const { name, species, status } = result; // cada result es un personaje del array

    const urlPersonaje = location.url;
    const datosUrlPersonaje = await getDatos(urlPersonaje);

    const { name: nombreEstacion, type } = datosUrlPersonaje;

    console.log(`Nombre: ${name}`);
    console.log(`Es de especie: ${species}`);
    console.log(`Estado: ${status}`);

    console.log(`vive en ${nombreEstacion} que es una ${type}`);

    console.log("");
  }
}

imprimirDatos(apiUrl);
