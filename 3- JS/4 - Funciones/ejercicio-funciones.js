"use strict";

/* 
    1. Crear una funcion que reciba un numero y devuelva true si es par o false si es impar
*/

function isEven(num) {
  /* if (num % 2 === 0){
            return true;
        } else {
            return false;
        } */

  return num % 2 === 0;
}

console.log("El numero es par?: ", isEven(10));

/* 
    2. Crear una funcion que reciba dos numeros , dividendo y divisor, y devuelva true si el primero es divisible por el segundo y false si no. Es decir, si el resto es 0
*/

function isDivisable(numA, numB) {
  return numA % numB === 0;
}

console.log("Es divisible: ", isDivisable(10, 2));

/* 
    3. Funcion que reciba un numero y devuelva true si es primo y false si no. Un nmero es primo si solo es divisible entre 1 y el mismo
*/

function numPrimo(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log("Es primo? ", numPrimo(7));

/* 
    4. Funcion que recibe dos numeros y saca por consola todos los numeros primos comprendidos entre ellos
*/

/* function numerosPrimos(numA, numB) {
  let primos = "";
  for (numA; numA <= numB; numA++)
    if (numA % 2 !== 0 || numA === 2) {
      primos += numA + " ";
    }
  return primos;
} */

function numerosPrimos(numA, numB) {
  let primos = "";
  for (numA; numA <= numB; numA++) {
    let esPrimo = true;
    for (let i = 2; i < numA; i++) {
      if (numA % i === 0) {
        esPrimo = false;
      }
    }
    if (esPrimo) primos += numA + " ";
  }
  return primos;
}

console.log("Numeros primos entre dos numeros: ", numerosPrimos(0, 41));

/* 
    5. Crear un objeto Coche con las propiedades que considereis. Clona el objeto con el Spread operator- Vuelve a clonar el objeto coche con el spread pero esta vez sobreescribe algun dato
*/

const carBMW = {
  brand: "BMW",
  engine: 325,
  model: "serie 3",
  isGas: true,
  colores: ["verde", "rojo", "azul"],
};

const carAudi = {
  ...carBMW,
  brand: "Audi",
  engine: 2.0,
  model: "A6",
  isGas: false,
};

console.log("Objetos creados, clonados y modificados: ", carBMW, carAudi);

console.log("---------------");
console.log("Ejercicio del martes");
