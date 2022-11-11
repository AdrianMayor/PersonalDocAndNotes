'use strict';

/**
 * ###################
 * ### Ejercicio 2 ###
 * ###################
 *
 * Crea un array con el valor [3, 4, 13, 5, 6, 8] y muestra por consola qué números
 * son pares y qué números son impares
 *
 * EXTRA: Haz lo mismo pero ahora indica cuales son primos y cuales no
 */

const numeros = [3, 4, 13, 5, 6, 8];

function esPrimo(numero) {
  for (let i = 2; i <= numero / 2; i++) {
    if (numero % i === 0) {
      return 'NO es primo';
    }
  }

  return 'El numero es PRIMO';
}

for (const numero of numeros) {
  if (numero % 2 === 0) {
    console.log(`El numero ${numero} es PAR`);
  } else {
    console.log(`El numero ${numero} es IMPAR`);
  }

  console.log(esPrimo(numero));
}
