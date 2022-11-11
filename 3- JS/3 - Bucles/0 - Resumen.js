"use strict";

/* BUCLES */

// FOR

/* 
    for(contador; condicion; modificador){
        // codigo
    }
*/

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

console.log("Me ejecuto cuando termina el bucle");

for (let i = 30; i >= i; i--) {
  console.log(i);
}

// Parar un bucle -> BREAK

for (let i = 1; i < 30; i += 2) {
  if (i === 7) {
    console.log("Paramos el bucle");
    break;
    console.log("Esto no se ejecuta");
  }
  console.log(i);
}

// Saltar una vuelta del bucle -> CONTINUE

for (let i = 0; i < 30; i += 5) {
  if (i === 10) {
    console.log("Me salto un numero");
    continue;
    console.log("Esto no se ejecuta");
  }
  console.log(i);
}

// WHILE

let palabra = prompt("Dime una palabra: (stop para detener el bucle)");
let cadenaTexto = "";
while (palabra != "stop") {
  cadenaTexto += palabra + "";
  console.log(cadenaTexto);
  palabra = prompt("Dime otra palabra: (stop para detener el bucle)");
}

// DO...WHILE

do {
  console.log(
    "Esto si no se cumple la condicion, se ejecuta una vez como minimo"
  );
} while (10 < 3);
