"use strict";

// La idea es que cada uno de los anuncios al clickar obre ellosabran una nueva pestaña (simulando un anuncio) y el boton cierre el anuncio

const adCon = document.querySelector("#con-bubbling");
const adSin = document.querySelector("#sin-bubbling");

//Vamos a seleccionar lo botones
const botonCon = adCon.querySelector("button");
const botonSin = adSin.querySelector("button");

// Hacemo la funcion encargada de cuando pinchemos en el anuncio, abra una pestaña con el anuncio

function handleClickAd() {
  window.open("https://google.com");
}

// Asignamos a cada article el evento de click abriendo el anuncio
adCon.addEventListener("click", handleClickAd);
adSin.addEventListener("click", handleClickAd);

// Funcion manejadora que eliminara el anuncio

// Con bubbling
function handleClickBotonCon() {
  adCon.remove();

  console.log("Hemos eliminado el article con bubbling");
}

// Sin Bubbling -> Evitamos que se propague el evento de click del boton al article
function handleClickBotonSin(e) {
  e.stopPropagation();

  adSin.remove();
  console.log("Hemos eliminado el article sin bubbling");
}

// Asignamos a los botone los eventos de click con los manejadores ( funciones)

botonCon.addEventListener("click", handleClickBotonCon);
botonSin.addEventListener("click", handleClickBotonSin);
