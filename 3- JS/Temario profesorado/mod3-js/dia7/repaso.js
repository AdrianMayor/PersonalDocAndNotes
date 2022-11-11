'use strict';

const vehiculos = [
  {
    tipo: 'coche',
    marca: 'BMW',
    modelo: 'Serie 3',
    caballos: 200,
    valoracion: 3,
  },
  {
    tipo: 'moto',
    marca: 'Kawasaki',
    modelo: 'Z-650',
    caballos: 67,
    valoracion: 3,
  },
  {
    tipo: 'coche',
    marca: 'Mercedes',
    modelo: 'Clase A',
    caballos: 250,
    valoracion: 2,
  },
  {
    tipo: 'coche',
    marca: 'BMW',
    modelo: 'M2',
    caballos: 400,
    valoracion: 5,
  },
  {
    tipo: 'moto',
    marca: 'Ducati',
    modelo: 'Panigale V4',
    caballos: 180,
    valoracion: 1,
  },
  {
    tipo: 'coche',
    marca: 'Audi',
    modelo: 'A1',
    caballos: 110,
    valoracion: 1,
  },
];

console.log(vehiculos);

/**
 * MAP()
 *
 * Devuelve un nuevo array modificando cada uno de los elementos (segun el callback)
 * del array al que aplicamos map()
 */

// Con funcion anonima en flecha y callback
const marcas = vehiculos.map((vehiculo) => vehiculo.marca);

console.log(marcas);

//////

// Creamos el callback
function callbackMarcas(vehiculo) {
  return vehiculo.marca;
}

// Creamos la variable que va a albergar el resultado de aplicar map() al array vehiculos
const marcas2 = vehiculos.map(callbackMarcas);

console.log(marcas2);

/**
 * FILTER()
 *
 * Devuelve un nuevo array filtrado con las condiciones indicadas en el callback
 */

// Con funcion anonima y en flecha (arrow function)

/* const vehiculosPotentes = vehiculos
  .filter((vehiculo) => {
    if (vehiculo.caballos > 100) {
      return vehiculo;
    }
  })
  .map((vehiculo) => vehiculo.caballos)
  .sort((a, b) => a - b); */

const vehiculosPotentes = vehiculos.filter((vehiculo) => {
  if (vehiculo.caballos > 100) {
    return vehiculo;
  }
});

console.log(vehiculosPotentes);

////////

function callbackCaballos(vehiculo) {
  if (vehiculo.caballos > 100 && vehiculo.marca === 'BMW') {
    return vehiculo;
  }
}

const vehiculosPotentesBMW = vehiculos.filter(callbackCaballos);

// Ordenamos los vehiculos de BMW segun sus caballos
console.log(vehiculosPotentesBMW.sort((a, b) => a.caballos - b.caballos));

/**
 * REDUCE()
 *
 * Devuelve un único valor a partir de un array
 */

const totalValoraciones = vehiculos.reduce((acc, vehiculo) => {
  return acc + vehiculo.valoracion;
}, 0); // Despues de la coma va el valor inicial del acumulador

console.log(
  `La media de las valoraciones es: ${totalValoraciones / vehiculos.length}`
);

/////////

function callbackValoraciones(acc, item) {
  return acc + item.valoracion;
}

const totalValoraciones2 = vehiculos.reduce(callbackValoraciones, 0);

console.log(totalValoraciones2);

/**
 * SORT()
 *
 * Ordena arrays está pensado para elementos de tipo string
 * Por lo tanto para los numeros tenemos que aplicarle un callback
 */

const numeros = [10, 3, 1, 7, 20];
const palabras = ['blanco', 'azul', 'violeta', 'negro'];

console.log(palabras.sort());
console.log(numeros.sort());

const numerosOrdenados = numeros.sort((a, b) => a - b);

console.log(numerosOrdenados);
