"use sctrict";

/* 
    Creando y modificando atributos de los elementos
*/

// Seleccionamos el boton y bdy || Es buena praxis seleccionar todo lo necesario al principio para mantener un orden
const body = document.querySelector("body");
const ul = document.querySelector(".miClase");
const boton = document.querySelector("button");
console.log(boton);

/* --------------------------------------- */

// .setAttribute -> Añadir o modificar atributos
boton.setAttribute("disabled", true);

// Modificamos la clase (cambia la clase) || No es la forma correcta de modificar clases
boton.setAttribute("class", "btn");

boton.setAttribute("id", "botonUnico");

boton.setAttribute("lang", "es");

/* ----------------------------------------- */

// .getAttribute -> Obtenemos el valor de un atributo ||Si no tiene ese atributo, devuelve 'null'
console.log(
  "Que valor tiene el atributo lang en body?",
  body.getAttribute("lang")
);

// Si el atributo lang es 'es' lo cambiamos a 'en'
if (body.getAttribute("lang") === "es") {
  body.setAttribute("lang", "en");
}

/* ----------------------------------------- */

// .hasAttribute -> Comprobar si un elemento tiene un atributo
console.log("Tiene body el atributo class?", body.hasAttribute("class"));

if (body.hasAttribute("class")) {
  body.setAttribute("class", "darkMode");
}

/* -------------------------------------------- */

// .removeAttribute -> Eliminar un atributo

ul.removeAttribute("class");
