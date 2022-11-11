'use strict';

/**
 * CALLBACKS
 */
// Los callback son funciones que pasamos como argumento a otra funcion

function sayHi() {
  return 'Hola';
}

const variable1 = sayHi(); // Asignamos a variable1 el resultado de ejecutar la funcion
console.log(variable1);

const variable2 = sayHi; // Asignar la propia funcion
console.log(variable2);

console.log(variable2());

//////////

function sayHi2(nombre) {
  if (nombre) {
    return `Hola ${nombre}`;
  }

  return 'Hola';
}

const var1 = sayHi2();
// console.log(var1('Pepe')); // Error, no es una funcion

const var2 = sayHi2;
console.log(var2('Pepe')); // A var2 le hemos asignado una funcion

// Como se comporta como una funcion, podemos pasarle un argumento

/////////////////////

console.log('');
console.log('Funcion de calcular');
// Esta va a ser una funcion de callback, es decir, vamos a llamarla como argumento
// en otra funcion
function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

function calcular(numA, numB, operacion) {
  return operacion(numA, numB);
}

console.log('SUMA:', calcular(10, 5, suma));
console.log('RESTA:', calcular(10, 5, resta));
console.log('MULTIPLICACION:', calcular(10, 5, multiplicacion));

///////////////////

console.log('');
/* console.log(
  'Es importante mantener el orden de los argumentos en la funcion de callback'
); */

function crearUsuario(edad, nombre) {
  return {
    nombre: nombre,
    edad: edad,
  };
}

function crearFrase(nombre, edad, callback) {
  const user = callback(nombre, edad);

  console.log(user);
  /*   const user = {
    nombre: nombre,
    edad: edad,
  }; */

  return `Me llamo ${user.nombre} y tengo ${user.edad} años`;
}

console.log(crearFrase('César', 12, crearUsuario));
