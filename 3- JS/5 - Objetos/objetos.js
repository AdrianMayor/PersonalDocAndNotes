"use strict";

/* OBJETOS */

//como se declara
const objeto = {
  propiedad1: "valor1",
  propiedad2: "valor2",
  pripiedad3: "valor3",
};

// EJ

const libro = {
  titulo: "Harry Potter",
  numeroPaginas: 500,
  autor: "J.K. Rowling",
  capitulos: 12,
  tapaDura: true,
  edicion: 10,
  editorial: "Salamandra",
};

console.log(libro);
console.log("Edicion: ", libro.edicion, "del libro", libro.titulo);

const usuario = {
  email: "correo@usuario.com",
  nombre: "user01",
  mascota: {
    nombre: "Fluffy",
    edad: 6,
    animal: "perro",
    raza: {
      origen: "Belgica",
      nombre: "Pastor Belga",
    },
  },
};

console.log(usuario.mascota.raza.nombre);

// Añadir nuevas propiedades a un objeto

usuario.apellidos = "Apellidos";
usuario.male = false;

console.log(usuario.mascota.nombre.raza); // Imprime undefined. Ya que el programa busca como si estuviera esa propiedad estuviera alojada ahi. pero no definida

console.log(usuario.mascota?.nombre); // se usa ? para consultar si esa propiedad esta, y si puede acceder, en caso de que no imprime undefined, no da error.

// Modificar una propiedad

usuario.nombre = "Manolo";

////////////////////////////////////////////////////

function setModelo(objeto, modelo) {
  objeto.modelo = modelo;
}

function getModelo(objeto) {
  return objeto.modelo;
}

function setModeloMarca(objeto, modelo, marca, precio) {
  objeto.modelo = modelo;
  objeto.marca = marca;
  objeto.precio = precio;
}

function getModeloMarca(objeto) {
  return `Modelo ${objeto.modelo} es de marca ${objeto.marca} y su precio es ${objeto.precio}`;
}

// Creamos un objeto

const coche = {
  modelo: "330 xi",
};

const moto = {};

moto.colores = ["azul", "verde"];

// Coche en modelo anterior
console.log(coche);

// Coche nuevo modelo
setModelo(coche, "A6");

setModelo(moto, "Z-650");

console.log(getModelo(coche));
console.log(getModelo(moto));

/////

setModeloMarca(coche, "Clase A", "Mercedes", 30500);

console.log(getModeloMarca(coche));
