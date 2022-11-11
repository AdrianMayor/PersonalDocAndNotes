'use strict';

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

const clasificacion = ['Antonio', 'Maria', 'Juan', 'Carmen', 'Julia'];
console.log(clasificacion);

// - Julia es eliminada del concurso.
clasificacion.pop();

console.log(clasificacion);

// - Detras de Maria y antes de Juan se clasifica un nuevo concursante 'Ramon'
clasificacion.splice(2, 0, 'Ramon');
console.log(clasificacion);

// - Descalifican a Antonio que iba lider hasta el momento
clasificacion.shift();
console.log(clasificacion);

// - Se clasifica un nuevo concursante que pasa a ser el primero 'Antonia'
clasificacion.unshift('Antonia');
console.log(clasificacion);

// - Al finalizar el concurso declaran que el orden va a ser el inverso, por lo que se
//  da la vuelta a toooda la clasificacion

clasificacion.reverse();

console.log(clasificacion);
