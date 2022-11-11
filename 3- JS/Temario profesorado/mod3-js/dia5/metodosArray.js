'use strict';

/**
 * MÉTODOS DE ARRAY
 */

const miArr = [1, 2, 3, 4, 5];

console.log('Array iniciado', miArr);

/**
 * PUSH()
 */
// Añadir un elemento al final de un array
console.log('');
console.log('PUSH');

miArr.push(6);
miArr.push(7, 8, 9);
console.log(miArr);

const miArr2 = [false, 'hola'];
miArr.push(...miArr2); // SPREAD va a sacar los valores del array miArr2 y los pushea en miArr
console.log(miArr);

/**
 * UNSHIFT()
 */
// Añade elementos al principio del array

console.log('');
console.log('UNSHIFT');

miArr.unshift('Hola Mundo');
console.log(miArr);

miArr.unshift(true, 19);
miArr.unshift(...miArr2);
console.log(miArr);

/**
 * POP()
 */
// Eliminar el último elemento de un array

console.log('');
console.log('POP');

miArr.pop();
console.log(miArr);

/**
 * SHIFT()
 */
// Elimina el primer elemento del array

console.log('');
console.log('SHIFT');

miArr.shift();
console.log(miArr);

/**
 * SPLICE()
 */
// Elimina o sustituye elementos del array
// Hay que indicar en qué posicion empieza
// (opcional) cuántos elementos elimina (si no indicamos nada, va hasta el final)
// (opcional) que introduce

console.log('');
console.log('SPLICE');

miArr.splice(6, 2); // eliminamos los valores de la posicion 6 y 7 (valores 3 y 4)
console.log(miArr);

miArr.splice(3, 1, 'Adios Mundo');
console.log(miArr);

miArr.splice(3, 0, 'Hola mundo');
console.log(miArr);

miArr.splice(3, 1); // ELiminamos el Hola mundo
console.log(miArr);

miArr.splice(8); // Eliminamos todo el array desde la posición 8 (incluida)
console.log(miArr);

/**
 * SLICE()
 */

// Devuelve un trozo del array SIN MODIFICAR el array original
// Se indica el principio (incluido) y el fin (sin incluir)
console.log('');
console.log('SLICE');

const trozoArray = miArr.slice(3, 6);
console.log(trozoArray);

/**
 * JOIN()
 */
// Convierte un array en un string

const stringArr = ['h', 'o', 'l', 'a'];
const stringArr2 = ['Hola', 'Mundo'];

console.log('');
console.log('JOIN');

console.log(stringArr.join('')); // no indicamos ningún separador
console.log(stringArr2.join(' ')); // separa con un espacio cada elemento del array convertido a string
console.log(stringArr.join()); // si no indicamos nada entre los parentesis del join() pone comas para separar

/**
 * INDEXOF()
 */
// Devuelve el índice del elemento que busquemos

const colores = ['azul', 'rojo', 'negro', 'verde'];

console.log('');
console.log('INDEX');

console.log(colores);

console.log(colores.indexOf('rojo')); // si no lo encuentra devuelve un -1

let color = prompt('Dime un color:');
const index = colores.indexOf(color);
console.log(colores[index]);

/**
 * LASTINDEXOF()
 */
// Devuelve la última posición del elemento que busquemos

const colores2 = ['azul', 'verde', 'rojo', 'negro', 'verde'];

console.log('');
console.log('LAST INDEX OF');

console.log(colores2.lastIndexOf('verde'));

/**
 * REVERSE()
 */
// Da la vuelta al array

console.log('');
console.log('REVERSE');

console.log(colores2.reverse());

/**
 * INCLUDES()
 */
// Devuelve true si el array contiene el elemento indicado y false si no

console.log('');
console.log('INCLUDES');

console.log(colores2.includes('verde')); // true

console.log(colores2.includes('violeta')); // false

colores2.splice(1, 0, 'violeta');
console.log(colores2);
