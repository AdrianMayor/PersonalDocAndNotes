"use strict";

/* 
    Crear un bucle que vaya de 0 - 100 incrementando de 10 en 10
*/
console.log("Ejercicio de 0 - 100");
for (let i = 0; i <= 100; i += 10) {
  console.log(i);
}

/* 
    Crear un bucle que vaya de 50 a 30 de 1 en 1, decrementando
*/
console.log("Ejercicio de 50 - 30");
for (let i = 50; i >= 30; i--) {
  console.log(i);
}

/* 
    Bucle que recorra los numeros de 0 a 10 y nos diga si el numero es par o impar
*/
console.log("Ejercicio recorrer 0 a 10 y si es par o impar");
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " es par");
  } else {
    console.log(i + " es impar");
  }
}
/* 
    Crear un bucle que pida al usuario una palabra y se muestre por pantalla, si el usuario tecle a la palabra SALIR el bucle finaliza
*/
/* console.log("Ejercicio de bucles palabra");
let word = prompt("Indica una palabra");
let phrase = "";
while (word.toUpperCase === "SALIR") {
  phrase += word + " ";
  console.log(phrase);
  word = prompt(
    'Vuelve a indicarme una palabra. Usa "salir" para cerrar el bucle'
  );
} */

/*  EJERCICIO DE PIRAMIDE . que haga un triangulo rectangulo con los numeros introducidos
    *
    **
    ***
    ****
    *****

    Y 

    1
    12
    123
    1234
    12345

*/
console.log("Ejercicio de piramide con asteriscos");
let x = "*";
for (let i = 0; i < 5; i++) {
  console.log(x);
  x += "*";
}
for (let i = 4; i > 0; i--) {
  x = x.substring(0, i);
  console.log(x);
}

console.log("Ejercicio de piramide con numeros");
let num = "";
for (let i = 1; i < 6; i++) {
  num = num + i;
  console.log(num);
}
for (let i = 4; i > 0; i--) {
  num = num.substring(0, i);
  console.log(num);
}
