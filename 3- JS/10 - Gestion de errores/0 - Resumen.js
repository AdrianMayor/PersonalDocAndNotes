"use strict";

/* 
GESTION DE ERRORES

    -> Para gestionar los errores que nosotros decidamos en nuestro codigo usamos lo sbloques try... catch (finally (opcional))

*/
console.log("");
console.log("Gestion de errores");

function suma() {
  try {
    const numeroA = parseInt(prompt("Indica un primer dato para la suma: "));

    if (isNaN(numeroA)) {
      throw new Error("El primer dato debe de ser un numero");
    }

    const numeroB = parseInt(prompt("indica un segundo numero"));

    if (isNaN(numeroB)) {
      throw new Error("El segundo dato debe ser un numero");
    }

    return numeroA + numeroB;
  } catch (err) {
    console.error("Ha habido un error: ", err.message);

    // Se llama recursividad
    return suma();
  }
}

console.log(suma());
