'use strict';

/* TIPOS DE DATOS PRIMITIVOS */

/* NUMEROS -> number */

const numero = 9;

console.log(typeof numero); // Imprime "number"
console.log(numero);         // Imprime "9" de color azul, identificandolo asi como numero

// el objeto Math tambien es un numero
console.log(typeof Math.random);

/*  CADENAS DE TEXTO -> String */

const texto = 'hola mundo';
console.log(typeof texto);  // Imprime String
console.log(typeof texto, typeof numero); // typeof solo funciona sobre la primera variable que coge


console.log('Hola "que" tal');


// Diferencia entre poner un numero entre comillas y no

console.log(typeof '9', typeof 9); // Imprime string , number

console.log('9' + 9); // imprime 99, prioriza comillas y convierte el numero en texto


// BOOLEANOS -> Solo tienen dos valores posibles: true o false

const verdadero = true;
const falso = false;

console.log(typeof verdadero); // imprime: boolean
console.log(falso); // imprime: false


//UNDEFINED -> JS lo asigna automaticamente a datos sin valor

let variable;
console.log(typeof variable); // imprime: undefined


// NULL -> representa un valor vacio, normalmente se asigna de forma consciente.

const valorVacio = null;
console.log(valorVario); // imprime : null
console.log(typeof valorVacio); // imprime: object. Al estar definido , la reconoce como objeto