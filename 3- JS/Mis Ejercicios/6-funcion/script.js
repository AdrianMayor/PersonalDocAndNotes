"use strict";

function secretNumber(input) {
  const pass = parseInt(Math.random() * 100).toString();
  // console.log(pass);
  for (let i = 1; i < 6; i++) {
    if (input < 0 || input > 100 || isNaN(input)) {
      alert("Numero no valido");
      i--;
    } else if (input === pass) {
      return alert("Has ganado");
    } else if (input < pass) {
      alert("Es un numero mayor");
    } else if (input > pass) {
      alert("Es un numero menor");
    }
    if (i < 5) {
      alert("Intentos restantes: " + (5 - i));
      input = prompt("Otro intento");
    } else {
      return alert("Has perdido");
    }
  }
}

const numUser = prompt("Introduce un número del 0 al 100. Tienes 5 intentos");
secretNumber(numUser);
