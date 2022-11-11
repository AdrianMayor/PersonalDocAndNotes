"use strict";

/* 
    EVENTO
*/

// Seleccionamos el boton

const boton = document.querySelector("button");
const boton2 = document.querySelector("button:last-of-type");
const h1 = document.querySelector("h1");
const parrafo = document.querySelector("p");
//////////////////
//      METODO ANTIGUO

// Utilizamos para cada evento su propiedad

boton.onclick = () => {
  console.log("CLIIICK");

  h1.style.color = "red";
};

boton.onmouseover = () => {
  console.log("Has pasado el raton por encima del boton");

  h1.style.color = "green";
};

////////////////////
//      METODO MODERNO

// addEvenListener(EVENTO,CALLBACK)
let contador = 0;

boton2.addEventListener("click", () => {
  console.log("Clickaso moderno");
  console.log(contador++);
});

/* ------------------ */

// Podemos añadir varios liteners

/* 
    handle -> Manejar
    evento -> el evento que tiene que manejar
    elemento -> a que elemento se le esta aplicando esa accion

    _=> handleClickBoton2

    Se llaman funciones menjadoras ya que estan a la escucha de eventos
*/
const handleClickBoton2 = () => {
  console.log("click desde funcion externa");
};

boton2.addEventListener("click", handleClickBoton2);

// Eliminar un evento
// debemos indicar el evento que queremos eliminar y la funcion que lo maneja

boton2.removeEventListener("click", handleClickBoton2);

////////////////////////////////////////

function handleMouseOverH1() {
  parrafo.textContent = "Han pasado por encima del titulo";

  parrafo.style.fontSize = "2rem";
}

function handleMouseLeaveH1() {
  parrafo.textContent = "El raton ya no esta sobre el titulo";

  parrafo.style.fontSize = "1rem";
}

h1.addEventListener("mouseover", handleMouseOverH1);

h1.addEventListener("mouseleave", handleMouseLeaveH1);
