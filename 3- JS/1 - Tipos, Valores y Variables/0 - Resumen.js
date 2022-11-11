"use strict"; // modo estricto

// comentario de linea

/* Comentario 
de bloque */

//Imprimir por consola del navegador
console.log("Hola Mundo");

// Hay 2 formas de declarar una variable

let variable = "Hola"; // puede cambiar su valor
const variableConstante = "No puedo cambiar mi valor"; //No puede cambiar su valor

// Tipos de variables

// Strings (Texto)
let texto = "Un string";

//Number (numeros)
let numero = 10;

// integer -> no tiene decimales
// float -> si tiene decimales

console.log(texto); // Lo imprime en negro indicando que es texto
console.log(numero); //Lo imprime como en azul indicando que es numero

// Booleano -> Verdadero o Falso

const verdadero = true;
const falso = false;

// undefined -> Sin valor definido
let indefinido;
console.log(indefinido); // Imprime undefined ya que no la hemos inicializado, no le hemos definido valor

// null -> valor indicado como nulo por parte del desarrollador
let nulo = null;
console.log(nulo);

/* --  OBJETO MATH  -- */

// Math.random -> Devuelve un numero aleatorio entre 0-1

console.log(Math.random() * 10); // Esto trae un numero aleatorio entre 0 - 10, ya que al multiplicarlo adquiere ese limite.
console.log(Math.random() * (10 - 5) + 5); // Esto trae un numero entre un minimo y maximo, al multiplicarlo con el resultado de maximo menos minimo, tenemos el minimo a sacar, y al sumar el minimo nos aseguyramos que pueda llegar al maximo.

// Math.ceil -> Redondeo al alza siempre
console.log(Math.ceil(23.5)); // Imprime 24

// Math. floor -> Redondea siempre hacia abajo
console.log(Math.floor(23.5)); // Imprime 23

// Math.round -> Redondea de forma normal
console.log(MAth.floor(23.5)); // Imprime 25

/* -- TEMPLATE STRINGS --  */

console.log(`nterpretan los saltos 
    de linea`);

// podemos indicar las variables o codigo JS junto con la cadena de texto

console.log(`El resultado de 4 + 4 = ${4 + 4}`);

let miNumeroTelefono = 123123123;
console.log(`Mi numero de telefono es ${miNumeroTelefono}`);
