'use strict';

/**
 * MÉTODOS FUNCIONALES
 */

// Son métodos que utilizan callbacks
const numeros = [2, 5, 10, 20, 23];
console.log('Array original');
console.log(numeros);

/**
 * REDUCE()
 * tambien lo podemos llamar "acumular"
 */

// Reduce un array a un único valor de cualquier tipo

/* 
    El callback de redude usa 3 argumentos:

        - Acumulador.
        - Cada valor del array
        - Un indice (opcional)
*/

function calcularTotal(acc, numero) {
  return acc + numero;
}

// El método reduce recibe 2 argumentos
// - La propia funcion callback
// - Un valor inicial para el contador (si no indicamos nada, tomará)
//     (como valor inicial el primer elemento del array)

const totalNumeros = numeros.reduce(calcularTotal, 0); // NO es la posición es lo que va a valer acc (acumulador)
console.log(totalNumeros);

const media = totalNumeros / numeros.length;
console.log(media);

//////////////////////////

// Sacar un nuevo array (se puede hacer con map) pero reduce también es capaz

function acumularDobles(acumulador, numero) {
  // console.log(acumulador);

  /* acumulador.push(numero * 2);

  return acumulador; */

  return [...acumulador, numero * 2];
}

const dobles = numeros.reduce(acumularDobles, []);
console.log(dobles);

/////////////////////////

console.log('');
console.log('Ejemplo REDUCE');

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
    nombre: 'Tomas',
    edad: 23,
  },
  {
    nombre: 'Rosalía',
    edad: 19,
  },
];

function totalEdades(acc, usuario) {
  return acc + usuario.edad;
}

///// filter
function soloTomas(usuario) {
  if (usuario.nombre === 'Tomas') {
    return usuario;
  }
}
const nombreTomas = usuarios.filter(soloTomas);

console.log(nombreTomas);

///// reduce

const edades = nombreTomas.reduce(totalEdades, 0);
console.log(edades);

///// map

function soloEdades(usuario) {
  return usuario.edad;
}
const edadTomas = nombreTomas.map(soloEdades);
console.log(edadTomas);
