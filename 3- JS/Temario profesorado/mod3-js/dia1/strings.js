'use strict';

// Saltos de linea
console.log('Hola\nMundo');

// insertar caracteres especiales con \

console.log('\\');

console.log('Con emojis no pasa nada 🙂');

/* --- MÉTODOS --- */

const miString = 'Hola Mundo Mundo!';

// Cuanto mide un String
console.log(miString.length); // length

console.log('Hola'.length);

// Pasar todo el string (texto) a minúsculas
console.log(miString.toLowerCase());

// Pasar a mayusculas
console.log(miString.toUpperCase());

// IndexOf
// cual es la primera posición de una letra o texto

console.log(miString.indexOf('H')); // se empieza a contar desde 0 las posiciones

console.log(miString.indexOf('Mundo')); // dice la posición donde empieza la palabra Mundo

console.log(miString.indexOf('jaja')); // cuando no encuentra, devuelve un -1

// cual es la última posición de una letra o texto
console.log(miString.lastIndexOf('o'));

console.log(miString.lastIndexOf('Mundo'));

// Sustituir parte de un string (texto)

// Solo una vez
console.log(miString.replace('o', 'a'));

// Todas las veces
console.log(miString.replaceAll('o', 'a'));

console.log(miString.replace('Hola', 'Adios'));

let mail1 = 'corre@gmail.com';
let mail2 = 'corre@gmail.com';
let mail3 = 'corre@gmail.com';

console.log(mail1, '\n', mail2, '\n', mail3);

mail1 = mail1.replace('gmail', 'hotmail');
mail2 = mail2.replace('gmail', 'hotmail');
mail3 = mail3.replace('gmail', 'hotmail');

console.log(mail1, '\n', mail2, '\n', mail3);

// Convierte un STRING en un ARRAY

// Crea un array a partir de un string tomando como referencia para separar los valores
// lo que indiquemos entre paréntesis
console.log(miString.split(' ')); // va a tomar como referencia un espacio (' ')

console.log(miString.split('')); // toma como referencia cada caracter

console.log(miString.split('', 4)); // establecemos un máximo de valores con los que se queda

// Guardamos la longitud de el array creado a partir del string miString
let longitudArray = miString.split(' ').length;
console.log('Valor longitudArray: ', longitudArray);

// CORTAR UNA PARTE DE UN STRING

// slice() ->  Hay que decirle, donde empieza a cortar y donde termina
console.log(miString.slice(2, 12));

// Si solo le indicamos un argumento, corta desde esa posición hasta el final del string
console.log(miString.slice(11));
