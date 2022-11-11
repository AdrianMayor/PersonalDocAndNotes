/* 
    Destructuring

        -> Se puede aplicar a arrays
*/

const valores = ["hola", 23, "adios"];

const [saludo, , despedida] = valores;

console.log(saludo);
console.log(despedida);

console.log("");
console.log("Destructuring arrays");

const valores2 = ["hola", 23, "adios"];

const [saludo2, ...rest] = valores2;

console.log(rest);

// Se puede aplicar a objetos

const coche = {
  modelo: "A6",
  marca: "audi",
  precio: 12000,
  colores: ["blanco", "negro"],
};

console.log("");
console.log("destructuring objetos");

const { marca, modelo, colores } = coche;
const { color1, color2 } = coche.colores;

console.log(marca);
console.log(modelo);
console.log(color2);

const { precio2, ...resto } = coche;

console.log(precio2);
console.log(resto);
