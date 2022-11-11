'use strict'

/* MATH -> podemos hacer ciertas funciones matematicas (no operaciones) */

// REDONDEAR UN NUMERO

// al alza: Math.ceil();
console.log('Ceil de 1.1', Math.ceil(1.2)); /* redondea al 2. Siempre redondea hacia arriba */
console.log('Ceil de 43.4334', Math.ceil(43.4343));

// a la baja: Math.floor()
console.log('Math.floor de 1.8', Math.floor(1.8));
console.log('Math.floor de 85.323', Math.floor(85.323));

// redondeo normal: Math.round()
console.log('Redondeo normal 4.5', Math.round(4.5)); /* Redondea a 5 */
console.log('Redondeo normal de 10.3', Math.round(10.3));


/* NUMEROS ALEATORIOS */
console.log(Math.random()); // Numero aleatorio entre 0-1 

console.log(Math.random()* 10); // Numero aleatorio entre 0-10


//Numero aleatorio entre 0-5 redondeado
console.log('Numero aleatorio entre 0 y 5: ', Math.round(Math.random() * 5));

//Redondear el segundo decimal
let numero = 2.5434;
let numX100 = num * 100;
let numRedondeado = Math.ceil(numX100);
let numFinal= numRedondeado / 100;

console.log(numFinal);

// Manera normal de anterior caso
console.log(Math.ceil(2.5434 * 100) / 100);


// Generar un numero aleatorio entre 5 - 10
let min = 5;
let max = 10;
console.log('Numero aleatorio entre 5 y 10: ', Math.round(Math.random() * (max - min) + min));

// MATH MIN y MATH MAX

// Cual es el numero minimo de:
const numero1= Math.random() * 10;
const numero2= Math.random() * 10;
const numero3= Math.random() * 10;

console.log('Numero 1', numero1);
console.log('Numero 2', numero3);
console.log('Numero 3', numero3);

console.log('Es numero mas pequeño: ', Math.min(numero1, numero2, numero3));

// Cual es el nmumero maximo de:

console.log('Numero mas grande:', Math.max(numero1, numero2, numero3));