'use strict';

/**
 * Ejemplo Fetch()
 *
 * Vamos a consumir datos de una api del tiempo
 *
 * https://www.el-tiempo.net/api/json/v2/home
 */

const apiURL = 'https://www.el-tiempo.net/api/json/v2/home';

async function getData(url) {
  const response = await fetch(url);

  const data = await response.json();

  return data;
}

async function printData(url) {
  const elTiempoData = await getData(url);

  // console.log(elTiempoData);

  const { title, ciudades } = elTiempoData;

  console.log(`---- ${title} ----`);

  const misCiudades = ciudades.map((ciudad) => {
    return {
      nombre: ciudad.name,
      estadoCielo: ciudad.stateSky.description,
      temperaturaMax: ciudad.temperatures.max,
      temperaturaMin: ciudad.temperatures.min,
    };
  });

  // Filtramos el array de ciudades y nos quedamos solo con Barcelona
  const soloBarcelona = misCiudades.filter(
    (ciudad) => ciudad.nombre === 'Barcelona'
  );
  /*   console.log(soloBarcelona);

  const objetoBarcelona = soloBarcelona[0]; // manera normal, posicion 0 es el objeto que contiene a barcelona
  console.log(objetoBarcelona); */

  const [barcelonaObjeto] = soloBarcelona; // usando destructuring

  console.log(`Estas en ${barcelonaObjeto.nombre}`);
  console.log(`El cielo se encuentra ${barcelonaObjeto.estadoCielo}`);

  console.log(
    `Se esperan temperaturas minimas de: ${barcelonaObjeto.temperaturaMin}º`
  );
  console.log(
    `Se esperan temperaturas máximas de: ${barcelonaObjeto.temperaturaMax}º`
  );

  // Recorremos el array de las ciudades y mostramos los valores de cada ciudad
  for (const ciudad of misCiudades) {
    const { nombre, estadoCielo, temperaturaMax, temperaturaMin } = ciudad;

    console.log('');

    console.log(`Estas en ${nombre}`);
    console.log(`El cielo se encuentra ${estadoCielo}`);

    console.log(`Se esperan temperaturas minimas de: ${temperaturaMin}º`);
    console.log(`Se esperan temperaturas máximas de: ${temperaturaMax}º`);

    console.log('');
  }
}

printData(apiURL);
