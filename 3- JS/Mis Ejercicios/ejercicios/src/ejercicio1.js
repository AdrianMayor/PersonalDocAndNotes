"use strict";

/* 
    Utiliza un bucle for para crear la siguiente figura con asteriscos (*). Debe existir una
    variable que permita modificar la altura de la pirámide. Para el ejemplo expuesto a continuación
    se ha tomado como referencia una altura de 4:

    -Figura:

   *
  ***
 *****
*******

*/

// Variable que indica la altura de la piramide (las vueltas que da el bucle principal)

// Crear el bucle (for) que repita tantas veces como la altura indicada

// Creamos la variable donde vamos a concatenar los asteriscos

// Bucle para los espacios

// Bucle para los asteriscos

// Imprime la variable de la linea

// Fin bucle principal

let altura = 30; /* prompt("Altura piramide") */

console.log("otro ejercicio");
for (let i = 0; i < altura; i++) {
  let string = "";

  for (let x = altura - 1; x > i; x--) {
    string += " ";
  }

  for (let y = 0; y <= i; y++) {
    string += "*";

    if (y > 0) {
      string += "*";
    }
  }
  console.log(string);
}
