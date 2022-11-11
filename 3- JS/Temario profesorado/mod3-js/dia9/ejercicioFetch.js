'use strict';

/**
 * Escribir una funcion encargada de hacer las llamadas a la api
 *
 * Escribir otra funcion encargada de recibir un número (que representa a una casa)
 *  y con el concatenarlo a la url que indicaremos para llamar a la api
 *
 *  Quedarnos con la propiedad currentLord del objeto que devuelva
 *
 *  Hacer una nueva llamada para recibir los datos del lord y mostrar
 *  por pantalla el Nombre del Lord
 *
 *  EXTRA:
 *      - Gestionamos que el numero que indica el usuario es un numero
 */

// Es un string, se le pueden concatenar cosas
const urlBase = 'https://anapioficeandfire.com/api/houses/';

// Crear la funcion que va a hacer llamadas a api
async function getData(url) {
  const response = await fetch(url);

  // El response va a devolver una respuesta del servidor
  // para quedarnos con el codigo en js debemos aplicar el metodo json() al response
  // esto también devuelve una promesa para los datos, por lo tanto también tenemos
  // que esperar a que se resuelva

  const data = await response.json();

  return data;
}

// Crear funcion encargada de recibir el numero y mostrar los datos
// de lo que devuelva la llamada a la api

async function getLord(url, houseNumber) {
  try {
    //  Gestionamos que el numero que indica el usuario es un numero
    if (isNaN(houseNumber)) {
      throw new Error('Debes indicar un numero');
    }

    // concatenamos la url con el numero de casa que queremos ver
    const urlInfo = url + houseNumber;

    // Vamos a reutilizar la funcion de getData() para recibir los datos de la casa
    const houseInfo = await getData(urlInfo);

    console.log(houseInfo);

    // Como queremos el nombre del lord vamos a destruturar el valor de currentLord y
    // hacemos una nueva peticion a esa url

    const { currentLord } = houseInfo;

    // Vamos a comprobar si tiene Lord
    if (currentLord === '') {
      // no tiene lord ---> error
      throw new Error('La casa seleccionada no tiene Lord :(');
    }

    console.log(currentLord);

    // Recuperamos los datos del Lord haciendo un fetch a esa nueva url
    const lordData = await getData(currentLord);

    console.log(lordData);
    // Hacemos destructuring de los datos del lord y nos quedamos con su nombre

    const { name } = lordData;

    console.log(name);
  } catch (error) {
    console.error(error.message);
  }
}

// llamamos a la funcion getLord()
getLord(urlBase, 356);
