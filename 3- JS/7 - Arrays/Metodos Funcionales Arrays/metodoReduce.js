"use strict";

/* 
    METODOS FUNCIONALES -> (Porque utilizan funciones callbacks)
*/

const numeros = [2, 5, 10, 20, 23];
console.log("Array original");
console.log(numeros);

/* 
    REDUCE -> Mas potente de los tres vistos, ya que puede hacer tanto lo que hace MAP y FILTER

        -Tambien lo podemos llamar como "acumular"

    Reduce un array a un unico valor de cualquier tipo. 
*/

/* 
    El callback de REDUCE usa 3 argumentos:

        -Acumulador (contador)
        -Cada valor del array
        -Un indice(opcional)

        function nombre (acc, currentValue, index){

        }
*/

function calcularTotal(acc, numero) {
  return acc + numero;
}

// El metodo reduce recibe 2 argumentos:
// -La propia funcion callback
// -Un valor inicial para el contador(si no indicamos nada, tomara como valor inicial el primer elemento del array)

const totalNumeros = numeros.reduce(calcularTotal, 0); // El 0 representa el valor que le daremos de antemano al acumulador

console.log(totalNumeros);

const media = totalNumeros / numeros.length;
console.log(media);

//////////////////////////////////

// Sacar un nuevo array (se suele y se puede hacer con MAP) pero REDUCE tambien es capaz || PREGUNTA DE PRUEBA JUNIOR

console.log("");
console.log("PREGUNTA PRUEBA JUNIOR");
function acumularDobles(acumulador, numero) {
  /*   acumulador.push(numero * 2);
  return acumulador; */

  return [...acumulador, numero * 2];
}

const dobles = numeros.reduce(acumularDobles, []);

console.log(dobles);

////////////////////////////////////

console.log("");
console.log("Ejemplo REDUCE");

const usuarios = [
  {
    nombre: "Raul",
    edad: 29,
  },
  {
    nombre: "Maria",
    edad: 16,
  },
  {
    nombre: "Tomas",
    edad: 40,
  },
  {
    nombre: "Tomas",
    edad: 23,
  },
  {
    nombre: "Rosalía",
    edad: 19,
  },
];

function totalEdades(acc, usuario) {
  return acc + usuario.edad;
}

const edades = usuarios.reduce(totalEdades, 0);
console.log(edades);
