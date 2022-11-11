'use strict';

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
  modelo: '330 xi',
};

const moto = {};

moto.colores = ['azul', 'verde'];

// Coche en modelo anterior
console.log(coche);

// Coche nuevo modelo
setModelo(coche, 'A6');

setModelo(moto, 'Z-650');

console.log(getModelo(coche));
console.log(getModelo(moto));

/////

setModeloMarca(coche, 'Clase A', 'Mercedes', 30500);

console.log(getModeloMarca(coche));
