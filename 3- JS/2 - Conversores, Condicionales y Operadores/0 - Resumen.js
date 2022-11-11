"use strict";

/* CONVERSIONES */

// Convertir un string a numero (sin decimales)
console.log(parse.Int("3.2"));

// Convertir un string a numero (con decimales)
console.log(parseFloat("3.2"));

// NaN -> Not a Number | Cuando no puede convertir el string a numero
console.log(parseInt("hola"));

console.log(isNaN("hola")); // imprime true, porque no puede ser convertiro a numero
console.log(isNaN("3.2")); // imprime false, porque puede ser convertido a numero

// Convertir de numero a string
console.log((3.2).toString());

/* OPERADORES LOGICOS */

// % -> devuelve el resto de la division entre un numero y otro
console.log(15 % 2);

let texto = "Un texto";
texto += " y demas"; // texto = texto + ' y demas';
console.log(texto);

let num = 10; // num = num -1;
num += 0.8;

/* OPERADORES LOGICOS */
// True or false

// AND -> &&  |  Devuelve true si todas las condiciones que contanga son true

console.log(10 > 5 && "hola" === "hola" && 3 < 1);

// OR -> ||    | Devuelve true si al menos una de las condiciones es true

console.log(10 > 5 || "hola" === "hola" || 3 < 1);

// AND y OR
console.log(
  (10 > 5 && "hola" === "hola") || (20 !== 10 && "mitexto" !== "otrotexto")
);

/* CONDICIONALES */

// IF

if (condicion) {
  // codigo si la condicion que se encuentra entre los parentesis es true
}

let numero = 10;
const textoConstante = "hola mundo";

if (numero === 10) {
  console.log("Tu numero es 10");
}

// ELSE -> En caso de que el primer if sea false, entra en el else

if (numero === 10) {
  console.log("Tu numero es 10");
} else {
  console.log(textoConstante);
}

// ELSE IF

if (numero === 10) {
  console.log("Tu numero es 10");
} else if (numero > 10) {
  console.log("Tu numero es mayor que 10");
} else {
  console.log(textoConstante);
}

// CONDICIONAL TERCIARIO

numero === 10 ? console.log("Tu numero es 10") : console.log(textoConstante); // es el mismo caso que el ejemplo de la linea 65. ? -> seria IF y : -> seria el else

numero === 10
  ? textoConstante === "hola mundo"
    ? console.log("Tu numero  es 10")
    : console.log(textoConstante)
  : console.log("No se cumple numero es igual a 10");

// SWITCH

let mes = "1";

switch (mes) {
  case "1":
    console.log("Enero");
    break;
  case "2":
    console.log("Febrero");
    break;
  case "3":
    console.log("Marzo");
    break;
  default:
    console.log("No es un mes valido");
    break;
}
