"user strict";

/* 
   > Seleccionar elementos que ya estan en el html <

        -> document.querySelector()

*/

console.log(document); // Hace referencia a todo el documento de HMTL

console.log("document.querySelector()");

/* --------------------------------------------- */
// Seleccionar elementos

// por etiqueta
const titulo = document.querySelector("h1"); // Seleccionamos todo el elemento h1 del html
console.log(titulo);

const noExiste = document.querySelector("a");
console.log(noExiste); // Si no existe devuelve 'null'

// por clase
const parrafoMain = document.querySelector(".importante");
console.log(parrafoMain);

// por id
const subtituloMain = document.querySelector("#unico");
console.log(subtituloMain);

// por selectores complejos de CSS
const ultimoParrafo = document.querySelector("main p:last-child");
console.log(ultimoParrafo);

// Por defecto document.querySelector() devuelve solo una coincidencia, para seleccionar mas de un elemento que cumplan un mismo selector
// --> document.querySelectorAll(); Devuelve un array con todas las coincidencias

const parrafos = document.querySelectorAll("p");
console.log(parrafos);

// como es un array, podemos recorrerlo
for (const parrafo of parrafos) {
  console.log(parrafo);
}

/* ---------------------------------------------------- */
/* 
   > Seleccionar elementos que ya estan en el html <

    OTRAS MANERAS
*/
/* 
-> getElementById()

            - Solo acepta el nombre de un id sin etar sujeto a la sintaxis de CSS
            -Devuelve siempre un array
*/

console.log("");
console.log("document.getElementById()");

// Seleccionar por id
const getSubtituloMain = document.getElementById("unico");
console.log(getSubtituloMain);

/* 
-> getElementByClass()

            - Solo acepta el nombre de una clase sin etar sujeto a la sintaxis de CSS
            -Devuelve siempre un array
*/

console.log("");
console.log("getElementByClass()");

// Seleccionar elementos por su clase
const getParrafosImportantes = document.getElementsByClassName("importante");
console.log(getParrafosImportantes);

/* 
-> getElementByTagName()

            - Solo acepta el nombre de un tag sin etar sujeto a la sintaxis de CSS
            -Devuelve siempre un array
*/

console.log("");
console.log("getElementByTagName()");

// Seleccionamos elementos por etiqueta
const getTagTitulo = document.getElementsByTagName("h1");
console.log(getTagTitulo);

/* ---------------------------------------------------- */

/* 
    Seleccionar cosas a partir de lo que tenemos seleccionado
*/

// A partir del h3 (subtituloMain):

//  seleccionamos su elemento padre

console.log("");
console.log(".parentElement");

const main = subtituloMain.parentElement;
console.log(main);

// Seleccionamos el hermano anterior

console.log("");
console.log(".previousElementSibling");

const hermanoAnterior = subtituloMain.previousElementSibling;
console.log(hermanoAnterior);

// Seleccionamos el hermano siguiente

console.log("");
console.log(".nextElementSibling");

const hermanoSiguiente = subtituloMain.nextElementSibling;
console.log(hermanoSiguiente);

// Desde el main, seleccionamos su primer hijo

console.log("");
console.log(".firstElementChild");

const firstChildMain = main.firstElementChild;
console.log(firstChildMain);

// Desde el main, seleccionamos el segundo ( que es el cuarto hijo de main)

const segundoParrafo = main.querySelector(":nth-child(4)");
console.log(segundoParrafo);

// A partir del parrafo seleccionado , nos quedamos con la etiqueta span
const spanParrafo = segundoParrafo.querySelector("span");
console.log(spanParrafo);
/* 
    .children -> Seleccionamos todos los hijos
    .firstElementChild -> Seleccionamos el primer elemento hijo
    .lastElementChild -> Seleccionamos el ultimo elemento hijo
*/
