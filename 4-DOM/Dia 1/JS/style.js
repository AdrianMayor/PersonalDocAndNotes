"use strict";

/* 
    Modificar el aspecto de los elementos desde JS

    El atributo 'style' nos sirve para cambiar los estilos de los elementos

    Lo ideal es dar formato desde el propio CSS y tenerlo todo en clases o formas vinculadas al CSS.
    
    Aunque en alguna ocasion podemos poner algun estilo directo al HTML
*/

const body = document.querySelector("body");
const tittle = document.querySelector("h1");
const list = document.querySelector("ul");
const parrafo = document.querySelector("main > p");

// Cambiamos el color de fondo del body
body.style.backgroundColor = "gray";
body.style.color = "white";

tittle.style.textDecoration = "underline";

/* ------------------------------------- */

// .style.cssText ->  Podemos añadir varias propiedade a la vez | Elimina/Sobreescribe todos los estilos aplicados anteriormente sobre el HTML y en el JS

tittle.style.cssText = `
color:red;
background-color: white;
`;

// Si quiero crear vario estilos lo suyo seria crear clases en CSS y aplicarselo

/* ----------------------------------------- */

// Tambien podriamos aplicar estilos usando setAttribute

list.setAttribute("style", "color:black;");

/* ---------------------------------------- */

// Ejemplo

// Funcion que retorna un numero aleatorio entre 0 y 255
function getRandom() {
  const aleatoryNum = Math.round(Math.random() * 255);

  return aleatoryNum;
}

//Variable contador iniciada en 0
let contador = 0;

// Un intervalo que cada segundo...
const intervaloBody = setInterval(() => {
  // ... cambia el contenido del parrafor por el valor del contador sumandole 1

  parrafo.innerHTML = `${contador++}`;

  // ... Cambia el estilo de color de fondo del body por un rgb en el que cada numero ale de la funcino getRandom()
  body.style.backgroundColor = `rgb(${getRandom()},${getRandom()},${getRandom()} )`;
}, 1000);

setTimeout(() => {
  clearInterval(intervaloBody);
}, 11000);
