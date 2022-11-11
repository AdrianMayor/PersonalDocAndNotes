/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Tenemos 3 equipos de baloncesto. Estos son los resultados de cada equipo
 * en los últimos 4 partidos:
 *
 *      - Equipo A: 35, 46, 29, 58
 *      - Equipo B: 46, 72, 26, 36
 *      - Equipo C: 38, 62, 47, 44
 *
 * Muestra por consola el equipo con la mejor media en estos cuatro partidos.
 * Debes mostrar el nombre del equipo y la media de dicho equipo.
 *
 */

// Solucion 1:

// ARRAYS
const equipoA = [35, 46, 29, 58];
const equipoB = [46, 72, 26, 36];
const equipoC = [38, 62, 47, 44];

// Voy a usar reduce() para acumular el total de puntos de cada equipo
const totalEquipoA = equipoA.reduce((acc, puntos) => {
  return acc + puntos;
}, 0);

console.log(totalEquipoA);

const totalEquipoB = equipoB.reduce((acc, puntos) => {
  return acc + puntos;
}, 0);

console.log(totalEquipoB);

const totalEquipoC = equipoC.reduce((acc, puntos) => {
  return acc + puntos;
}, 0);

console.log(totalEquipoC);

// Creamos la media de cada uno de ellos
const mediaEquipoA = totalEquipoA / equipoA.length;
const mediaEquipoB = totalEquipoB / equipoA.length;
const mediaEquipoC = totalEquipoC / equipoA.length;

// Comparamos cada media de los equipos para saber quien tiene la mayor media
if (mediaEquipoA > mediaEquipoB && mediaEquipoA > mediaEquipoC) {
  console.log(
    `EL equipo A es quien tiene mejor media con: ${mediaEquipoA} puntos`
  );
} else if (mediaEquipoB > mediaEquipoA && mediaEquipoB > mediaEquipoC) {
  console.log(
    `EL equipo B es quien tiene mejor media con: ${mediaEquipoB} puntos`
  );
} else {
  console.log(
    `EL equipo C es quien tiene mejor media con: ${mediaEquipoC} puntos`
  );
}

///////////////////////////////////////////////////////////////////////

// Solucion 2:

const puntuaciones = [
  {
    equipo: 'Equipo A',
    puntos: [35, 46, 29, 58],
  },

  {
    equipo: 'Equipo B',
    puntos: [46, 72, 26, 36],
  },

  {
    equipo: 'Equipo C',
    puntos: [38, 62, 47, 44],
  },
];

// Creo funcion para sumar los puntos de cada equipo.

function sumarPuntos(equipo) {
  const total = equipo.puntos.reduce((acc, num) => acc + num);
  return total;
}

// Creo funcion para asignar el total de puntos a cada equipo.
function añadirTotal(array) {
  const copiaPuntuaciones = array.map((equipo) => {
    return {
      equipo: equipo.equipo,
      total: sumarPuntos(equipo),
    };
  });
  return copiaPuntuaciones;
}
// ver 3 arrays modificados1
// console.log(añadirTotal(puntuaciones));

// Primero voy a ordenar los equipos de mayor a menor.

function ordenarEquipos(array) {
  const totalEquipos = añadirTotal(array);

  const totalEquiposOrdenado = totalEquipos.sort(
    (equipoA, equipoB) => equipoA.total - equipoB.total
  );

  return totalEquiposOrdenado;
}
// ver ordenados de menor a mayor.
// console.log(ordenarEquipos(puntuaciones));

// Creo una funcion que para mostrar el equipo con mejor media

function equipoMejor(array) {
  const equiposOrdenados = ordenarEquipos(array);
  const equipoMayorPuntuacion = equiposOrdenados[equiposOrdenados.length - 1];
  console.log(
    `El equipo con mayor media es ${equipoMayorPuntuacion.equipo} con ${equipoMayorPuntuacion.total} puntos`
  );
}

equipoMejor(puntuaciones);
