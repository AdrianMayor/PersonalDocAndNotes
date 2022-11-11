"use strict";

/* 
    La asignacion por destructuring nos permite asignar valores de forma mas rapida y compacta
*/

/* 
     0- Destructuring por arrays
*/

// Los nombres que asignemos da igual, lo importante es mantener una coherencia de orden elemento:valor

console.log("");
console.log("Destructuring Arrays");

const miArray = ["hola", 23];

const [saludo, numero] = miArray;

console.log(saludo);
console.log(numero);
/* 

*/

//////////////////////////////

const miArray2 = ["hola", 23, "adios"];
// Para evitar que la variable se asigne a un elemento anterior que no queremos , los separamos por comas con espacios vacios
const [, , despedida, variable = "iniciada en el destructuring"] = miArray2;
console.log(despedida);
console.log(variable);
//////////
const miArray3 = ["hola", 23, "adios", true, 12, 123413];

const [saludo2, numero2, ...rest] = miArray3; // rest = resto de elementos, aunque no es una palabra reservada. Es un concenso social

console.log(rest);

/* 

    0- Destructuring de objetos

        -> Cada variable del destructuring debe de llamarse igual que la propiedad del objeto del que va a tomar su valor
*/
console.log("");
console.log("Destructuring Objetos");

const usuario = {
  nombre: "Maria",
  apellidos: "Sanchez",
  edad: 24,
  mascota: "Lupo",
  notas: 20,
};

const { edad, nombre, mascota, notas = 10 } = usuario;

console.log(edad);
console.log(nombre);
console.log(notas);

// ...rest se queda con todas las propiedades excluyendo la que nosotros especifiquemos
const { apellidos, ...resto } = usuario;

console.log(resto);

/////////

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
