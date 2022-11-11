"use strict";

/**
 * ###################
 * ### Ejercicio 2 ###
 * ###################
 *
 * Crea un array con el valor [3, 4, 13, 5, 6, 8] y muestra por consola qué números
 * son pares y qué números son impares
 *
 * EXTRA: Haz lo mismo pero ahora indica cuales son primos y cuales no
 */

const arr = [3, 4, 13, 5, 6, 8];

console.log("");
console.log("Ejercicio realizado con bucles");
for (const value of arr) {
  if (value % 2 === 0) {
    console.log(`El numero ${value} del array es par`);
  } else {
    console.log(`El numero ${value} del array es impar`);
  }
}

console.log("EXTRA");
for (const value of arr) {
  let esPrimo = true;
  for (let i = 2; i < arr.length; i++) {
    if (value !== i) {
      if (value % i === 0) {
        esPrimo = false;
      }
    }
  }
  if (esPrimo) {
    console.log(`El numero ${value} del array es un numero primo`);
  } else {
    console.log(`El numero ${value} del array no es un numero primo`);
  }
}

console.log("");
console.log("Con metodos funcionales");

function isPrime(arr) {
  for (const value of arr) {
    let esPrimo = true;
    for (let i = 2; i < arr.length; i++) {
      if (value !== i) {
        if (value % i === 0) {
          esPrimo = false;
        }
      }
    }
    if (esPrimo) {
      return `ademas de primo`;
    } else {
      return `ademas de NO ser un numero primo`;
    }
  }
}

function isEven(number) {
  if (number % 2 === 0) {
    return `El numero ${number} es par ${isPrime(arr)}`;
  } else {
    return `El numero ${number} es impar ${isPrime(arr)}`;
  }
}
console.log(arr.map(isEven));
