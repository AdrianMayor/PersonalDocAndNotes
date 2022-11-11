'use strict';

/**
 * REPASO ARRAYS
 */

// Un array es una coleccion de elementos o valores de cualquier tipo

const numeros = [
  3,
  5,
  10,
  20,
  50,
  ['pera', 'manzana'],
  { nombre: 'Matias', apellido: 'De Outes' },
];

console.log(numeros);
console.log('Longitud del array:', numeros.length); // longitud del array (empieza a contar en 1)

console.log(numeros[2]); // Mostrar el valor de la posicion 2 del array

numeros[2] = 'hola';
console.log(numeros);

console.log(numeros[numeros.length - 1]);

// Spread operator también nos sirve para copiar los valores de un array en otro
const numeros2 = [...numeros];
console.log(numeros2);

numeros2[2] = 'adios';
console.log(numeros2);

////////////////

console.log('');

console.log('Array original');
console.log(numeros);

console.log('Array copia poco profunda');

numeros2[6].nombre = 'Alberto';

console.log(numeros2);

/**
 * MÉTODOS
 */

const colores = ['verde', 'rojo', 'azul'];
console.log('');
console.log(colores);

// PUSH() -> añadir el/los elementos indicados al final del array
colores.push('amarillo');
console.log(colores);

// UNSHIFT() -> añade elementos al principio del array
colores.unshift('negro');
console.log(colores);

// POP() -> elimina el ultimo elemento del array
colores.pop();
console.log(colores);

// SHIFT() -> elimina el primer elemento de un array
colores.shift();
console.log(colores);

// SPLICE() -> elimina o sustituye elementos del array
colores.splice(1, 0, 'negro');
/* posicion, desde esa posicion cuantos elementos elimino, que tengo que introducir */

console.log(colores);

// SLICE() -> devuelve un trozo de un array
console.log(colores.slice(1, 3));
// indicamos posicion de inicio (incluida) y posicion de fin (no la incluye)

// REVERSE() -> da la vuelta a los elementos del array
console.log(colores.reverse());

/////////////////

/**
 * RECORRER LOS VALORES DE UN ARRAY CON BUCLES
 */

console.log('');
console.log('Recorrer arrays con bucles');

// For normal
console.log('For normal:');
for (let i = 0; i < colores.length; i++) {
  console.log(colores[i]);
}

// For... of (tambien sirve para recorrer strings, toma cada letra del string como un elemento)
console.log('');
console.log('For Of:');
for (const color of colores) {
  console.log(color);
}
