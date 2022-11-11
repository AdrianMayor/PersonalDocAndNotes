'use strict';

// TIPOS DE DATOS PRIMITIVOS

// NÚMEROS -> number
const numero = 9;

console.log(typeof numero);

// el objeto Math también es un número
console.log(typeof Math.random());

// CADENAS DE TEXTO -> string

const texto = 'Hola mundo';

console.log(typeof texto);
console.log(typeof texto, typeof numero);
console.log(numero);

console.log("Hola 'que' tal");

// Diferencia entre poner un número entre comillas y no
console.log(typeof '9', typeof 9);

// Convierte el numero en string y los concatena, no los suma
console.log('9' + 9);
console.log(9 + '9');

// BOOLEANOS
// Solo tienen 2 valores posibles -> true o false.

const verdadero = true;
const falso = false;

console.log(typeof verdadero);
console.log(falso);

// UNDEFINED
// JS lo asigna automáticamente a los datos sin valor

let variable;
console.log(typeof variable);

// NULL
// representa un valor vacío, normalmente se asigna de manera consciente.
const valorVacio = null;

console.log(valorVacio);

// esto sí que está definido y la reconoce como un objeto
console.log(typeof valorVacio);
