"use strict";

/* CONDICIONALES */

// IF
/* 
    if (condicion){
        codigo
    }

    Si lo que esta entre parentesis es true, ejecuta lo que se encuentre entre las llaves de apertura y cierre
*/

let numA = 5;
let numB = 10;

if (true) {
  console.log("Hola Mundo!");
}

if (false) {
  console.log("Hola Mundo!");
}

// Como es false no entra en las llaves del if

//ELSE

if (5 > 10) {
  console.log("Es verdadero");
} else {
  console.log("Esto es falso");
}

// Al no cumplirse la condicion de 5 mayor que 10 ejecuta el else

// ELSE IF
if (numA >= numB) {
  console.log("El numero A es MAYOR o IGUAL al numero B");
} else if (numA === numB) {
  console.log("El numero A es IGUAL al numero B");
} else {
  console.log("El numero A es MENOR al numero B");
}

/*  SWITCH  */
// Comprobamos una condicion y entramos en una lista de casos a ejecutar, cada caso puee albergar varios casos

let animal = "perro";

switch (animal) {
  case "perro":
  case "gato":
    console.log("Tiene 4 patas");
    break;
  case "pajaro":
    console.log("Tiene 2 patas");
    break;
  case "araña":
    console.log("Tiene 8 patas");
    break;
  default:
    console.log("No se que animal tienes...");
    break;
}
