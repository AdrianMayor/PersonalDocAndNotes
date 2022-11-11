'use strict';

console.log('Hola mundo!');

/* MANERAS DE DEFINIR UNA VARIABLE */

let number = 10; // Permite cambiar el valor de la variable.
console.log(number);

number = 12;
console.log(number);

const num = 8; // No permite cambiar su valor;
console.log(num);

// num = 1; -> NO podemos cambiar el valor de una variable constante

var numero = 9; // está obsoleto

// comentario en línea

/* 
    Comentario
    en
    bloque
*/

/* 
    El modo STRICT nos obliga a declarar la variable para asignarle un valor
*/

// letra = 'a';  esto indica un error en la consola

// COMO NOMBRAR LAS VARIABLES

// Deben ser un nombre descriptivo

// mal
const t = 999888777;
const teléfono = 999888777;
// const numero de telefono = 999888777; -> NO podemos declarar una variable con espacios en el nombre

// bien
const tel = 9998888;
const telefono = 999888777;
const numero_telefono = 999888777;

// La mejor
// Camel Case -> empiezan por minúscula salvo el resto de las palabras.
const numeroTelefono = 999888777;

// Concatenar en el console.log()

let miNumero = 5;
let miTexto = 'Hola mundo';

console.log(miNumero, miTexto);
console.log('Este es el valor de:', miNumero, 'hola que tal', miTexto);
