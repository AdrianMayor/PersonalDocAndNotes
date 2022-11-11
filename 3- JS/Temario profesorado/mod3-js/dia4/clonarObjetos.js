'use strict';

const usuario = {
  nombre: 'Usuario01',
  correo: 'user@gmail.com',
  coloresFav: ['rojo', 'azul', 'verde'],
  mascota: {
    nombre: 'Fluffy',
    edad: 2,
  },
};

// Esto NO se utiliza
const usuarioCopia = usuario;
usuarioCopia.nombre = 'Cambio el nombre del usuario en la copia';

console.log(usuario);

// Lo que sí se utiliza

// SPREAD (...) -> copia poco profunda del objeto

const copiaUsuarioSpread = {
  ...usuario,
};

copiaUsuarioSpread.nombre = 'Spread';
console.log(copiaUsuarioSpread);

const objA = {
  a: 1,
  b: 2,
};

const objB = {
  c: 3,
  d: 4,
};

// Podemos sobreescribir alguna propiedad de los objetos que clonamos
// indicando despues del spread operator (...) el nombre de la propiedad
// seguido de el nuevo valor que le queramos dar
const copiaAyB = {
  ...objA,
  b: 5,
  ...objB,
};

console.log(copiaAyB);

// Copia poco profunda con Object.assign
const nuevoAyB = {};

Object.assign(nuevoAyB, objA, objB);
console.log(nuevoAyB);
