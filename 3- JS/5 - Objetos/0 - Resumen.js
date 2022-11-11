/* OBJETOS */

console.log("");
console.log("OBJETOS");

// Asi se declaran los objetos. Los objetos van entre llaves. Los arrays entre corchetes
const coche = {
  marca: "BMW",
  modelo: "Serie 3",
  precio: 25000,
  tipoMoneda: "€",
  colores: ["verde", "rojo", "negro"],
  motor: {
    caballos: 300,
    tipo: ["electrico", "diesel", "gasolina"],
  },
};

console.log(coche); // Imprime todo el objeto con sus propiedades y valores
console.log(coche.marca); // Imprime el valor de la propiedad indicada
console.log(coche["modelo"]); // Otra forma de seleccionar el valor de la propiedad indicada

// Modificar el valor de una propiedad del objeto
coche.marca = "Audi";
console.log(coche);

// Crear una propiedad nueva
coche.kilometros = 100000;
console.log(coche);

/* Clonar un objeto */
console.log("");
console.log("COPIA Objeto");
// SPREAD -> ... -> copia poco profunda. Va a copiar todo el objeto pero sigue manteniendo la referencia antigua los arrays y sus referencias, compartiendo espacio en la memoria, por lo que comparten esas propiedades, si se modifica en un objeto se cambia en el otro

const cocheCopia = {
  ...coche,
  // si queremos sobreescribir alguna propiedad la indicamos despues del spread operator
  precio: 10000,
};

cocheCopia.modelo = "A6";
cocheCopia.motor.caballos = 200; // Al ser una copia poco profunda, cambia no solo este valor en cocheCopia Audi, sino en coche BMW. No copia bien los objetos y arrays propiedad del objeto principal.
console.log(cocheCopia);

//
/* METOSOS IMPORTANTES CLASE OBJECT */

// KEYS -> deuelve un array con los nombres de las propiedades del objeto

const propiedades = Object.keys(coche);
console.log(propiedades); // Imprime un array con las propiedades sin valor del objeto indicado

// VALUES -> devuelve u narray con los valores de las propiedades del objeto

const valores = Object.values(coche);
console.log(valores); // Imprime un array con los valores de las propiedades del objeto indicado

// ENTRIES -> devuelve un array con cada pareja de propiedad y valor

const entries = Object.entries(coche);
console.log(entries); // Devuelve un array con los arrays de propiedad:valor del objeto indicado
