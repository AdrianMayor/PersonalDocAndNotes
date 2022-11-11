"use strict";

/* --CONVERSIONES-- */

console.log(`2` + 2); // Predomina el string y lo muestra como cadena de texto '22'

// Conversion de STRING a NUMBER

// Metodo parseINT
let numeroEnTexto = "2.12";
let numeroEnTextoMal = "hola";

console.log(numeroEnTexto + 2); // Concatena el String
console.log(parseInt(numeroEnTexto) + 2); // El parseInt convierte lo que tiene dentro de sus parentesis en un numero. Solo coge los numeros enteros. Imprime 4

// Metodo: parseFloat
console.log(parseFloat(numeroEnTexto) + 2); // suma y mantiene los decimales

console.log(parseFloat(numeroEnTextoMal) + 2); // Imprime NaN -> Not a Number

// añadiendo un '+'

console.log(+"3.2" + 6); // Realiza la suma conviertiendo el string '3.2' a number

// Metodo: is NaN -> Consulta si no es un numero. Comprueba una cadena de string puede ser convertida a numero
console.log(isNaN("Hola")); // true. No se puede convertir

console.log(isNaN("3.2")); // false. Se puede convertir

// Conversion de NUMBER a STRING

let numeroAString = 4.58;
console.log(typeof numeroAString); // Imprime number

/* numeroAstring = '4.58'; // Conversion chana a String */

// Metodo: toString()
console.log(numeroAString.toString()); // Realiza la conversion de numeros a String

// JavaScript hace automaticamente algunas conversiones

console.log("10" - "5"); // Se convierte a numero y realiza la resta. Imprime el resultado

console.log("Tengo " + 24 + "años"); // El 24 es convertido en la cadena a texto
