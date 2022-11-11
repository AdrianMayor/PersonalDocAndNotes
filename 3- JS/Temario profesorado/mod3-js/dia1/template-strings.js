"use strict";

// TEMPLATE STRINGS

const miString = "Hola Mundo!";

console.log("Un texto ", miString);

console.log(`Un texto normal 4 + 4 = ${4 + 4}
ahour los intros no dan errores ${miString}`);

console.log("Un texto normal");

/* ----------------- */

// Template Strings interpreta los saltos de linea
console.log(`Hola
Mundo`);

// Concatena variables dentro de las comillas entre ${}
console.log(`La variable 'miString' guarda el valor: ${miString}`);
