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
    name: "Berto",
    country: "ES",
    age: 44,
    car: "LU9286V",
    pet: {
      name: "Moon",
      type: "perro",
    },
  },
  {
    name: "Jess",
    country: "UK",
    age: 29,
    car: "GB2913U",
    pet: {
      name: "Kit",
      type: "gato",
    },
  },
  {
    name: "Tom",
    country: "UK",
    age: 36,
    car: "GB8722N",
    pet: {
      name: "Rex",
      type: "perro",
    },
  },
  {
    name: "Alexandre",
    country: "FR",
    age: 19,
    car: "FT5386P",
    pet: {
      name: "Aron",
      type: "gato",
    },
  },
  {
    name: "Rebeca",
    country: "ES",
    age: 32,
    car: "MD4578T",
    pet: {
      name: "Carbón",
      type: "gato",
    },
  },
  {
    name: "Stefano",
    country: "IT",
    age: 52,
    car: "LP6572I",
    pet: {
      name: "Bimbo",
      type: "perro",
    },
  },
  {
    name: "Colette",
    country: "FR",
    age: 22,
    car: "FU8929P",
    pet: {
      name: "Amadeu",
      type: "gato",
    },
  },
];

/////////////////////
console.log("Array Inicial");
console.log(persons);

console.log("");
console.log("1- Suma total de edades");
function sumTotalAge(acc, persons) {
  return acc + persons.age;
}
console.log(persons.reduce(sumTotalAge, 0));

/////////////////////////////////////////
/* console.log("");
console.log("1- Suma total de edades");

console.log(
  persons.reduce(function sumTotalAge(acc, persons) {
    return acc + persons.age;
  }, 0)
); */

/////////////////////
console.log("");
console.log("2- Suma total de edad de personas Francesas");
function frenchPerson(persons) {
  if (persons.country === "FR") {
    return persons;
  }
}
const frenchPersonArr = persons.filter(frenchPerson);
console.log(frenchPersonArr);
console.log(frenchPersonArr.reduce(sumTotalAge, 0));

////////////////////
console.log("");
console.log("3- Array de nombres de mascotas");

/* function getPet(persons) {
  return persons.pet; // + '' + usuario.edad;
}
const personPet = persons.map(getPet);
console.log(personPet); */

const personPet = persons.map((persons) => persons.pet.name);
console.log(personPet);

/////////////////////
console.log("");
console.log("4- Personas con Gato");

function catOwner(persons) {
  if (persons.pet.type === "gato") {
    return persons;
  }
}

const catOwners = persons.filter(catOwner);
console.log(catOwners.map((catOwners) => catOwners.name));
