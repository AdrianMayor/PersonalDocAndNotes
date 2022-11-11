"use strict";

/* 
    Similares a un array || Funcionan igual que MAP
*/
const lista = new Set();

console.log(lista);

lista.add("berto");
lista.add(123);
lista.add("berto"), // Los SETS no permiten duplicados
  lista.add(["a", "b", "c"]);
lista.add(["a", "b", "c"]); // Sin embargo esto si es aceptado aunque sean valores totalmente iguales que el anterior array añadido, es otro array a ojos del SET pero con valores similares

console.log(lista);
