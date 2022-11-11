"use strict";

/* Bucle For */

/* 
    for(contador ; condicion ; incremento o decremento del contador){
        // codigo a ejecutar
    }
*/

for (let i = 0; i < 10; i++) {
  console.log(i);
} // imprime hasta 9 ya que al valer 10 la i ya no entra en el bucle

for (let i = 1; i <= 100; i += 10) {
  console.log(i);
} // imrpime hasta 91 porque la i pasa a 101 y ya no entra en el bucle

console.log("Yo no me ejecuto hasta que los bucles terminen");

// Break -> Para un bucle

for (let i = 0; i <= 10; i++) {
  console.log(i); // Cuenta hasta 5
  if (i === 5) {
    console.log(i);
    break;
  }
}

// Continue -> Saltar alguna vuelta del bucle

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i); // Salta el 5 ya que el continue vuelve la lectura del codigo al principio del bucle
}

// Pedimos que indique un numero de vueltas al bucle

let numeroVueltas = prompt("Cuantas veces quieres que se repita el bucle");

for (let i = 0; i <= numeroVueltas; i++) {
  console.log(i);
}
