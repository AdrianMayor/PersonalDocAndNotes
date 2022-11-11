"use strict";

/*  --- OPERADORES LOGICOS  ---  */

// Devuelven como resultado los booleanos -> true o false

let numA = 5;
let numB = 3;
let numC = 10;
let numD = 5;

// '===' -> Comparacion estricto

console.log("numA es igual a numC ?: ", numA === numC); // False, ya que 5 y 10 no son iguales
console.log(`El numero ${numA} es igual al numero ${numD}? ${numA === numD}`); // True, ya que 5 es igual a 5

// '!==' -> Diferencia  estricta. | Devuelve true si son distintos | Devuelve false si son iguales

console.log(`Son diferentes?`, numA !== numC); // imprime true ya que son distintos

console.log(`El numero ${numA} es distinto a ${numD}? ${numA !== numD}`);

// '>' -> Mayor que

console.log("Es el numA mayor que el numB ? ", numA > numB); // True ya que el numero 5 es mayor que 3

// '<' -> Menor que

console.log(`El numero ${numB} es menor que ${numC}? ${numB < numC}`);

// '>=' Mayor o igual que

console.log(`El numero ${numA} es mayor o igual a ${numD} ${numA >= numD}`);

// '<=' Menor o igual que

console.log(`El numero ${numB} es menor o igual a ${numA}? ${numB <= numA}`);

/* LOGICOS (puertas logicas AND y OR) */

// AND -> && . Devuelve true si todas las condiciones se cumplen

console.log(3 < 5 && 10 > 2); // Imprime false porque porque la ultima comparacion 10 > 2 es mentira, desde que uno es false, devuelve false

// OR -> || . Devuelve true si al menos una de las condiciones se cumple

console.log(3 < 2 || 10 > 2); // Imprime true porque al menos una de las dos es true, le vale que cualquiera pueda ser true

if (edad >= 18 && residencia === "España") {
  //codigo
}

/* NEGACION -> Devuelve lo contrario del booleano*/

console.log("Es 5 mayor que 3", 5 > 3); // Devuelve true
console.log("Es 5 mayor que 3", !5 > 3); // Devuelve false

console.log("Contrario de true", !true); // Devuelve false
console.log("Contrario de true", !!true); // Devuelve true
