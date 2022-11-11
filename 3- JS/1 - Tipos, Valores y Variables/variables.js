'use strict' // Activa el modo estricto. Nos obliga a mantener una estructura de codigo, como por ejemplo declarar siempre variables , no permitir declarar variables sin let o const.

console.log('Hola mundo');


/* MANERAS DE DEFINIR UNA VARIABLE */

var numero = 10; /* En deshuso, obsoleto, evitarla */

let number = 9; /* Permite cambiar el valor de la variable durante el codigo */
console.log(number); /* Imprime 9 */

number = 12;         /* Cambiamos el valor de la variable number */ 
console.log(number); /* Imprime 12 */


const num = 8; /* No permite modificar su valor */

num = 1; /* Da error, "assignment to constant variable". NO PODEMOS CAMBIAR EL VALOR DE UNA VARIABLE CONSTANTE */


/* 
 El modo   STRICT   nos obliga a declarar la variable para asignarle un valor
*/

letra = 'a'; /* Esto da error, "letra is not defined" */

let letra = 'a';



/* COMO NOMBRAR LAS VARIABLES */

/*  Deben ser un nombre descriptivo */

// Mal
const t = 622566899; /* numero de telefono pero nombre de variable poco descriptivo */
const teléfono = 622566899; /* Evitar tildes y caracteres extraños, ceñirse al ingles */
const numero de telelfono = 622566899; /* No podemos declarar una variable con espacios en el nombre */


//bien
const tel= 622566899;
const telefono= 622566899;
const numero_telefono= 622566899;

// la mejor opcion -> CAMEL CASE . A partir de la tercera palabras empiezan por mayuscula
const numeroTelefono= 622566899;

/* Concatenar en el console.log() */

let minumero = 5;
let miTexto = 'hola mundo';

console.log('Mi numero es:', miNumero, 'Y el texto que se encuentra es', miTexto);