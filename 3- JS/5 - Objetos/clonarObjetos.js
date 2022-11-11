"use strict";

// forma que NO se deberia hacer

const usuario = {
  nombre: "Usuario01",
  correo: "user@gmail.com",
  coloresFav: ["rojo", "azul", "verde"],
  mascota: {
    nombre: "Fluffy",
    edad: 2,
  },
};

const usuarioCopia = usuario; // Esto esta mal porque estan usando el mismo espacio de memoria

usuarioCopia.nombre = "Cambio el nombre de usuario en la copia";

console.log(usuario); // imprime tambien el cambio al estar compartiendo el espacio de memoria.

// Forma CORRECTA -> SPREAD (...) | Copia poco profunda del objeto.

const copiaUsuarioSpread = {
  ...usuario,
};

copiaUsuarioSpread.nombre = "Spread";
console.log(copiaUsuarioSpread);

const objA = {
  a: 1,
  b: 2,
};

const objB = {
  c: 3,
  d: 4,
};

/* podemos sobreescribir alguna propiedad e los objetos que clonamos indicando despues del spread operator el nombre de la propiedad segudi del nuevo valor que le queramos dar */

const copiaAyB = {
  ...objA,
  b: 5,
  ...objB,
  d: 10,
};

// copia poco profunda con Objet.assign

const nuevoAyB = {};
Object.assign(nuevoAyB, objA, objB);
