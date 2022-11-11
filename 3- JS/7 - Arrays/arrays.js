"use strict";

/* 
    ARRAY
*/

// Un array es una coleccion ordenada de valores de cualquier tipo. Se declaran con los corchetes

const array = []; // Declaramos un array vacio

const colores = ["azul", "rojo", "verde", "violeta", "negro"]; // Indice desde 0 pero el lenght es 4
console.log(colores);

console.log(colores.length);

// Acceder a un elemento del array
console.log(colores[2], colores[1]); // Accedemos al indice numero 2 que es en este caso verde, y lo imprime por pantalla

console.log(colores[999]); // Si una posicion indicada no encuentra nada imprime undefined

// Sacar el ultimo valor del array
console.log(colores[colores.length - 1]); // accedemos al ultimo indice del array

// Otra manera de acceder a algun elemento del array usando .at()
console.log(colores.at(2));
// la unica diferencia es que para acceder a la ultima posicion del array puedes poner un -1. Contando al reves
console.log(colores.at(-1));

// Creamos un array mas complejo
console.log("");

const arr = [
  "Hola que tal",
  23,
  true,
  [2, 5, 8],
  { nombre: "Usuario", edad: 20 },
];

console.log(arr);

// Accedemos a n valor dentro del Array hijo de arr

console.log(arr[3][2]); // imprime el indice 2 del array del indice 3 de arr. 8

// Accedemos a una propiedad del objeto dentro del array

console.log(arr[4].nombre); // imprime la propiedad nombre del objeto alojado en el indice 4 del array

// Copiar un array usando un SPREAD operator (copia poco profunda)

const copiaArr = [...arr, ...colores]; // Clonamos todos las propiedades y valore de arr y colores

copiarArr[5] = "aqua"; // Sobreescribimos la posicion 5 del indice con aqua

copiaArr[4].edad = 35; // Al ser una copia poco profunda modifica tanto la propiedad del objeto de arr como de copiaArr
console.log(copiarArr);
