"use strict";

/* TEMPLATE STRINGS */

const miString = "Hola Mundo!";

console.log("Un texto ", miString);

console.log(`un texto normal 4 + 4 = ${4 + 4}
ahour los intro no dan errores. Y se pueden intercalar con variables o JS directamente ${miString}`);

/* ------------------------------ */

// Template Strings interpreta los saltos de linea

console.log(`Hola
Mundo`);

// Concatena variables dentro de las comillas entre ${}

console.log(`La variable "miString" guarda el valor. ${miString}`);
