"use strict";

/* 
    OBJECTO EVENT
*/

const header = document.querySelector("header");
//const parrafo = document.querySelector("p");

let contador = 0;

header.addEventListener("click", (event) => {
  //console.log(event);

  // Si el usuario tiene pulado la tecla ALT
  if (event.altKey) {
    console.log("Tienes pulsada la tecla Alt");
  }

  //        TARGET -> Objetivo
  // La propiedad target selecciona de manera especifica el elemento exacto sobre el que hemos hecho click
  console.log(event.target);

  // currentTarget -> muestrael elemento sobre el cual hemo asignado el evento
  console.log(event.currentTarget);

  if (event.target.id === "btn") {
    // cambiamo el texto del parrafo por el contador + 1
    parrafo.textContent = contador++;
  }
});

const parrafo = document.createElement("p");
header.append(parrafo);
