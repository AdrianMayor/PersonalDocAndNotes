"use strict";

function isAdult(object) {
  for (const key in object) {
    if (object[key] >= 18) {
      console.log(key, "Es mayor de edad");
    } else {
      console.log(key, "Es menor de edad");
    }
  }
}

const people = {
  Maria: 20,
  Ana: 14,
  Luis: 16,
  Pepe: 35,
  Manuel: 50,
  Teresa: 12,
  Daniel: 27,
  Irene: 23,
  Alex: 10,
};

isAdult(people);
