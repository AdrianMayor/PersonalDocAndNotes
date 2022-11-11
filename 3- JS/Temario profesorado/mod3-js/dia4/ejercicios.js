'use strict';

// Crear una funcion que reciba un número y devuelva true si es par
// o false si es impar

function isEven(numero) {
  /* 
  if (numero % 2 === 0) {
    return true;
  }

  return false; 
  */

  return numero % 2 === 0;
}

console.log(isEven(11));

// Funcion que reciba dos números (dividendo y el divisor) devuelva true
// si el primero es divisible por el segundo y false si no
// es decir, si el resto es 0

function esDivisible(numA, numB) {
  return numA % numB === 0;
}

console.log(esDivisible(10, 5));

// Funcion que reciba un número y devuelva true si es primo y false si no
//// Un numero es primo si solo es divisible entre 1 y él mismo

function isPrime(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

console.log('Es primo?', isPrime(10));

// Funcion que recibe 2 números y saca por consola todos los números primos
// comprendidos entre ellos

console.log('');
console.log('EJERCICIO 3');

function rangoPrimos(inicio, fin) {
  for (let i = inicio; i <= fin; i++) {
    if (isPrime(i)) {
      console.log(`El numero ${i} es primo.`);
    }
  }
}

rangoPrimos(4, 20);

// Crear un objeto Coche con las propiedades que consideres necesarias
const coche = {
  marca: 'Mercedes',
  modelo: 'Clase A',
  precio: 25000,
  colores: ['negro', 'azul', 'blanco'],
};

console.log('');
console.log(coche);

// Clona el objeto Coche con el Spread operator

const copiaCoche = {
  ...coche,
};

console.log(copiaCoche);

// Vuelve a clonar el objeto coche con Spread pero esta vez sobreescribe
// algun dato

const copiaDosCoche = {
  ...coche,
  marca: 'Audi',
  modelo: 'A6',
};

copiaDosCoche.precio = 10000;

console.log(copiaDosCoche);
