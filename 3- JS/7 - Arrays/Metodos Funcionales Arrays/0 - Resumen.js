"use strict";

const vehiculos = [
  {
    tipo: "coche",
    marca: "BMW",
    modelo: "Serie 3",
    caballos: 200,
    valoracion: 3,
  },
  {
    tipo: "moto",
    marca: "Kawasaki",
    modelo: "Z-650",
    caballos: 67,
    valoracion: 3,
  },
  {
    tipo: "coche",
    marca: "Mercedes",
    modelo: "Clase A",
    caballos: 250,
    valoracion: 2,
  },
  {
    tipo: "coche",
    marca: "BMW",
    modelo: "M2",
    caballos: 400,
    valoracion: 5,
  },
  {
    tipo: "moto",
    marca: "Ducati",
    modelo: "Panigale V4",
    caballos: 180,
    valoracion: 1,
  },
  {
    tipo: "coche",
    marca: "Audi",
    modelo: "A1",
    caballos: 110,
    valoracion: 1,
  },
];

/* 
    MAP()  
    -> Crea un nuevo array modificando cada uno de los elementos (segun el callback) del array al que aplicamos map
*/

//  1º Forma de hacerlo
//  -> Con funcion anonima en flecha y callback
const marcas = vehiculos.map((key) => key.marca);
console.log(marcas);

//////////////

// 2º Forma de hacerlo (mas larga sin ARROW)
//  -> Creamos el callback
function callbakcMArcas(vehiculo) {
  return vehiculo.marca;
}

// Creamos la variable que va a albergar el resultado de aplicar map() al array vehiculos
const marcas2 = vehiculos.map(callbakcMArcas);

console.log(marcas2);
/* 





*/
/* 
    FILTER() 
    -> Devuelve un nuevo array filtrado con las condiciones indicadas en el callback
*/

// 1º Forma de hacerlo
// -> Con funcion anonima y en flecha (arrow function)

const vehiculosPotentes = vehiculos
  .filter((item) => {
    if (item.caballos > 100) {
      return item;
    }
  })
  .map((item) => item.caballos)
  .sort((a, b) => a - b);

console.log(vehiculosPotentes);

///////////////////////

// 2º Forma de hacerlo (mas larga sin ARROW)
//  -> Creamos el callback

function callbackCaballos(vehiculo) {
  if (vehiculo.caballos > 100) {
    return vehiculo;
  }
}

const vehiculosPotentes2 = vehiculos.filter(callbackCaballos);

console.log(vehiculosPotentes2);

// Ordenamos los vehiculos de BMW segun sus caballos
console.log(
  "Lista de coches potentes ordenada",
  vehiculosPotentes2.sort((a, b) => a.caballos - b.caballos)
);
/* 
s






*/
/* 
    REDUCE()
    -> Devuelve un unico valor a partir de un array
*/

// 1º Forma de hacerlo
// -> Con funcion anonima y en flecha (arrow function)

const totalValoraciones = vehiculos.reduce((acc, valor) => {
  return acc + valor.valoracion;
}, 0); // Despues de la coma va el valor inicial del acumulador

console.log(
  "La media de las valoraciones es: ",
  totalValoraciones / vehiculos.length
);

////////////////////////////////

// 2º Forma de hacerlo (mas larga sin ARROW)
//  -> Creamos el callback

function callbackValoraciones(acc, item) {
  return acc + item.valoracion;
}

const totalValoraciones2 = vehiculos.reduce(callbackValoraciones, 0);

console.log(totalValoraciones2);
/* 





*/

/* 
    SORT()
    -> Ordena arrays, esta pensado para elementos tipo string. Por lo tanto para los numeros tenemos que aplicarle un callback
*/

const numeros = [10, 3, 1, 7, 20];
const palabras = ["blanco", "azul", "violeta", "negro"];

console.log(palabras.sort());
console.log(numeros.sort());

const numerosOrdenados = numeros.sort((a, b) => a - b);

console.log(numerosOrdenados);

/* 
    FIND();

        -> Es un metodo de array que reibe una funcion como argumento (callback), busca en el array lo que indiques y devuelve el primer resultado
*/

const usuarios = [
  {
    id: 1,
    nombre: "Manuel",
    apellidos: "Sanchez",
    edad: 20,
  },
  {
    id: 2,
    nombre: "Maria",
    apellidos: "Sanchez",
    edad: 29,
  },
  {
    id: 3,
    nombre: "Joselito",
    apellidos: "Sanchez",
    edad: 10,
    notas: [6, 10, 2, 5],
  },
  {
    id: 4,
    apellidos: "Sanchez",
    nombre: "Raquel",
    edad: 50,
  },
];

const raquel = usuarios.find(
  (usuario) => usuario.id === 4 && usuario.nombre === "Raquel"
);

console.log(raquel);
