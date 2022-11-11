"use strict";

/* 
    GESTIONAR ERRORES

        -> Se utiliza para que el codigo no se bloquee cuando surja algun error-
        -> Para ello se utilizan las sentencias TRY... CATCH... FINALLY(opcional)...

    Siempre que un codigo pueda fallar, se mete dentro de un " 'try' 'catch' "

    
    try {
      // Aqui se mete el codigo que por cualquier motivo puede fallar. Por ejemplo solicitar datos a una API
    } catch (error) {
        // Aqui se mete el codigo que se ejecutara si el codigo en el try no funciona, y no paraliza el codigo que va posteriormente
    }
*/

try {
  // Vamos a crear un numero aleatorio , si es par lo muestra. Si es impar lanzamos un error

  const aleatoryNum = Math.ceil(Math.random()) * 10;

  if (aleatoryNum % 2 !== 0) {
    /* throw new Error(`El numero ${aleatoryNum} es impar`); */

    const miError = new Error(`El numero ${aleatoryNum} es impar`);
    miError.httpCode = 409;
    throw miError;
  } else {
    console.log(`El numero ${aleatoryNum} es par`);
  }
} catch (err) {
  console.error(err.message);
} finally {
  console.log("Esto se va a ejecutar de error o no");
}

console.log("Sigo ejecutando");
