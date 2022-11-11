'use strict';

// CONVERSIONES

// Convertir un string a numero (sin decimales)
console.log(parseInt('3.2')); // parseInt()

// Convertir un string a numero (con decimales)
console.log(parseFloat('3.25')); // parseFloat()

// NaN -> Not a Number
// cuando no puede convertir el string a numero
console.log(parseInt('hoola'));

console.log(isNaN('hola')); // 'hola', va a devolver un NaN?
console.log(isNaN('3.2'));

let num = 10.2;
// Convertir de numero a string
console.log(typeof num.toString());

// OPERADORES

// % -> devuelve el resto de la division entre un numero y otro
console.log(15 % 2);

let texto = 'Un texto';

texto += ' y demás.'; // texto = texto + ' y demas';
console.log(texto);

num += 0.8; // num = num + 0.8;

console.log(num);

num -= 10; // num = num - 1;

console.log(num);

// OPERADORES LOGICOS
// Estos devuelven true o false

// AND -> &&
// devuelve true si todas las condiciones que contenga son true
console.log(10 > 5 && 'hola' === 'hola' && 3 < 1);

// OR -> ||
// devuelve true si al menos una de las condiciones es true
console.log(10 > 5 || 'hola' === 'hola' || 3 < 1);

// AND y OR
console.log(
  (10 > 5 && 'hola' === 'hola') || (20 !== 10 && 'mitexto' !== 'otrotexto')
);

// CONDICIONALES

// IF

/* 
    if (condicion) {
        // codigo que se ejecuta si la condicion es true
    }
*/

let numero = 11;
const textoConstante = 'Hola Mundo';

if (numero === 10) {
  console.log('Tu numero es 10');
}

// ELSE

if (numero === 10) {
  console.log('Tu numero es 10');
} else {
  console.log(textoConstante);
}

// ELSE IF

if (numero === 10) {
  console.log('Tu numero es 10');
} else if (numero > 10) {
  console.log('Tu numero es mayor que 10');
} else {
  console.log(textoConstante);
}

// CONDICIONAL TERCIARIO

let jugadores;
numero === 10 ? (jugadores = 10) : console.log('No hay suficientes jugadores');

numero === 10
  ? textoConstante === 'Hola Mundo'
    ? console.log('Tu numero es 10')
    : console.log(textoConstante)
  : console.log('No se cumple numero es igual a 10');

// SWITCH

let mes = '1';

switch (mes) {
  case '1':
    console.log('Enero');
    break;

  case '2':
    console.log('Febrero');
    break;

  default:
    console.log('No es un mes valido');
    break;
}
