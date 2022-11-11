'use strict';

/**
 * MÉTODOS FUNCIONALES DE ARRAY
 */

// Son metodos que funcionan con callback

const numeros = [2, 10, 5, 8, 22, 50];
const colores = ['azul', 'blanco', 'negro'];

/**
 * FIND()
 *
 * Devuelve el primer elemento del array que cumpla la condición del callback
 */

// Es parecido al metodo de replace() y al indexOf() de los strings

console.log(numeros.find((num) => num > 6));

console.log(colores.find((color) => color === 'blanco'));

///////////////////////////

// Cómo funciona find()?

function customFind(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
  // Si no lo encuentra devuelve undefined
}

console.log(customFind(colores, (color) => color === 'negro'));

///////////////////////////

// Usamos un array de usuarios para darle más sentido

const usuarios = [
  {
    nombre: 'Manuel',
    apellidos: 'Sanchez',
    edad: 20,
  },
  {
    nombre: 'Maria',
    apellidos: 'Sanchez',
    edad: 29,
  },
  {
    nombre: 'Joselito',
    apellidos: 'Sanchez',
    edad: 10,
  },
  {
    nombre: 'Raquel',
    apellidos: 'Sanchez',
    edad: 50,
  },
  {
    nombre: 'Lopez',
    apellidos: 'Sanchez',
    edad: 17,
  },
  {
    nombre: 'Laura',
    apellidos: 'Sanchez',
    edad: 27,
  },
  {
    nombre: 'Carolina',
    apellidos: 'Sanchez',
    edad: 24,
  },
];

// Quiero saber la edad de maría

const maria = usuarios.find(
  (user) => user.nombre === 'Maria' && user.apellidos === 'Sanchez'
);

console.log(maria);
