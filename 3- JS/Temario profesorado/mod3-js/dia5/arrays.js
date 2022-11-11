'use strict';

/**
 * ARRAY
 */

// Un array es una colección ordenada de valores de cualquier tipo

const array = []; // Declaramos un array vacío

const colores = ['azul', 'rojo', 'verde', 'violeta', 'negro'];
console.log(colores);

console.log(colores.length);

// Acceder a un elemento del array
console.log(colores[2], colores[1]);

console.log(colores[999]); // undefined

// Sacamos el ultimo valor del array
console.log(colores[colores.length - 1]);

// Otra manera de acceder a algun elemento del array usando .at()
console.log(colores.at(2));
console.log(colores.at(-1));

// Creamos un array más complejo
console.log('');

const arr = [
  'Hola que tal',
  23,
  true,
  [3, 5, 8],
  { nombre: 'Usuario', edad: 20 },
];

console.log(arr);

// Accedemos a un valor dentro del array hijo de arr
console.log(arr[3][2]);

// Accedemos a una propiedad del objeto dentro del array
console.log(arr[4].nombre);

// Copiar un array utilizando SPREAD (copia poco profunda)
const copiaArr = [...arr, ...colores];

copiaArr[5] = 'aqua';

copiaArr[4].edad = 35;
console.log(copiaArr);
