"use strict";

/*  --- OPERADORES ARITMETICOS  --- */

// Suma
console.log("suma: ", 5 + 3);

// Resta
console.log("Resta: ", 5 - 3);

// multiplicaciones
console.log("multiplicacion: ", 5 * 3);

// Division
console.log("division: ", 5 / 3);

// Resto de una division
console.log("Resto de la division: ", 5 % 3); // util para saber si un numero es par o impar

console.log("el numero 10 es par?: ", 10 % 2); // Si da 0 es par, si da otro numero (generalmente 1) es impar

// Operador del objeto Math
console.log("Raiz cuadrada de 4: ", Math.sqrt(4)); // Math.sqrt -> Calcula la raiz cuadrada del numero entre parentesis

/* OPERADORES QUE CAMBIAN EL VALOR DE LA VARIABLE */
let numeroA = 5;
let numeroB = 10;
console.log(numeroA);

// Sumar 1 al valor de la variable
numeroA++; // numero A = numeroA + 1;
console.log("NnumeroA++ ", numeroA++);

// Restar 1 al valor de la variable
numeroA--;
console.log("NumeroA-- ", numeroA);

// asignarle el resultado a una suma
numeroA += numeroB; // numeroA = numeroA + numeroB
console.log("numeroA += numeroB ", numeroA);

numeroA -= numeroB; // numeroA = numeroA - numero B
console.log("numeroA - numeroB ", numeroA);

// JavaScript sige el orden ejecucion de operaciones de las matematicas
console.log(2 + 2 * 4); // Primero la multiplicacion y posteriormente la suma
console.log((2 + 2) * 4); // Primero el parentesis y lego la multiplicacion
