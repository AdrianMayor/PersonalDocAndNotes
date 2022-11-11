'use strict';

/**
 * Recorrer objetos
 */

/* 
    Recorremos las propiedades de un objeto

    for (const key in objeto) {
        // Codigo que se repite
    }
*/

const puntuaciones = {
  equipo1: 215,
  equipo2: 10,
  equipo3: 100,
};

// Recorremos el objeto
for (const key in puntuaciones) {
  console.log(key); // Nombre de propiedad
  console.log(puntuaciones[key]); // Valor de la propiedad
}

console.log('-------------------');
console.log(puntuaciones.equipo1);
console.log(puntuaciones['equipo1']);

// Podemos recorrer un objeto con un bucle normal
const equipos = Object.keys(puntuaciones);

console.log('--------------------');
console.log(equipos);

for (let i = 0; i < equipos.length; i++) {
  const team = equipos[i];
  console.log(i, '=', team);
  console.log(puntuaciones[team]);
}
