"use strict";

/* 
    URL

    Es un objeto que nos da varias propiedades utiles para editar las URL

*/

// Crear una nueva URL

const url = new URL(
  "https://anapioficeandfire.com/api/characters/?gender=female&culture=Braavosi"
);

console.log(url.href); // Enlace entero

console.log(url.protocol); // El protocolo

console.log(url.hostname); // El nombre del servidor

console.log(url.pathname); // Ruta en la que estamos dentro del servidor

//////////////////////////////////////

/* 
    Search Params

     -> Son los que comienzan a partir de la interrogacion en la url

    ?gender=female&culture=Braavosi
 */

console.log(url.search);

// searchParams develve un objeto del tipo searchParams
console.log(url.searchParams);

const params = url.searchParams;

// Es iterable, lo que quiere decir que lo podemos recorrer
for (const elemento of params) {
  console.log(elemento);
}

// URL SEARCH PARAMS

// Leer valores
console.log(params.get("gender"));

// Añadir otro search/entrada
params.append("name", "Bellegere Otherys");

console.log(params.get("name"));

// Convertir a string
console.log(params.toString());

// Borrar una entrada / search
params.delete("culture");

console.log(params.toString());
