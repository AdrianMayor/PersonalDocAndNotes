"use strict";

/* Bucle WHILE */

/* 
    while (condicion) {
        //codigo
    }
*/

let tiempo = 10;

while (tiempo >= 0) {
  console.log(`Quedan ${tiempo} horas de juego`);
  tiempo--;
}

console.log("El bucle while a terminado");

// Pedir una palabra al usuario (prompt) y seguira pidiendola hasta que teclee STOP

let palabra = "Indicame una palabra";

while (palabra.toUpperCase !== "STOP") {
  console.log(palabra);

  palabra = prompt(
    "Estas dentro del bucle, indica una palabra, teclea stop para continuar"
  );
}

// --------------------

let word = prompt("Dime una palabra");
let phrase = "";

while (word !== "PARA") {
  /* if (frase.length < 1) {
    frase += word;
  } else {
    frase += " " + word;
  } */
  frase += word + " ";

  console.log(frase);

  word = prompt(
    "Indica una palabra para añadir a la cadena, teclea STOP para parar el bucle"
  );
}

/* DO ... WHILE */

const age = 21;

while (age < 10) {
  console.log("Esto no se ejecuta nunca");
}

do {
  console.log("Esto se ejecuta al menos una vez");
} while (age < 10);
