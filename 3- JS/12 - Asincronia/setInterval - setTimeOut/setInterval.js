"use strict";

/* 
    setInterval --> Repite acciones en un intervalo de tiempo que indiquemos

    Esto lleva un callback y no tiene porque recibir un parametro. Ademas tenemos que indicar el tiempo que tarda en cada intervalo
*/

const intervalo = setInterval(() => {
  console.log("yo me ejecuto cada 2 segundos");
}, 1000);
// clearInterval() -> para parar un intervalo

setTimeout(() => {
  clearInterval(intervalo);

  console.log("He parado el intervalo");
}, 10000);

////////////////////////////////////////////////////

let contador = 0;

// Intervalo que represente los segundos asi que haremos un intervalo que repita cada 1000ms
const intervaloEnSegundos = setInterval(() => {
  if (contador > 10) {
    clearInterval(intervaloEnSegundos);
  }

  console.log(contador);

  contador++;
}, 1000);
