'use strict';

// MATH -> con el que podeos hacer ciertas funciones matemáticas (no operaciones)

// REDONDEAR NÚMEROS

// al alza: Math.ceil()
console.log('ceil de 1.1: ', Math.ceil(1.1)); // siempre lo redondea hacia arriba
console.log('ceil de 100004.3223', Math.ceil(100004.3223));

// a la baja: Math.floor()
console.log('Math.floor de 1.8: ', Math.floor(1.8)); // siempre lo redondea hacia abajo
console.log('Math.floor de 999.78: ', Math.floor(999.78));

// redondeo normal
console.log('Redondeo normal 4.5: ', Math.round(4.5));
console.log('Redondeo normal de 10.3: ', Math.round(10.3));

// NÚMEROS ALEATORIOS
console.log(Math.random()); // Número aleatorio entre 0 y 1

console.log(Math.random() * 10); // número aleatorio entre 0 y 10

// Número aleatorio entre 0 y 5 redondeado
console.log('Número aleatorio entre 0 y 5: ', Math.round(Math.random() * 5));

// Redondear el segundo decimal
let num = 2.5434;
let numX100 = num * 100;
let numRedondeado = Math.ceil(numX100);
let numFinal = numRedondeado / 100;

console.log(numFinal);

// Manera más normal
console.log(Math.ceil(2.5434 * 100) / 100);

// Generar un número aleatorio entre 5 y 10

let min = 5;
let max = 10;
console.log(Math.round(Math.random() * (max - min) + min));

// MATH MIN Y MATH MAX

// Cual es el número minimo de:
const numero1 = Math.round(Math.random() * 10);
const numero2 = Math.round(Math.random() * 10);
const numero3 = Math.round(Math.random() * 10);

console.log('numero 1: ', numero1);
console.log('numero 2: ', numero2);
console.log('numero 3: ', numero3);

console.log('el número más pequeño: ', Math.min(numero1, numero2, numero3));

// Cuál es el número más grande
console.log('el número más grande es: ', Math.max(numero1, numero2, numero3));
