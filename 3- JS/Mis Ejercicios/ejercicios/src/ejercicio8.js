/**
 * #################
 * ## Ejercicio 5 ##
 * #################
 *
 * Utiliza lo aprendido sobre funciones para reestructurar el ejercicio de la bomba.
 * Crea la función "deactivateBomb" con los parámetros "limit" y "bombCode":
 *
 *  - limit: nº de intentos que le daremos al usuario.
 *
 *  - bombCode: código de desactivación.
 *
 */

'use strict';

/**
 *
 * parametro: limit - Número de intentos que tendrá el usuario.
 * paremetro bombCode - Código de desactivación de la bomba.
 * retorna: un Boolean (verdadero si explota, falso si no)
 */

// Creamos la funcion
function desactivateBomb(limit, bombCode) {
  for (let i = limit; i > 0; i--) {
    let password = parseInt(prompt(`Intento ${i} Dime un numero del 1 al 10`));

    if (password === bombCode) return true; // acierta la contraseña
  }

  return false; // no ha acertado la contraseña
}

// Generamos un numero aleatorio para el codigo de la bomba
const numeroRandom = Math.ceil(Math.random() * 10);

// Almacenamos el valor booleano que retorna la función en una constante.
const isDesactivated = desactivateBomb(5, numeroRandom);

// Usamos la constante para ejecutar este "if".
if (isDesactivated) {
  console.log('Enhorabuena vives un día más!');
} else {
  console.log('BOOOOOOOOOOOOOOOOOOM!');
}
