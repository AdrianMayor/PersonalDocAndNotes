'use strict';

/**
 * OBJETOS
 */

// Como se declararia
const objeto = {
  propiedad1: 'valor1',
  propiedad2: 'valor2',
  propiedad3: 'valor3',
};

// EJ:
const libro = {
  titulo: 'Harry Potter',
  numeroPaginas: 500,
  capitulos: 12,
  autor: 'J.K. Rowling',
  esTapaDura: true,
  edicion: 10,
  editorial: 'Salamandra',
};

console.log(libro);
console.log('Edicion', libro.edicion, 'del libro', libro.titulo);

const usuario = {
  email: 'correo@usuario.com',
  nombre: 'user01',
  mascota: {
    nombre: 'Fluffy',
    edad: 6,
    animal: 'perro',
    raza: {
      origen: 'Belgica',
      nombre: 'Pastor Belga',
    },
  },
};

console.log(usuario);

console.log(usuario.mascota.raza.nombre);

// Añadir nuevas propiedades a un objeto
usuario.apellidos = 'Apellidos';

console.log(usuario.mascota.nombre.raza?.hola);

console.log(usuario.mascota?.nombre);

// Modificar una propiedad
usuario.nombre = 'Manolo';

console.log(usuario.nombre);
