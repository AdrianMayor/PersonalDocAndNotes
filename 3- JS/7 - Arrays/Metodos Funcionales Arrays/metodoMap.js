"use strict";

/* 
    METODOS FUNCIONALES -> (Porque utilizan funciones callbacks)
*/

const palabras = ["Hola", "Buenos dias", "Welcome"];
console.log("Array original");
console.log(palabras);

/* 
    MAP ->  Devuelve un array nuevo de igual longitud que el original , pero modifica o transforma cada uno de sus elementos
*/

/* 
    La funcion de callback recibe 2 valores: 
        -El valor: representara cada uno de los elementos del array al que aplicas map
        -Indice (opcional): Este representa el indice de cada una de las posiciones del array
 */

console.log("");

// Forma 1
function callback(palabra) {
  return (palabra += " que tal");
}
console.log(palabras.map(callback));

// Forma2
const palabrasNuevo = palabras.map(function (palabra, index) {
  return (palabra += " buena tardes");
});

console.log(palabrasNuevo);

///////////////////////

console.log("");
console.log("Ejemplo MAP");

const usuarios = [
  {
    nombre: "Raul",
    edad: 29,
  },
  {
    nombre: "Maria",
    edad: 16,
  },
  {
    nombre: "Tomas",
    edad: 40,
  },
  {
    nombre: "Tamara",
    edad: 23,
  },
  {
    nombre: "Rosalía",
    edad: 19,
  },
];

console.log(usuarios);

function sacarNombres(usuario) {
  return usuario.nombre /* + '' + usuario.edad */;
}

const nombres = usuarios.map(sacarNombres);

// Arrow function -> Funciona tal cual la function sacarNombres
const edades = usuarios.map((usuario) => usuario.edad);

console.log(nombres);
console.log(edades);

console.log("");

/* Map nos sirve para crear un nuevo array quedandonos con una parte o transformando los datos de los elementos de esa array */

console.log("ejemplo rapido");
const numeros = [1, 2, 3];

const numerosX2 = numeros.map(multiplicacion); // --> devuelve un nuevo array cogiendo el de arriba multiplicando por dos [2,4,6]

function multiplicacion(numero) {
  return numero * 2;
}

console.log(numerosX2);
