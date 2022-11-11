const priceList = new Map();

console.log(priceList);

// Introducir datos en el map
priceList.set("Tomates", 2);
priceList.set("Manzanas", 1.5);
priceList.set("Naranjas", 1.37);
/* priceList.set([], "Borrame"); -> Se puede introducir cualquier tipo de dato*/

console.log("");

console.log(priceList);

// Extraer datos del map
console.log("");

console.log(priceList.get("Tomates")); // Extrae el valor de la key 'Tomates'

console.log("");

console.log(priceList.has("Tomates")); // Comprueba si el map tiene la key 'Tomates' y devuelve true or false

// Comprobar si existen datos en el map
console.log("");
const fruit = "Manzanas";

if (priceList.has(fruit)) {
  console.log("Las manzanas cuestan", priceList.get(fruit), "€");
} else {
  console.log("No tenemos manzanas");
}

console.log(priceList);

// Tamaño del map
console.log("");

console.log(priceList.size);

// Recorrer el map || Imprimir una lista de precios
console.log("");

console.log("Lista de entries");
console.log(priceList.entries()); // Entries devuelve una pareja de valores

console.log("");

for (const item of priceList) {
  // console.log(price);
  console.log(`>>> ${item[0]} cuestan ${item[1]}`);
}

console.log("");

for (const [price, value] of priceList) {
  console.log(price, value);
}

console.log("");

for (const fruit of priceList.keys()) {
  console.log(fruit); // Lista de las keys
}

console.log("");

for (const price of priceList.values()) {
  console.log(price); // Lista de valores de las keys
}

// Borrar un dato del map

priceList.delete("Naranjas");

// Resetear el map

priceList.clear();
console.log(priceList);
