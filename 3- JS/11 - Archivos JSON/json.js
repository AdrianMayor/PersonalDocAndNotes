"use strict";

/* 
    JSON -> JavaScript Object Notation -> Anotacion de Objeto de Javascript

    -> JSON - Es un string que representa elementos (normalmente objetos) de JS
*/

const user = {
  id: 1,
  nombre: "Alumno1",
  apellidos: "Aprueba todo",
  edad: 21,
  colores: ["blanco", "verde", "azul"],
};

console.log(user);

// Convertir un elemento a JSON string --> JSON.stringify()

const userJSON = JSON.stringify(user);

console.log(userJSON);

// JSON.parse() --> Convertimos un JSON string a un elemento de JavaScript

const userObj = JSON.parse(userJSON);
console.log(userObj);

//////////////////////////////////

/* user.mascota = {
    nombre:'Lufy',
    dueno:user,
};

JSON no permite que que una propiedad se referencie a si misma "user"

const userMascota = JSON.stringify(user); */

user.mascota = {
  nombre: "Lufy",
  dueno: user.id,
};

const userMascota = JSON.stringify(user);

/////////////////////////////////////////////
/* 


    COPIAS PROFUNDAS

*/

console.log("");
console.log("Copias profundas");

// Paso 1 -> pasar el objeto que queremos copiar a un string JSON
const copiaUserJSON = JSON.stringify(user);

// Paso -> volver a convertir el string JSON a objeto
const copiaUser = JSON.parse(copiaUserJSON);

console.log(copiaUser);

copiaUser.colores[0] = "gris";
copiaUser.colores.mascota.nombre = "lupo";

// Se puede resumir los pasos anteriores en uno solo | Forma optima
const copiaProfunda = JSON.parse(JSON.stringify(user));
