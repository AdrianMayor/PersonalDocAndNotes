"use strict";

const catalogo = [
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
];

/* let halfPizza = [];

console.log(halfPizza); */

/* for (let i = 0; i < catalogo.length; i++) {
  const hal1 = catalogo[i];
  for (let x = 0; x < i; x++) {
    const hal2 = catalogo[x];
    console.log(hal1 + " y " + hal2);
  }
} */

function combine(catalogo) {
  for (let i = 0; i < catalogo.length; i++) {
    const half1 = catalogo[i];
    for (let x = i + 1; x < catalogo.length; x++) {
      /* if (i !== x) { */
      const half2 = catalogo[x];
      console.log(half1 + " y " + half2);
      /* } */
    }
  }
}

combine(catalogo);
