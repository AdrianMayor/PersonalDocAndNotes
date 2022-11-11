'use strict';

// Funciones

// Sintaxis normal
function getName(name) {
  return name;
}

// Sintaxis arrow function
const getNameArrowFunction = (name) => name; // Si no lleva llaves entiende que es un return

const getNameArrowFunction2 = (name) => {
  // normalmente hay más codigo
  return name; // Si hay llaves es obligatorio indicar el return
};

// Funciones anónimas. Se utilizan para pasar como parámetro/argumento
// a otra funcion, es decir (un callback)

/* function (name) {
    return name;
} */

const nuevoArray = array.map(function (valor) {
  return valor * 2;
});

// Sintaxis arrow function
/* (name) => {
    return name;
} */

const coches = [
  {
    modelo: '',
    precio: '',
  },
];

coches.filter((coche) => {
  if (coche.precio > 10000 && coche.precio < 20000) {
    return coche;
  }
});
