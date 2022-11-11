"use strict";

/* 
    .classList()

    Añadiendo/Modificando las clases de los elementos
*/

const body = document.querySelector("body");
const elementos = document.querySelectorAll("li");
/* ---------------------------------------- */

// classList.add() -> Añadir una clase
body.classList.add("light");

/* ----------------------------------------- */

// classList.remove() -> Eliminar la clase de un elemento
body.classList.remove("light");

/* ------------------------------------------ */

// classList.toggle() -> Agrega una clase si no la tiene asociada y si la tiene asociada la quita
body.classList.toggle("dark"); // Se pone
/* body.classList.toggle("dark"); // Se quita */

/* ------------------------------------------- */

// classList.contains() -> Metodo que comprueba si tiene una clase asociada | Devuelve true or false
console.log('Tiene body la clase "dark" ?', body.classList.contains("dark"));

/* ------------------------------------------ */

body.classList.add("light");

// Reemplazar una clase por otra
body.classList.replace("light", "dark");
/* ------------------------------------- */

////////////////////////////////////////////////////

console.log("Ejemplo");

console.log(elementos);

elementos[0].classList.add("grande");
elementos[0].classList.add("rojo");

elementos[7].classList.add("rojo", "importante");

elementos[7].classList.remove("rojo");

setInterval(() => {
  // console.log(elementos[4]);

  elementos[4].classList.toggle("importante");
  elementos[4].classList.toggle("grande");
  elementos[4].classList.toggle("rojo");
}, 2000);
