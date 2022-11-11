"use strict";

//Promesa de la edad. Devuelve un número del 0 al 100, tardando entre 0 y 1 segundos
const agePromise = new Promise((resolve, reject) =>
  setTimeout(
    () => resolve(Math.round(Math.random() * 100)),
    Math.random() * 1000
  )
);

/* function procesarNumero(num) {
  if (num < 18) {
    console.error(num, " es menor");
  } else if (num % 2 === 0) {
    console.log(num, "es par");
  } else {
    console.log(num, "es impar");
  }
}

agePromise.then((num) => procesarNumero(num)); */

/* async function getAge() {
  return agePromise;
}

async function solution() {
  const age = await getAge();
  procesarNumero(age);
} */

// Creamos una funcion que recibe una edad y...
function procesarNumero(num) {
  // ... deuelve una promesa
  return new Promise((resolve, reject) => {
    // Si la edad es menor de 18, lo rechaza
    if (num < 18) {
      reject(num, " es menor");
    }

    // Si la edad es par, la promesa se resolvera al cabo de un segundo
    if (num % 2 === 0) {
      setTimeout(() => {
        resolve(num, "es par");
      }, 1000);
    } else {
      // Sabemos que si no es par...la edad es impar
      // Si la edad es impar, la promesa se resolvera al cabo de dos segndos
      setTimeout(() => {
        resolve(num, "es impar");
      }, 2000);
    }
  });
}

// Trabajamos con las promesas

// Forma 1: con then y catch
agePromise
  .then((num) => procesarNumero(num))
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

// Forma 2
async function main() {
  // agePromise es una promesa que deuelve la edad
  //amos a guardarla en una variable, como es una promesa debemos ESPERAR a que se reselva
  const age = await agePromise();

  // Esta variable age es la qeu vamos a pasarle como argumento a la funcion procesarNumero(). Retorna na promesa que puede fallar por lo que tenemos que meterla en un try catch
  try {
    const response = await procesarNumero(num);
    console.log(response);
  } catch (err) {
    console.error("Error: ", err);
  }
}

// llamamos a la funcion
main();
