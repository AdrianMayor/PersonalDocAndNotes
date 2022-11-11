'use strict';

// CONVERSIONES

console.log('2' + 2);

/**
 * de STRING a NUMBER
 */

// parseInt
let numeroEnTexto = '2.12';

console.log(parseInt(numeroEnTexto) + 2);

// parseFloat
console.log(parseFloat(numeroEnTexto) + 2);

// añadiendo un + antes
console.log(+'3.2' + 6); // convierte 3.2 a number

// NaN -> Not a Number

// isNaN
console.log(isNaN('hola'));

console.log(isNaN('3.2'));

/**
 * de NUMBER a STRING
 */

let numeroAString = 4.58;
console.log(typeof numeroAString);

// numeroAString = '4.58';
console.log(typeof numeroAString);

// toString()
console.log(typeof numeroAString.toString());

console.log(typeof (2.3).toString());

// JavaScript hace automáticamente conversiones
console.log(typeof ('10' - '5'));
console.log('Tengo ' + 24 + ' años');

console.log('2' + 2);
console.log(2 - '2');
console.log(2 + 2 + '2');
console.log(2 + 2 + '2' + 2);
