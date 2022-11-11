"use strict";

/* PROPIEDADES */

// Son todos los datos de un objeto

const miString = "Hello World";

console.log(miString.length);

console.log(String.prototype);

/* METODOS */

// Son las funciones almacenadas en un objeto

miString.indexOf("o"); // Sabemos si es un metodo por el uso de los parentesis

Math.random(); // random() tambien es un metodo del objeto Math

const miObjeto = {
  hello: function () {
    console.log(miString);
  },
  nombre: "Usuario",
  edad: 20,
};

miObjeto.hello();

/* METODOS DE LA CLASE OBJECT */

// Object.keys() -> Devuelve las claves (propiedades) de un objeto

const claves = Object.keys(miObjeto); // Devuelve un array con las claves (propiedades) del objeto

console.log(claves);

// Object.values() -> Devuelve los valores

const values = Object.values(miObjeto);

console.log(values);

//Object.entries() -> Devuelve un array con cada pareja de propiedad y valor

const entries = Object.entries(miObjeto);
console.log(entries); // Imprime un array por cada array
