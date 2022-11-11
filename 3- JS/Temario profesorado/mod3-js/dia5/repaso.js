'use strict';

/**
 * FUNCIONES
 */

// Declaramos la funcion
function sayHello() {
  // codigo que se ejecuta cada vez que llamamos a la funcion

  console.log('Hola Mundo');
}

// Llamar a la funcion
sayHello();

// Declaramos una funcion que requiera argumentos
function suma(numA, numB) {
  console.log(`El resultado de sumar ${numA} + ${numB} es: ${numA + numB}`);
}

suma(20, 5);

let numeroA = 10;
let numeroB = 4;
suma(numeroA, numeroB);

// RETURN
function esPrimo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(`El numero 15: ${esPrimo(15)}`);

/**
 * OBJETOS
 */

console.log('');
console.log('OBJETOS');

const coche = {
  marca: 'BMW',
  modelo: 'Serie 3',
  precio: 25000,
  tipoMoneda: '€',
  colores: ['verde', 'rojo', 'negro'],
  motor: {
    caballos: 300,
    tipo: ['electrico', 'diesel', 'gasolina'],
  },
};

console.log(coche);
console.log(coche.marca);
console.log(coche['modelo']);

// Modificar una propiedad
coche.marca = 'Audi';
console.log(coche);

// Crear una propiedad nueva
coche.kilometros = 100000;
console.log(coche);

/* 
    Clonar un objeto
*/

console.log('');
console.log('COPIA Objeto');

// SPREAD -> ... -> copia poco profunda

const cocheCopia = {
  ...coche,
  // si queremos sobreescribir alguna propiedad la indicamos
  // después del spread operator
  precio: 10000,
};

cocheCopia.modelo = 'A6';
// La copia poco profunda no copia bien los objetos y arrays propiedad del objeto principal
// Esto modifica también el objeto original "coche";
cocheCopia.motor.caballos = 200;
console.log(cocheCopia);

/* 
    Métodos importantes clase Object
*/

// KEYS -> devuelve un array con los nombres de las propiedades del objeto

const propiedades = Object.keys(coche);
console.log(propiedades);

// VALUES -> devuelve un array con los valores de las propiedades del objeto

const valores = Object.values(coche);
console.log(valores);

// ENTRIES -> devuelve un array con cada pareja de propiedad y valor del objeto
const entries = Object.entries(coche);
console.log(entries);
