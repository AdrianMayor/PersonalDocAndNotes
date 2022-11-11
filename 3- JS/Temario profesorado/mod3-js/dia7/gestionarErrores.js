'use strict';

/**
 * GESTIONAR ERRORES
 */

// Para que el codigo no se bloquee cuando surge algún error

// Para ello se utilizan las sentencias try... catch... finally (opcional)...

// Siempre que un código pueda fallar, se mete dentro de un try catch

try {
  // vamos a crear un numero aleatorio, si es par lo muestra
  // si es impar lanzamos un error

  const aleatoryNum = Math.ceil(Math.random() * 10);

  if (aleatoryNum % 2 !== 0) {
    // throw new Error(`El numero ${aleatoryNum} es impar`);

    const miError = new Error(`El numero ${aleatoryNum} es impar`);
    miError.httpCode = 409;
    throw miError;
  } else {
    console.log(`El numero ${aleatoryNum} es par`);
  }
} catch (err) {
  console.error(err.message);
} finally {
  console.log('Esto se va a ejecutar se error o no');
}

console.log('Sigo ejecutando codigo');
