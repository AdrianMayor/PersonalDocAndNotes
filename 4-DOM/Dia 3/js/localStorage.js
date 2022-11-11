"use strict";

/* 
    LOCAL STORAGE

    //// Almacena la informacion en el propio navegador
*/

const button = document.querySelector("button");

// GUARDAR DATOS
//// -> Hay que indicar una clave y un valor. Si la clave no exite se añade.

localStorage.setItem("prueba", "esto se guarda en el local storage");

function handleClickButton() {
  const numeroAleatorio = Math.round(Math.random() * 10);

  localStorage.setItem("numero", numeroAleatorio);
}

button.addEventListener("click", handleClickButton);

/* -------------------------------- */

// El valor que añadimos al localStorage debe ser siempre un string

const usuarios = [
  {
    nombre: "usuario1",
    email: "ejemplo1@gmail.com",
  },
  {
    nombre: "usuario2",
    email: "ejemplo2@gmail.com",
  },
  {
    nombre: "usuario3",
    email: "ejemplo3@gmail.com",
  },
  {
    nombre: "usuario4",
    email: "ejemplo4@gmail.com",
  },
];

// Para añadir este array de objetos debemos convertirlo a JSON string
localStorage.setItem("usuario", JSON.stringify(usuarios));

/* ------------------------------------ */

// RECUPERAR DATOS DEL LOCAL STORAGE
//// Recuperamos el valor del localStorage pero es un string de JSON

// Como es un string JSON lo parseamos a JSON
const usuariosJON = JSON.parse(localStorage.getItem("usuario"));
console.log(usuariosJON);
