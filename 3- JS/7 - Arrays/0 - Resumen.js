"use strict";

/* 
    REPASO ARRAYS
*/

// Un array es una coleccion de elemento o valores de cualquier tipo

const numeros = [3, 5, 10, 20, 50];

console.log(numeros);
console.log("Longitud del array: ", numeros.length); // longitud del array (empieza a contar en 1)

console.log(numeros[2]); // Mostrar el valor de la posicion 2 del array

numeros[2] = "hola";
console.log(numeros);

console.log(numeros[numeros.length - 1]);

// Spread operator -> Sirve para copiar los valores de un array en otro

const numeros2 = [...numeros];
console.log(numeros2);

numeros2[2] = "adios";
console.log(numeros2);

/*
 METODOS 
 */

const colores = ["verde", "rojo", "azul"];

// PUSH() -> Añade el/los elementos indicados al final del array
colores.push("amarillo");
console.log(colores);

// UNSHIFT() -> añade elementos al principio del array
colores.unshift("negro");
console.log(colores);

// POP() -> Elimina el ultimo elemento del array
colores.pop();
console.log(colores);

// SHIFT() -> Elimina el primer elemento de un array
colores.shift();
console.log(colores);

// SPLICE() -> Elimina o sustituye elementos del array
colores.splice(1, 0, "negro"); // (posicion, desde esa posicion cuantos elementos elimino, que añado)
console.log(colores);

// SLICE() ->  Devuelve un trozo de un array
console.log(colores.slice(1, 3)); // Devuelve desde la posicion 1 a la 2, ya que la ultima no es inclusiva

// REVERSE() -> da la uelta a los elementos del array
console.log(colores.reverse());

///////////////////////

/* 
    RECORRER LOS VALORES DE UN ARRAY CON BUCLES
*/

// Bucle FOR
for (let i = 0; i < colores.length; i++) {
  console.log(colores[i]);
}

// Bucle FOR ... OF (tambien sirve para recorrer strings, toma cada letra del string como un elemento)
for (const color of colore) {
  console.log(color);
}
