"use strict";

/**
 * #################
 * ## Ejercicio 5 ##
 * #################
 *
 * Hemos visto como podemos recorrer automáticamente un array empleando el bloque
 * for y la propiedad nombreArray.length. Pues de igual modo que recorremos arrays
 * es posible recorrer strings utilizando ese mismo método.
 *
 * Tomemos como referencia el string "JavaScript mola mucho". En este ejercicio
 * deberás mostrar por consola el número total de caracteres que tiene este string
 * SIN CONTAR los espacios. El resultado debería ser 19 para el string anterior.
 *
 */

let text = "JavaScript mola mucho"; // 19 caracteres sin espacios

let newText = text.replaceAll(" ", "");
console.log(newText.length);

console.log("");
console.log("Con bucle");

/* let x = 0;
for (let i = 0; i < text.length; i++) {
  if (text[i] !== " ") {
    x += 1;
  }
}
console.log(x); */

let x = 0;
for (const letras of text) {
  if (letras !== " ") {
    x += 1;
  }
}
console.log(x);
