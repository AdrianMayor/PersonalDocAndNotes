"use strict";

/* 
    FUNCIONES
*/

// Sintaxis normal

function getName(name) {
  return name;
}

console.log(getName("Juan"));

// Sintaxis ARROW FUNCTION

(name) => name; // Return implicito

(name) => {
  return name; // Return explicito ( uso de llaves )
};

const getNameArrowFunction = (name) => name;

console.log(getNameArrowFunction("Cesar"));

// Funciones anonimas

const array = [
  10,
  "hola",
  function () {
    console.log("Hola soy una funcion anonima");
  },
  "adios",
];

array[2]();

/////////////////////

const objeto = {
  nombre: "Monopoly",
  precio: 20,
  calcularIVA: (precio) => {
    return precio * 0.21;
  },
  colores: ["azul", "blanco"],
};

console.log(objeto.calcularIVA(objeto.precio));
