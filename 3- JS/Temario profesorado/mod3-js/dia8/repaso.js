'use strict';

/**
 * FIND()
 *
 *  es un metodo de array que recibe una funcion como argumento (callback)
 * busca en el array lo que indiques
 */

const usuarios = [
  {
    id: 1,
    nombre: 'Manuel',
    apellidos: 'Sanchez',
    edad: 20,
  },
  {
    id: 2,
    nombre: 'Maria',
    apellidos: 'Sanchez',
    edad: 29,
  },
  {
    id: 3,
    nombre: 'Joselito',
    apellidos: 'Sanchez',
    edad: 10,
  },
  {
    id: 4,
    nombre: 'Raquel',
    apellidos: 'Sanchez',
    edad: 50,
  },
];

const raquel = usuarios.find(
  (usuario) => usuario.id === 4 && usuario.nombre === 'Raquel'
);

console.log(raquel);

/**
 * Destructuring
 */
console.log('');
console.log('Destructuring Arrays');
// Se puede aplicar a arrays

const valores = ['hola', 23, 'adios'];

const [saludo, , despedida] = valores;

console.log(saludo);
console.log(despedida);

const valores2 = ['hola', 23, 'adios'];

const [saludo2, ...rest] = valores2;

console.log(rest);

// Se puede aplicar a Objetos

const coche = {
  modelo: 'A6',
  marca: 'Audi',
  precio: 12000,
  colores: ['blanco', 'negro'],
};

console.log('');
console.log('Destructuring Objetos');

const { marca, colores, modelo, precio } = coche;

console.log(marca);
console.log(modelo);

const coche2 = {
  modelo2: 'A6',
  marca2: 'Audi',
  precio2: 12000,
  colores2: ['blanco', 'negro'],
};

const { precio2, ...resto } = coche2;

console.log(precio2);
console.log(resto);

const [color1, color2] = resto.colores2;
console.log(color1);
console.log(resto.colores2[0]);

// Podemos recorrer un array de objetos y destructurar cada uno de ellos
for (const usuario of usuarios) {
  const { nombre, apellidos } = usuario;

  console.log(`${nombre} ${apellidos}`);
}

////////////////////////////

console.log('');
console.log('Gestion de errores');

/**
 * GESTION DE ERRORES
 */

// Para gestionar los errores que nosotros decidamos en nuestro codigo
// usamos los bloques try... catch (finally (opcional))

function suma() {
  try {
    const numeroA = parseInt(prompt('Indica un primer numero para la suma:'));

    if (isNaN(numeroA)) {
      /* throw new Error(); */
      const miError = new Error('El primer dato debe de ser un numero.');
      throw miError;
    }

    const numeroB = parseInt(prompt('Indica un segundo numero:'));

    if (isNaN(numeroB)) {
      throw new Error('El segundo dato debe ser un numero.');
    }

    return numeroA + numeroB;
  } catch (error) {
    console.error('Ha habido un error:', error.message);

    // Se llama recursividad
    return suma();
  }
}

console.log(suma());

//////////////////////////////////

/* let dni = prompt

function comprobarDNI(dni) {
    try {

        if (no es un string de 10 caracteres) {
            lanzo error
        }

        if (separando el string usando un guion (-) como referencia obtenemos 2 partes?){
            lanza error
        }

        if (parte1 long !== 8) {
            lanza error
        }

    } catch(e) {
        // capturo error
    }
}

comprobarDNI(dni) */
