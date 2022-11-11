'use strict';

// JavaScript Object Notation -> Anotacion de Objetos de Javascript

// JSON es un string que representa elementos (normalmente objetos) de JS

const user = {
  id: 1,
  nombre: 'Alumno1',
  apellidos: 'Aprueba todo',
  edad: 21,
  colores: ['blanco', 'verde', 'azul'],
};

console.log(user);

// Convertir un elemento a JSON string
// JSON.stringify()

const userJSON = JSON.stringify(user);

console.log(userJSON);
console.log(typeof userJSON);

// Convertimos un JSON string a elemento de JavaScript
// JSON.parse()

const userObj = JSON.parse(userJSON);
console.log(userObj);

//////////

user.mascota = {
  nombre: 'Lufy',
  dueno: user.id,
};

const userMascota = JSON.stringify(user);

//////////////////////////////////////////////

/**
 * COPIAS PROFUNDAS
 */

console.log('');
console.log('Copias profundas');

// Paso 1 -> pasar el objeto que queremos copiar a string JSON
const copiaUserJSON = JSON.stringify(user);

// Paso 2 -> volver a combertir el string JSON a objeto
const copiaUser = JSON.parse(copiaUserJSON);

console.log(copiaUser);

copiaUser.colores[0] = 'gris';
copiaUser.mascota.nombre = 'Lupo';

console.log(copiaUser);
console.log(user);

// Se puede resumir los pasos anteriores en uno solo
const copiaProfunda = JSON.parse(JSON.stringify(user));
console.log(copiaProfunda);

/**
 * COPIA POCO PROFUNDA
 *
 *  Si que hacen una copia del objeto/array que indiquemos, pero sus
 *  propiedades/valores que sean objetos/arrays seguiran vinculadas al original
 */

console.log('');
console.log('Copia poco profunda');

const copiaUsuarioSpread = {
  ...user,
};

copiaUsuarioSpread.colores[0] = 'negro';
copiaUsuarioSpread.mascota.nombre = 'Blanca';

console.log(copiaUsuarioSpread);
console.log(user);
