"use strict";

let altura = 5; /* prompt("Altura piramide") */

console.log("otro ejercicio");
for (let i = 0; i < altura; i++) {
  let string = "";
  for (let x = altura - 1; x > i; x--) {
    string += " ";
  }
  for (let y = 0; y <= i; y++) {
    string += "*";
    if (y > 0) {
      string += "*";
    }
  }
  console.log(string);
}
