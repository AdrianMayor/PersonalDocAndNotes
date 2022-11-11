'use strict';

// Funciones

// Sintaxis normal
function getName(name) {
  return name;
}

console.log(getName('Juan'));

// Sintaxis arrow function

(name) => name; // Return implícito

// Return explícito
(name) => {
  return name;
};

const getNameArrowFunction = (name) => name;

console.log(getNameArrowFunction('César'));

// Funciones anónimas.
const array = [
  10,
  'hola',
  function () {
    console.log('Hola soy una funcion anónima');
  },
  'adios',
];

array[2]();

const objeto = {
  nombre: 'Monopoly',
  precio: 20,
  calcularIVA: (precio) => {
    return precio * 0.21;
  },
  colores: ['azul', 'blanco'],
};

console.log(objeto.calcularIVA(objeto.precio));
