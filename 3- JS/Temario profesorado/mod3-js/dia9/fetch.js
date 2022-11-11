'use strict';

/**
 * FETCH()
 *
 * Es un método para hacer peticiones a otros servidores
 *
 * Por lo general lo general lo haremos con URLs de APIs que nos
 * devuelvan un JSON
 *
 * Es un método asíncrono que devuelve una promesa
 */

const apiUrl = 'https://rickandmortyapi.com/api/character';

/* const data = fetch(apiUrl);

console.log(data);
 */

async function getDatos(url) {
  const response = await fetch(url);

  const datos = await response.json();

  return datos;
}

async function imprimirDatos(url) {
  const info = await getDatos(url);

  // console.log(info);

  const { results } = info;

  console.log(results);

  for (const result of results) {
    const { name, species, status, location } = result; // cada result es un personaje del array de objetos

    const urlPersonaje = location.url;
    const datosUrlPersonaje = await getDatos(urlPersonaje);

    const { name: nombreEstacion, type } = datosUrlPersonaje;

    console.log(`Nombre: ${name}`);
    console.log(`Es de especie: ${species}`);
    console.log(`Esta en estado: ${status}`);

    console.log(`Viene de ${nombreEstacion} que es una ${type}`);

    console.log('');
  }
}

imprimirDatos(apiUrl);
