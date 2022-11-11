'use strict';

let nombre = 'César';
let edad = prompt('Dime tu edad:');

if (edad <= 12) {
  console.log(`A ${nombre} le corresponde el descuento infantil`);
} else if (edad <= 30) {
  console.log(`A ${nombre} le corresponde el descuento juvenil`);
} else if (edad >= 60) {
  console.log(`A ${nombre} le corresponde el descuento de jubilados`);
} else {
  console.log(`A ${nombre} no le corresponde ningún descuento`);
}
