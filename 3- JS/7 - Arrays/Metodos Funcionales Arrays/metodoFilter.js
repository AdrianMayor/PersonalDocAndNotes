"use strict";

/* 
    METODOS FUNCIONALES -> (Porque utilizan funciones callbacks)
*/

const numeros = [2, 5, 10, 20, 23];
console.log("Array original");
console.log(numeros);

/* 
    FILTER -> Toma cada elemento de un array y los filtra creando un array nuevo. Sirve para obtener un nuevo array filtrando todos lo elementos del array original
*/

/* 
    El callback recibe los mismos argumentos que el callback del metodo map:
        -Un valor.
        -Un indice.
*/
console.log("");

function mayoresDe10(numero, _) {
  if (numero > 10) {
    return numero;
  }
}

const numerosMayoresDe10 = numeros.filter(mayoresDe10);
console.log(numerosMayoresDe10);
console.log(numeros);

function numerosImpares(numero) {
  if (numero & (2 !== 0)) {
    return numero;
  }
}

const numerosImpare = numeros.filter(numerosImpares);
console.log(numerosImpares);

///////////////////

console.log("");
console.log("Ejemplo FILTER");

const usuarios = [
  {
    nombre: "Raul",
    edad: 10,
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
    nombre: "Tamara",
    edad: 23,
  },
  {
    nombre: "Rosalía",
    edad: 19,
  },
];

// Vamo a filtrar el array de objetos "usuarios", nos quedamos solamente con aquellos que sean mayors de 18 años

function mayore18(usuario) {
  if (usuario.edad >= 18) {
    return usuario; // No se puede usar usuario.nombre porque no funciona para FILTER, solo con MAP
  }
}

const mayoresDeEdad = usuarios.filter(mayore18);
console.log(mayoresDeEdad); // Muestra todos lo datos de esos elementos , en este caso son los nombre y edades

function nombre(usuario) {
  return usuario.nombre;
}
console.log(mayoresDeEdad.map(nombres));

// Forma corta de las 4 lineas anteriores
console.log(mayoresDeEdad.map((usuario) => usuario.nombre)); // Usando el MAP, una vez filtradoss por FILTER nos quedamos solo con lo nombres
