'use strict';

/**
 * MÉTODOS FUNCIONALES
 */

// Son métodos que utilizan callbacks

const palabras = ['Hola', 'Buenos dias', 'Welcome'];
console.log('Array original');
console.log(palabras);

/**
 * MAP()
 */
// Devuelve un array de igual longitud que el original
// Pero modifica/transforma cada uno de sus elementos

/* 
    La funcion de callback recibe 2 valores:
        - El valor: representará cada uno de los elementos del array al que aplicas map
        - Indice (opcional): este representa el indice de cada una de las posiciones del array
*/

console.log('');

// Forma 1
function callback(palabra) {
  return (palabra += ' que tal');
}

console.log(palabras.map(callback));

// Forma 2
const palabrasNuevo = palabras.map(function (palabra, index) {
  return (palabra += ' buenas tardes');
});

console.log(palabrasNuevo);

//////////////////////////

console.log('');
console.log('Ejemplo MAP');

const usuarios = [
  {
    nombre: 'Raul',
    edad: 29,
  },
  {
    nombre: 'Maria',
    edad: 16,
  },
  {
    nombre: 'Tomas',
    edad: 40,
  },
  {
    nombre: 'Tamara',
    edad: 23,
  },
  {
    nombre: 'Rosalía',
    edad: 19,
  },
];

console.log(usuarios);

function sacarNombres(usuario) {
  return usuario.nombre;
}

const nombres = usuarios.map(sacarNombres);

// Arrow Function
const edades = usuarios.map((usuario) => {
  return usuario.edad;
});

console.log(nombres);
console.log(edades);
