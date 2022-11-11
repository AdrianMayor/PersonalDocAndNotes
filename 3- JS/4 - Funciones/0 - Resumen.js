"use strict";

/* 
    FUNCIONES
*/

// Declaramos la funcion
function sayHello() {
  // codigo que se ejecuta cada vez que llamamos a la funcion
  console.log("Hola Mundo");
}

//Llamar a la funcion

sayHello();

// Declaramos una funcion que requiera argumentos
function suma(numA, numB) {
  console.log(`El resultado de sumar ${numA} + ${numB} es: ${numA + numB}`);
}

suma(20, 5);

let numero1 = 10;
let numero2 = 4;

suma(numero1, numero2);

// RETURN
function esPrimo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(`El numero 15, es primo?: ${esPrimo(15)}`);

/////////////////////////////////////

// Sintaxis normal
function getName(name) {
  return name;
}

// Sintaxis arrow function
const getNameArrowFunction = (name) => name; // Si no lleva llaves entiende que es un return

const getNameArrowFunction2 = (name) => {
  // normalmente hay más codigo
  return name; // Si hay llaves es obligatorio indicar el return
};

// Funciones anónimas. Se utilizan para pasar como parámetro/argumento
// a otra funcion, es decir (un callback)

/* function (name) {
    return name;
} */

const nuevoArray = array.map(function (valor) {
  return valor * 2;
});

// Sintaxis arrow function
/* (name) => {
    return name;
} */

const coches = [
  {
    modelo: "",
    precio: "",
  },
];

coches.filter((coche) => {
  if (coche.precio > 10000 && coche.precio < 20000) {
    return coche;
  }
});
