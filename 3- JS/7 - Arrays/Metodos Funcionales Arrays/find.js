"use strict";

/* 
    METODOS FUNCIONALES DE ARRAY

    -> Son metodos que funcionan con callback
*/

const numeros = [2, 10, 5, 8, 22, 50];
const colores = ["blanco", "azul", "negro"];

/* 
    FIND()

        -> Devuelve el primer elemento del array que cumpla la condicion del callback
        -> Parecido al metodo REPLACE() y INDEXOF() de los strings. Porque solo devuelve el primer valor que encuentra
*/

// El primer numero que sea mayor de 6
console.log(numeros.find((num) => num > 6));

// Buscar item que sea 'blanco'
console.log(colores.find((key) => key === "blanco"));

////////////////////////////

// Como funciona find() ?

function customFind(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
  // Si no lo encuentra devuelve undefined
}

console.log(customFind(colores, (key) => key === "black"));

////////////////////////////////////

// Usamos un array de usuarios para darle mas sentido

const usuarios = [
  {
    id: 1,
    nombre: "Manuel",
    apellidos: "Sanchez",
    edad: 20,
  },
  {
    id: 2,
    nombre: "Maria",
    apellidos: "Sanchez",
    edad: 29,
  },
  {
    id: 3,
    nombre: "Joselito",
    apellidos: "Sanchez",
    edad: 10,
    notas: [6, 10, 2, 5],
  },
  {
    id: 4,
    apellidos: "Sanchez",
    nombre: "Raquel",
    edad: 50,
  },
  {
    id: 5,
    apellidos: "Sanchez",
    nombre: "Lopez",
    edad: 17,
  },
  {
    id: 6,
    apellidos: "Sanchez",
    nombre: "Laura",
    edad: 27,
  },
  {
    id: 7,
    apellidos: "Sanchez",
    nombre: "Carolina",
    edad: 24,
  },
];

const [nota1, nota2, nota3] = usuarios[2].notas; // Destructuring de las notas de joselito, ocupando el puesto 2 en el array

// Queremos saber la edad de maria

const maria = usuarios.find(
  (user) => user.nombre === "Maria" && user.apellidos === "Sanchez"
);

console.log(maria);
