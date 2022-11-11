"use strict";

/*  FUNCIONES */

/* 
function nombre() {
    //Codigo de la funcion
}

nombre();
*/

// Declaramos una funcion
function sayHi() {
  console.log("Hola!");
}

// Llamamos a la funcion
sayHi();

// Funcion con argumentos
function suma(numA, numB) {
  console.log(numA + numB);
}

suma(10, 5);
console.log("Hay mucho codigo de por medio");
suma(2, 3);

let numeroA = parseInt(prompt("Dime un numero: "));
let numeroB = parseInt(prompt("Dime otro numero: (teclea 0 para detener"));

while (numeroB !== 0) {
  suma(numeroA, numeroB);

  numeroA = parseInt(prompt("Dime un numero:"));
  numeroB = parseInt(prompt("Dime otro numero: (teclea 0 para detener"));
}

// RETURN

function duplicarNumero(num) {
  return num * 2; // Devuelve el numero * 2
}

console.log(duplicarNumero(4));

let elDobleDe = duplicarNumero(6);

console.log(elDobleDe);

function suma2(numA, numB) {
  return numA, numB;
}

console.log(suma2(10, 5));

let operacionMasCompleja = suma2(10, 5) / 2;
