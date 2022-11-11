"use strict";

/* 
    El Bubbling propaga lo eventos ( que conicidan r) de hijos a padres
*/

////////////

// Con bubbling

const ulCon = document.querySelector("ul#con-bubbling");
console.log(ulCon);

const allLiCon = document.querySelectorAll("ul#con-bubbling li");
console.log(allLiCon);

// Vamos a crear las funciones manejadoras de los eventos click tanto del ul como los li

function handleClickUlCon() {
  console.log("has hecho click sobre el UL");
}

function handleClickAllLiCon() {
  console.log("Has hecho click sobre un Li");
}

// Asignamos los eventos de click

// Como los li estan en un array tenemos que recorrerlo para asignarle el evento a cada li

for (const li of allLiCon) {
  li.addEventListener("click", handleClickAllLiCon);
}

ulCon.addEventListener("click", handleClickUlCon);

/* ------------------------ */
////////

// SIN Boobling

const ulSin = document.querySelector("ul#sin-bubbling");
console.log(ulSin);

const allLiSin = ulSin.querySelectorAll("li");
console.log(allLiSin);

// Creamos las funciones manejadoras

function handleClickUlSin() {
  console.log("Ha hecho click sobre el UL sin Bubbling");
}

function handleClickAllLiSin(event) {
  // Evitamos que al hacer click obre el li el evento se propaque a sus padres
  event.stopPropagation();

  console.log("Has hecho click sobre el LI sin Bubbling");
}

// Asignamo las funciones manejadoras a los eventos

for (const li of allLiSin) {
  li.addEventListener("click", handleClickAllLiSin);
}

ulSin.addEventListener("click", handleClickUlSin);
