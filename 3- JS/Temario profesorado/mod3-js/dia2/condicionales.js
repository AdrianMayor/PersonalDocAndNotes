'use strict';

/**
 * CONDICIONALES
 */

// IF
/**
 *  if (condicion) {
 *      // codigo
 *  }
 */

let numeroA = 10;
let numeroB = 10;

// Si lo que está entre paréntesis es true, ejecuta lo que se encuentre entre las llaves de apertura y cierre
if (true) {
  console.log('Hola Mundo!');
}

// ELSE

if (5 > 10) {
  // codigo
  console.log('es verdadero');
} else {
  // codigo
  console.log('es falso');
}

// ELSE IF
if (numeroA > numeroB) {
  console.log('El numero A es MAYOR al numero B');
} else if (numeroA === numeroB) {
  console.log('El numero A es IGUAL al numero B');
} else {
  console.log('El numero A es MENOR al numero B');
}

// ejemplo hora
let hora = 2;

if (hora >= 6 && hora < 13) {
  console.log('Buenos días');
} else if (hora >= 13 && hora < 21) {
  console.log('Buenas tardes');
} else if (hora >= 21 && hora < 24) {
  console.log('Buenas noches');
} else {
  console.log('Vete a dormir anda...');
}

/**
 * SWITCH
 */

let animal = 'pez';

switch (animal) {
  case 'perro':
  case 'gato':
    console.log('Tiene 4 patas');
    break;
  case 'pajaro':
    console.log('Tiene 2 patas');
    break;
  case 'araña':
    console.log('Tiene 8 patas');
    break;
  default:
    console.log('No se que animal tienes...');
    break;
}

let mes = '2';
let nombreMes = '';

switch (mes) {
  case '1':
    nombreMes = 'Enero';
    break;

  case '2':
    nombreMes = 'Febrero';
    break;

  /* ... */
  default:
    console.log('El mes es erroneo');
    break;
}

console.log(nombreMes);

/**
 *  switch (variable) {
 *      case valor:
 *          // codigo;
 *          break;
 *
 *      default:
 *          // codigo;
 *          break;
 *  }
 *
 */

/* 
    Vamos a usar 3 variables:
        - 2 de ellas para guardar numeros
        - la otra para un operador (string) (suma, resta, multiplicacion, division, resto)

    Hagamos un condicional, segun qué operador se indique, que muestre por consola
    el resultado de operar los dos numeros.
*/

// Creamos las variables para los numeros
let numA = 5;
let numB = 10;

// Creamos la variable para el operador (tipo string)
let operador = '+';

// Condicional (if..), si el operador es una suma
// else if el operador es una resta
// else if el operador es multiplicacion...

if (operador === '+') {
  console.log(numA + numB);
} else if (operador === '-') {
  console.log(numA - numB);
} else if (operador === '*') {
  console.log(numA * numB);
} else if (operador === '/') {
  console.log(numA / numB);
} else if (operador === '%') {
  console.log(numA % numB);
} else {
  console.log('Que cojoneh has puesto');
}
