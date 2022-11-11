"use strict";

/* Recorrer objetos */

/* 
    Recorremos las propiedades de un objeto

    for (const key in objeto){
        // Codigo que se repite
    }
*/

const puntuaciones = {
  equipo1: 215,
  equipo2: 10,
  equipo3: 100,
};

for (const key in puntuaciones) {
  console.log(key); // imprime el nombre de las propiedades de puntuaciones
  console.log(puntuaciones[key]); // imprime el valor de las propiedades
}

console.log("---------");
console.log(puntuaciones.equipo1);
console.log(puntuaciones["equipo1"]);

// podemos recorrer un objeto con un bucle normal | Mucho mas enrevesado

const equipos = Object.keys(puntuaciones); // Recprr y devuelve las keys de un objeto (equipo1, equipo2, equipo33)
console.log(Object.entries(puntuaciones)); // Recorre y devuelve los valores de las keys de un objeto (215, 10, 100)

console.log("------------");
console.log(equipos);

for (let i = 0; i < equipos.length; i++) {
  const team = equipos[i];
  console.log(i, team);
  console.log(puntuaciones[team]);
}

// Borrar las keys de un objeto

for (const key of puntuaciones) {
  delete puntuaciones[key];
}
