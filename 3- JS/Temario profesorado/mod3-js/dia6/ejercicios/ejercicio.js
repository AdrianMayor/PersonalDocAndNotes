/**
 * ##################
 * ## Ejercicio 1 ##
 * ##################
 *
 * Utiliza los métodos map, filter o reduce para resolver las siguientes propuestas:
 *
 *  - 1. Obtén la suma total de todas las edades de las personas.
 *  - 2. Obtén la suma total de todas las edades de las personas francesas.
 *  - 3. Obtén un array con el nombre de todas las mascotas.
 *  - 4. Obtén un array con las personas que tengan gato.
 *
 */

const persons = [
  {
    name: 'Berto',
    country: 'ES',
    age: 44,
    car: 'LU9286V',
    pet: {
      name: 'Moon',
      type: 'perro',
    },
  },
  {
    name: 'Jess',
    country: 'UK',
    age: 29,
    car: 'GB2913U',
    pet: {
      name: 'Kit',
      type: 'gato',
    },
  },
  {
    name: 'Tom',
    country: 'UK',
    age: 36,
    car: 'GB8722N',
    pet: {
      name: 'Rex',
      type: 'perro',
    },
  },
  {
    name: 'Alexandre',
    country: 'FR',
    age: 19,
    car: 'FT5386P',
    pet: {
      name: 'Aron',
      type: 'gato',
    },
  },
  {
    name: 'Rebeca',
    country: 'ES',
    age: 32,
    car: 'MD4578T',
    pet: {
      name: 'Carbón',
      type: 'gato',
    },
  },
  {
    name: 'Stefano',
    country: 'IT',
    age: 52,
    car: 'LP6572I',
    pet: {
      name: 'Bimbo',
      type: 'perro',
    },
  },
  {
    name: 'Colette',
    country: 'FR',
    age: 22,
    car: 'FU8929P',
    pet: {
      name: 'Amadeu',
      type: 'gato',
    },
  },
];

// - 1. Obtén la suma total de todas las edades de las personas.

function callbackEdades(acumulador, person) {
  return acumulador + person.age;
}

const totalEdades = persons.reduce(callbackEdades, 0); // 0 es el valor inicial del acumulador

/* const totalEdades = persons.reduce(
  (acumulador, person) => acumulador + person.age,
  0
);
 */
console.log(totalEdades);

// - 2. Obtén la suma total de todas las edades de las personas francesas.

const franceses = persons
  .filter((person) => person.country === 'FR')
  .reduce((acc, person) => acc + person.age, 0);

/* const edadesFranceses = franceses.reduce(
  (acumulador, frances) => acumulador + frances.age,
  0
);
 */
console.log(franceses);

// - 3. Obtén un array con el nombre de todas las mascotas.
const nombreMascotas = persons.map((person) => person.pet.name);

console.log(nombreMascotas);

// - 4. Obtén un array con las personas que tengan gato.
const personasConGato = persons.filter((person) => {
  if (person.pet.type === 'gato') {
    return person;
  }
});

const soloNomrbes = personasConGato.map((persona) => persona.name);

console.log(soloNomrbes);
