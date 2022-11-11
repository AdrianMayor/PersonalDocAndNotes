"use strict";

const puntuaciones = [
  {
    equipo: "Toros Negros",
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: "Amanecer Dorado",
    puntos: [8, 5, 2, 4, 7, 5, 3],
  },
  {
    equipo: "Águilas Plateadas",
    puntos: [5, 8, 3, 2, 5, 3],
  },
  {
    equipo: "Leones Carmesí",
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: "Rosas Azules",
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: "Mantis Verdes",
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: "Ciervos Celestes",
    puntos: [3, 5, 1, 1],
  },
  {
    equipo: "Pavos Reales Coral",
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: "Orcas Moradas",
    puntos: [2, 3, 3, 4],
  },
];

/////////////////////////////////

/* function sumPoints(acc, puntos) {
  return acc + puntos;
}

const newTotalPoints = [];
for (const key of puntuaciones) {
  const puntosTotales = key.puntos.reduce(sumPoints, 0);
  //console.log(puntosTotales);
  newTotalPoints.push([key.equipo, puntosTotales]);
}
console.log(newTotalPoints);


let max = [];
let min = [];
for (const key of newTotalPoints) {
  if (max.length === 0 || max[1] < key[1]) {
    max = [key[0], key[1]];
  }
  if (min.length === 0 || min[1] > key[1]) {
    min = [key[0], key[1]];
  }
}

console.log(
  "El equipo con mas puntos es",
  max[0],
  "con un total de ",
  max[1],
  "puntos"
);
console.log(
  "El equipo con menos puntos es",
  min[0],
  "con un total de",
  min[1],
  "puntos"
); */

//////////////////////////////////

function calcMinMax(puntuaciones) {
  let max = [];
  let min = [];
  for (const key of puntuaciones) {
    const suma = key.puntos.reduce((suma, val) => suma + val, 0);
    if (max.length === 0 || max[1] < suma) {
      max = [key.equipo, suma];
    }
    if (min.length === 0 || min[1] > suma) {
      min = [key.equipo, suma];
    }
  }
  console.log("El mejor fue: " + max[0] + "; con sus " + max[1] + " puntos");
  console.log("El peor fue: " + min[0] + "; con sus " + min[1] + " puntos");
}

calcMinMax(puntuaciones);
