'use strict';

/* 
    setInterval
        repite acciones en un intervalo de tiempo que indiquemos

    Esto lleva un callback y este no tiene por qué recibir un parámetro
    Además tenemos que indicar el tiempo que tarda en cada intervalo
*/

const intervalo = setInterval(() => {
  // console.log('Yo me ejecuto cada 2 segundos');
}, 1000); // el tiempo va en milisegundos

// clearInterval() -> para un intervalo;

setTimeout(() => {
  clearInterval(intervalo);

  console.log('He parado el intervalo');
}, 10000);

///////////////////

let contador = 0;

const intervaloEnSegundos = setInterval(() => {
  if (contador >= 10) {
    clearInterval(intervaloEnSegundos);
  }

  console.log(contador);

  contador++;
}, 1000); // quiero que represente los segundos asi que haremos un intervalo que se repita cada 1000ms
