'use strict';

/**
 * ###################
 * ### Ejercicio 1 ###
 * ###################
 *
 * Crea una funcion que recibe un array de números y devuelve uno nuevo
 * con el doble de cada número
 */

const numeros = [1, 2, 3, 4, 5];

function doble(array) {
  const dobleNumeros = array.map((item) => item * 2);

  return dobleNumeros;
}

console.log(doble(numeros));
