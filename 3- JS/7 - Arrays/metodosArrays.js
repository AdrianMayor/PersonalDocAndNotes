"use strict";

/* METODOS DE ARRAY */
const miArr = [1, 2, 3, 4, 5];

console.log("Array iniciado", miArr);

/* 
    PUSH() -> Añadir un elemento al final de un array
*/

console.log("");
console.log("PUSH");

miArr.push(6);
miArr.push(7, 8, 9);
console.log(miArr);

const miArr2 = [false, "hola"];
/* miArr.push(miArr2); // Añade el array como tal al otro array */
miArr.push(...miArr2); // Con el SPREAD va a sacar los valores del array miArr2 y los va a pushear separados como valores independientes al array miArr
console.log(miArr);

/* 
    UNSHIFT() -> Añade elementos al principio del array
*/

console.log("");
console.log("UNSHIFT");

miArr.unshift("Hola Mundo");
console.log(miArr);

miArr.unshift(true, 19);
miArr.unshift(...miArr2);
console.log(miArr);

/* 
    POP () -> Elimina el ultimo elemento de un array
*/

console.log("");
console.log("POP");

miArr.pop(); // No hay que añadir nada entre parentesis , automaticamente elimina el ultimo elemento
console.log(miArr);

/* 
    SHIFT() -> Elimina el primer elemento del array 
*/

console.log("");
console.log("SHIFT");

miArr.shift();
console.log(miArr);

/* 
    SPLICE() -> Elimina o sustituye elementos del array. Hay que indicar en que posicion empieza. 
    (opcional) cuantos elementos elimina ( si no se indica nada coge hasta el final del array)
    (opcional) que introduce
*/

console.log("");
console.log("SPLICE");

miArr.splice(6, 2); // Eliminamos lo valores de las posiciones 6 y 7 (valore 3 y 4)
console.log(miArr);

miArr.splice(0, 1, "adios"); // Sustituimos el primer valor que contiene 'hola' por 'adios'
console.log(miArr);

miArr.splice(3, 0, "hola mundito");
console.log(miArr);

miArr.splice(3, 1); // Eliminamos el Hola mundito
console.log(miArr);

miArr.splice(8); // Eliminamos todo el array desde la posicion 8 (incluida)

/* 
    SLICE() -> Devuelve un trozo del array SIN MODIFICAR el array original
    Se indica el principio (incluido) y el fin (sin incluir)
*/

console.log("");
console.log("SLICE");

const trozoArray = miArr.slice(2, 6);
console.log(trozoArray);

/* 
    JOIN() -> Convierte un array en un string. Entre parentesis le decimos con que separa cada elemento del array al convertirlo en string, por defecto son comas
*/

console.log("");
console.log("JOIN");

const stringArr = ["h", "o", "l", "a"];
const stringArr2 = ["hola", "mundo"];

console.log(stringArr.join()); // por defecto los separa con comas
console.log(stringArr.join("")); // Indicamos que no separe con nada al unir a string
console.log(stringArr2.join(" ")); // Indicamos que separe con un espacio al convertir los elementos de array a string

/* 
    INDEXOF() -> Devuelve el indice del elemento que busquemos
*/

console.log("");
console.log("INDEX");

const colores = ["azul", "rojo", "negro", "verde"];

console.log(colores);
console.log(colores.indexOf("verde")); // Devuelve la posicion donde se encuentre ese valor dentro del array. Si no lo encuentra devuelve un -1

let color = prompt("Dime un color");
const variable = colores.indexOf(color);
console.log(variable[index]);

/*
 LASTINDEXOF() -> Solo devuelve la ultima posicion en el que se encuentre el elemento que busquemos
*/

console.log("");
console.log("LAST INDEX OF");

const colores2 = ["azul", "verde", "rojo", "negro", "verde"];
console.log(colores2.lastIndexOf("verde"));

/* 
    REVERSE() -> Da la vuelta al indice de los elementos del array
*/

console.log("");
console.log("REVERSE");

console.log(colores2.reverse());

/* 
    INCLUDES() -> Devuelve true si el array contiene el elemento indicado y false si no. Es un buscador
*/

console.log("");
console.log("INCLUDES");

console.log(colores2.includes("verde")); // Devuelve true

console.log(colores2.includes("violeta")); // Devuelve false

colores2.splice(1, 0, "violeta");
console.log(colores2);
