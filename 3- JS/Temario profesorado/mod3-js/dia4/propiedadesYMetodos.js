'use strict';

/**
 * PROPIEDADES
 */

// Son todos los datos de un objeto
const miString = 'Hello World';

console.log(miString.length);

console.log(String.prototype);

/**
 * METODOS
 */

// Son las funciones almacenadas en un objeto

miString.indexOf('o'); // sabemos si es un método por el uso de los paréntesis

Math.random(); // random() también es un método del objeto Math

const miObjeto = {
  hello: function () {
    console.log('Hello World');
  },
  nombre: 'Usuario',
  edad: 20,
};

miObjeto.hello();

/**
 * METODOS DE LA CLASE OBJECT
 */

// Object.keys()
// Devuelve las claves (propiedades) de un objeto
const claves = Object.keys(miObjeto);

console.log(claves);

// Object.values()
// Devuelve los valores
const values = Object.values(miObjeto);

console.log(values);

// Object.entries()
// Devuelve un array con cada pareja de propiedad y valor

const entries = Object.entries(miObjeto);
console.log(entries);
