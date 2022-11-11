"use strict";

/* 
    MODIFICAR ELEMENTOS DEL DOM
*/

// Lo primero e seleccionar el/los elementos que queramos manipular

const titulo = document.querySelector("h1");

/* --------------------------------- */
// leer el texto contenido
console.log(titulo.textContents); // Imprime por consola el texto que contiene la etiqueta h1

/* ---------------------------------- */
// Modificamos el contenido del h1 (titulo)

//titulo.textContent = "He modificado el titulo de la pagina";

setTimeout(() => {
  titulo.textContent = "He modificado el titulo de la pagina";
}, 2000);

/* ------------------------------------ */

// Seleccionamos el subtitulo de la pagina (h2)
const subtitulo = document.querySelector("header > h2");
console.log(subtitulo);

// Agregamos una etiqueta span dentro del contenido del h2
subtitulo.textContent = "Subtitulo tiene <span> un span </span>";
// textContent introduce todo como texto, sin reconocer la etiqueta. | NO INTERPRETA LAS ETIQUETAS QUE QUERAMOS INTRODUCIR COMO CONTENIDO

/* 
    innerHTML -> INTERPRETA TODAS LAS ETIQUETAS escritas en elemento seleccionado 
*/
subtitulo.innerHTML = "Subtitulo tiene <span> un span </span>";

let nombre = "Jonas";
subtitulo.innerHTML = `
<ul>
    <li> Elemento de este JS </li>
    <li> ${nombre} </li>
</ul>
`;
/* ------------------------------------- */

// Podemos usar innerHTML para eliminar el cntenido de un elemento seleccionado
const section = document.querySelector("section");
console.log(section);

section.innerHTML = "";

/* ---------------------------------------- */

// Añadimos una imagen
section.innerHTML = `
    <img src="http://source.unsplash.com/200x400" alt "imagen" />
`;

/* ------------------------------------------- */

/* 
    uoterHTML -> hace lo mismo que innerHTML pero tambien incluye la etiqueta seleccionada, y la modifica
*/

section.outerHTML = `
<section>
    <ul>
        <li>Elemento</>
    </ul>
</section>
`;
