'use strict';

// La asignacion por destructuring nos permite asignar valores de forma más rápida y compacta

/**
 * Destructuring por arrays
 */

const miArray = ['hola', 23];

// Los nombres que asignemos dan igual,
// lo realmente importante es el orden en el que declaramos las variables
const [saludo, numero] = miArray;

console.log(saludo);
console.log(numero);

const miArray2 = ['hola', 23, 'adios', 'que tal'];

// Pare evitar que la variable se asigne a una posicion previa a la que
// buscamos, los separamos por comas

const [, , despedida, variable = 'iniciada en el destructuring'] = miArray2;

console.log(despedida);
console.log(variable);

//////
const miArray3 = ['hola', 23, 'adios', true, 12, 123413];

const [saludo2, numero2, ...rest] = miArray3; // rest: resto de elementos

console.log(rest);

/**
 * Destructuring de Objetos
 */

console.log('');
console.log('Destructuring Objetos');

// Cada variable del destructuring debe llamarse igual que la propiedad
// del objeto del que va a tomar su valor

const usuario = {
  nombre: 'Maria',
  apellidos: 'Sanchez',
  edad: 24,
  mascota: 'Lupo',
};

// Declaramos una variable "notas" que si no existe como propiedad en el objeto
// tomará el valor por defecto de 10
// En caso de que si exista tomará el valor indicado en el objeto
const { edad, nombre, mascota, notas = 10 } = usuario;

console.log(edad);
console.log(nombre);
console.log(notas);

// ...rest se queda con todas las propiedades no desestructuradas en la misma linea
const { apellidos, ...resto } = usuario;

console.log(resto);

////////////////////////////

// Podemos aplicar el destructuring directamente en los argumentos de una funcion

function printUser(user) {
  const { nombre, edad } = user;

  return `El usuario se llama ${nombre} y tiene ${edad} años`;
}

console.log(printUser(usuario));

function printUser2({ nombre, edad }) {
  return `El usuario se llama ${nombre} y tiene ${edad} años`;
}

console.log(printUser2(usuario));

// Podemos asignar valores a los parametros de una funcion
function test(num = 10) {
  return `Es el numero ${num}`;
}

console.log(test(5));
