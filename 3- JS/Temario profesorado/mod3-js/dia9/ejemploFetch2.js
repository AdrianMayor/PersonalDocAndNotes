'use strict';

// API Harry Potter -> https://fedeperin-harry-potter-api.herokuapp.com/db

const apiUrl = 'https://fedeperin-harry-potter-api.herokuapp.com/db';

async function getDatos(url) {
  const response = await fetch(url);

  const datos = await response.json();

  return datos;
}

async function printData(url) {
  const infoHarryPotter = await getDatos(url);

  console.log(infoHarryPotter);
}

printData(apiUrl);
