"use strict";

let cuadrados = document.querySelectorAll("#container > div");
const prueba = document.querySelector("#container");
const boton = document.querySelector("button");

boton.addEventListener("click", () => {
  const div = document.createElement("div");
  prueba.append(div);
  cuadrados = document.querySelectorAll("#container>div");
});

function randomColor() {
  const color = Math.round(Math.random() * 255);
  return color;
}

setInterval(() => {
  for (const key of cuadrados) {
    key.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()} ,${randomColor()} )`;
  }
}, 1000);
