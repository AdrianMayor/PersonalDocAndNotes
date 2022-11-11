"use strict";

/* const user1 = {
  name: "Berto",
  surname: "Yañez",
  age: 45,
  isAdult: function () {
    return this.age > 18;
  },
  greet: function () {
    return `Hola me llamo ${this.name} y tengo ${this.age} años`;
  },
};

const user2 = {
  name: "Ana",
  surname: "Garcia",
  age: 17,
  isAdult: function () {
    return this.age > 18;
  },
  greet: function () {
    return `Hola me llamo ${this.name} y tengo ${this.age} años`;
  },
};

console.log(user1.greet());
console.log(user2.greet()); */

/////////////////////////////////////////////////////////

/* class User {
  greet() {
    return "ola ola";
  }
}

const user1 = new User();
const user2 = new User();

console.log(user1.greet());
console.log(user2.greet());
 */

////////////////////////////////////////////////////////

// Template para crear usuarios
// La Sintaxis de las clases no lleva comas para separar elementos

/* class User {
  constructor() {
    this.name = "Berto";
    this.age = "45";
  }

  greet() {
    return `Hello my name is ${this.name}`;
  }

  isAdult() {
    return this.age > 18;
  }
}

const user1 = new User();
const user2 = new User(); // Tal y como esta ahora mismo montado no es escalable, ya que las propiedades del constructor son la mismas

console.log(user1); // Imprime: User{name:'Berto', age:45}
console.log(user1.greet());
console.log(user1.isAdult); */

//////////////////////////////////////////////////////////

/* class User {
  constructor(username, userage) {
    this.name = username;
    this.age = userage;
  }

  greet() {
    return `Hello my name is ${this.name}`;
  }

  isAdult() {
    return this.age > 18;
  }

  bigGreet() {
    return `${this.greet()} and my age is ${this.age}`;
  }
}

const user1 = new User("Berto", 45);
console.log(user1.greet());
console.log(user1.bigGreet());
console.log(user1.isAdult());

const user2 = new User("Maria", 15);
console.log(user2.greet());
console.log(user2.bigGreet());
console.log(user2.isAdult());

const user3 = new User("Mateo", 16);
console.log(user3.greet());
console.log(user3.bigGreet());
console.log(user3.isAdult()); */

////////////////////////////////////////////////////////////////////////////

// SET y GET

class User {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  /* completeName() {
    return this.name + "" + this.surname;
  } */

  get fullName() {
    return this.name + " " + this.surname;
  }

  set age(age) {
    if (age < 18) {
      throw new Error(`El usuario no puede ser menor de edad`);
    }
    this._age = age; // this.age = age; estalla porque el set se llama cuando se modifica alguna porpiedad, y aqui se esta modificando su propia propiedad, por eso internamente se usa la '_'
  }

  get age() {
    return this._age;
  }
}

const user1 = new User("Berto", "Yañez", 30);
console.log(user1);
/* console.log(user1.completeName()); */
console.log(user1.fullName);

/////////////////////////////////////////////

// HERENCIA

class Person {
  constructor(name) {
    this.name = name;
    this.sleeping = false;
  }

  sleep() {
    this.sleeping = true;
    console.log(`${this.name} empieza a dormir`);
  }

  wakeup() {
    this.sleeping = false;
    console.log(`${this.name} se despierta`);
  }
}

class Student extends Person {
  constructor(name, bootcamp) {
    super(name); // Para que pueda llamar a los constructores de la clase padre se usa "super"
    this.bootcamp = bootcamp;
  }
  study() {
    console.log(
      `${this.name} empieza a estudiar para el bootcamp ${this.bootcamp}`
    );
  }

  wakeup() {
    super.wakeup();
    this.study();
  }
}

const berto = new Person("Berto");
berto.sleep();
console.log(berto.sleeping);
berto.wakeup();
console.log(berto.sleeping);

const marta = new Student("Marta", "JSB12CO");
marta.sleep(); // Metodo de la clase Person
marta.wakeup(); // Metodo de la clase Peron
marta.study(); // Metodo de la clae Student

/* berto.study(); // Berto no existe en la clase Person, por tanto da error
 */
////////////////////////////////////

/* 
    METODOS Y PROPIEDADES ESTATICAS
*/

class Book {
  static store = "Mi libreria";
  static description = "Esta clase define un libro";

  static compareRelase() {
    console.log("test");
  }

  static available(book) {
    console.log(book.name);
    if (book.units > 0) {
      console.log("Hay existencias");
    } else {
      console.log("No quedan exitencias");
    }
  }

  constructor(name, release, units) {
    this.name = name;
    this.release = release;
    this.units = units;
  }

  sell() {
    if (this.units > 0) {
      console.log(`Vendida una unidad de ${this.name} y quedan ${this.units}`);
      this.units = this.units - 1;
    }
  }
}

const book1 = new Book("JavaScript Guide", new Date(2021, 1), 4);
const book2 = new Book("Learning HTML", new Date(2010, 5), 0);

Book.available(book1);

console.log(book1.store); // Imprime undefined , por que no estan asociadas a las instancias u objetos derivados, de la clase sino a la propia clase
console.log(Book.store);
console.log(Book.description);

book1.sell();

/* book1.compareRelase(); // Undefined */
Book.compareRelase(); // Funciona
