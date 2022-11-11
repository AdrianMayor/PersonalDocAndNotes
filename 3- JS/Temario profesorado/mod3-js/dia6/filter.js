'use strict';

/**
 * MÉTODOS FUNCIONALES
 */

// Son métodos que utilizan callbacks
const numeros = [2, 5, 10, 20, 23];
console.log('Array original');
console.log(numeros);

/**
 * FILTER
 */
// Es un método que toma cada elemento de un array y los filtra

// sirve para obtener un nuevo array filtrando todos los elementos del array original

/* 
    El callback recibe los mismos argumentos que el callback del metodo map
    - Un valor.
    - Un indice.
*/

console.log('');

function mayoresDe10(numero, _) {
  if (numero > 10) {
    return numero;
  }
}

const numerosMayoresDe10 = numeros.filter(mayoresDe10);
console.log(numerosMayoresDe10);

function numImpar(numero) {
  if (numero % 2 !== 0) {
    return numero;
  }
}

const numerosImpares = numeros.filter(numImpar);
console.log(numerosImpares);

//////////////////////////

console.log('');
console.log('Ejemplo FILTER');

const usuarios = [
  {
    nombre: 'Raul',
    edad: 10,
  },
  {
    nombre: 'Maria',
    edad: 16,
  },
  {
    nombre: 'Tomas',
    edad: 40,
  },
  {
    nombre: 'Tamara',
    edad: 23,
  },
  {
    nombre: 'Rosalía',
    edad: 19,
  },
];

// Vamos a filtrar el array de objetos "usuarios"
// Nos quedamos solamente con los que sean mayores de 18 años

function mayores18(usuario) {
  if (usuario.edad >= 18) {
    return usuario;
  }
}

const mayoresDeEdad = usuarios.filter(mayores18);
console.log(mayoresDeEdad);

// Una vez filtrados los usuarios mayores de edad nos quedamos con los nombres
function nombres(usuario) {
  return usuario.nombre;
}
console.log(mayoresDeEdad.map(nombres));
