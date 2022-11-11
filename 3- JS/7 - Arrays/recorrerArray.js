"use strict";

/* 
    RECORRER ARRAYS
*/

const colores = ["azul", "verde", "rojo", "negro"];

console.log(colores);

// Recorremos el array colores con un bucle normal

for (let i = 0; i < colores.length; i++) {
  console.log(colores[i]);
}

console.log("");
console.log("Colores al resves");
for (let i = colores.length - 1; i >= 0; i--) {
  console.log(colores[i]);
}

// Bucle: FOR ... OF -> Bucle for especifico para arrays

console.log("");
console.log("Bucle FOR OF");

for (const color of colores) {
  // color va a representar en cada vuelta cada uno de los valores del array colores
  console.log(color);
}

//////////////////////////////////
console.log("");

const precioCoche = [25000, 20000, 26000];
const tipoMoneda = ["€", "£", "$"];

for (let i = 0; i < precioCoche.length; i++) {
  console.log(`El coche vale ${precioCoche[i]}${tipoMoneda}`);
}

/////////////////////////////////

console.log("");

const numeros = [10, 20, 30, 40, 50];

const numerosDivididos = [];

for (const numero of numeros) {
  // numerosDivididos.push(numero / 10); -> Solucion rapida en una linea

  let resultado = numero / 10;
  numerosDivididos.push(resultado);

  console.log(numerosDivididos);
}

console.log(numeros);
console.log(numerosDivididoss);
