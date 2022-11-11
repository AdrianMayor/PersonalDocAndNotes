"use strict";

/* 
    CALLBACKS -> Son funciones que pasamos como argumento a otra funcion
*/

function sayHi() {
  return "Hola";
}

const variable1 = sayHi(); // aignamos a variable1 el resultado de ejecutar la funcion
console.log(variable1);

const variable2 = sayHi; // Asigna la propia funcion. La variable2 se convierte en la funcion. No se ejecuta
console.log(variable2); // Se muestra el codigo de la funcion

console.log(variable2()); // Con los parentesis se ejecuta la funcion

///////////////

function sayHi2(nombre) {
  if (nombre) {
    return `Hola ${nombre}`;
  }
  return "Hola";
}

const var1 = sayHi2();
console.log("Pepe"); // Da Error, no e una funcion

const var2 = sayHi2;
console.log(var2("Pepe")); // Al ser la variable a la que le asignamos una funcion, y al comportarse como una funcion, podemos pasarle un argumento

///////////////////////////////

//Esta va a ser una funcion de callback, es decir, vamos a llamarla como argumento en otra funcion

console.log("");
console.log("Funcion de calcular");
function suma(numA, numB) {
  return numA + numB;
}

function resta(numA, numB) {
  return numA - numB;
}

function multiplicacion(numA, numB) {
  return numA * numB;
}

function calcular(numA, numB, operacion) {
  return operacion(numA, numB);
}

console.log(calcular(10, 5, suma));
console.log(calcular(10, 5, resta));
console.log(calcular(10, 5, multiplicacion));

//////////////
console.log("");
console.log(
  "Es importante mantener el orden de lo argumentos en la funcion de callback"
);
function crearUsusario(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad,
  };
}

function crearFrase(nombre, edad, callback) {
  const user = callback(nombre, edad);

  return `Me llamo ${user.nombre} y tengo ${user.edad} años`;
}

console.log(crearFrase("Cesar, 12, crearUsuario"));
