"use strict";

/**
 *  ###################
 *  ### Ejercicio 4 ###
 *  ###################
 *
 * Crea un array con la clasificación de una carrera en la que
 *
 *  Un array ['Antonio', 'Maria', 'Juan', 'Carmen', 'Julia']
 *
 *  Vamos a suponer que es el orden de la clasificacion de un evento
 *
 *  Durante el transcurso del mismo se modifican las siguientes posiciones
 *
 *  - Julia es eliminada del concurso.
 *  - Detras de Maria y antes de Juan se clasifica un nuevo concursante 'Ramon'
 *  - Descalifican a Antonio que iba lider hasta el momento
 *  - Se clasifica un nuevo concursante que pasa a ser el primero 'Antonia'
 *  - Al finalizar el concurso declaran que el orden va a ser el inverso, por lo que se
 *  da la vuelta a toooda la clasificacion
 *
 *  Imprime por pantalla el resultado de las modificaciones en el array de clasificacion.
 */

const ranking = ["Antonio", "Maria", "Juan", "Carmen", "Julia"];
console.log(ranking);

console.log("");
console.log("Julia queda eliminada");
/* ranking.splice(4); */
ranking.pop();
console.log(ranking);

console.log("");
console.log(
  'Detras de Maria y antes de Juan se clasifica un nuevo concursante "Ramon"'
);
ranking.splice(2, 0, "Ramon");
console.log(ranking);

console.log("");
console.log('Descalifican a "Antonio" que iba lider hasta el momento');
/* ranking.splice(0, 1); */
ranking.shift();
console.log(ranking);

console.log("");
console.log(
  "Se clasifica un nuevo concursante que pasa a ser el primero 'Antonia'"
);
ranking.unshift("Antonia");
console.log(ranking);

console.log("");
console.log(
  "Al finalizar el concurso declaran que el orden va a ser el inverso, por lo que se da la vuelta a toooda la clasificacion"
);
ranking.reverse();
console.log(ranking);
