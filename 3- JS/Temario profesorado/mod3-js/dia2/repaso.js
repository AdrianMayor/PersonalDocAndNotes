'use strict'; // modo estricto

// comentario en linea

/* 
    Comentario en bloque
*/

// Imprimir por consola del navegador
console.log('Hola Mundo!');

// Hay 2 formas de declarar una variable

let variable = 'hola'; // puede cambiar su valor
const variableConstante = 'No puedo cambiar mi valor'; // No puede cambiar su valor, es constante

// Tipos de variables

// string -> texto
let texto = 'Un string';

// number
let numero = 10;

// integer / float
// integer -> no tiene decimales
// float -> si tiene decimales

console.log(typeof texto);
console.log(typeof numero);

// booleano
// Solamente tienen 2 valores, verdadero (true) o falso (false)
const verdadero = true;
const falso = false;

// undefined
// Son las variables que no tienen un valor
let indefinido;
console.log(indefinido);

// nulo
// un valor nulo, la variable la interpreta como un objeto
let nulo = null;
console.log(typeof nulo);

/**
 * Objeto MATH
 */

// Math.random() -> devuelve un numero aleatorio entre 0 y 1
console.log(Math.random() * 10);

/**
 * Redondear un numero usando Math
 *
 *  - Math.ceil() -> Siempre redondea hacia arriba
 *  - Math.floor() -> Redondea hacia abajo
 *  - Math.round() -> Redondea de manera normal
 */

console.log(Math.ceil(23.1));
console.log(Math.floor(22.9));
console.log(Math.round(4.5));

// Template Strings
console.log(`Interpretan los saltos
de linea`);

// podemos indicar las variables o codigo javascript dentro de las comillas
// usando ${}
console.log(`El resultado de 4 + 4 = ${4 + 4}`);

let miNumeroTelefono = 123123123;
console.log(`Mi numero de telefono es ${miNumeroTelefono}`);
