'use strict';

//Saltos de linea
console.log('Hola\nMundo'); // \n introduce un salto de linea incluyendo espacios

// insetar caracteres especiales con "\\"
console.log('\\');

console.log('Con emojis no pasa nada 😃');

/*  --- METODOS --- */

const miString = 'Hola Mundo Mundo!';

// cuanto mide un string
console.log(miString.length); //.length. Imprime 11

console.log('Hola'.length); // se puede aplicar directamente sobre un string


// pasar todo el string (texto) a minusculas
console.log(miString.toLowerCase());

// pasar todo el string (texto) a mayusculas
console.log(miString.toUpperCase());

// IndexOf -> Cual es la primera posicion de una letra o texto
console.log(miString.indexOf('o')); // se empieza a contar desde 0 las posiciones. Imprime 1

console.log(miString.indexOf('Mundo')); // Imprime 5, ya que es donde empieza la palabra en la cadena. Cuenta el espacio

console.log(miString.indexOf('jaja')); // Si no encuentra algo devuelve -1


// lastIndexOf -> Busca la ultima posicion de una letra o texto
console.log(miString.lastIndexOf('o'));

console.log(miString.lastIndexOf('Mundo')); // Imprime 5, busca desde detras pero al encontrarla la cuenta del derecho


// Sustituir parte de un string (texto)
console.log(miString.replace('o', 'a')); // Lo realiza solo una vez

console.log(miString.replaceAll('o', 'a')); // Todas las coincidencias (letras) que encuentre

console.log(miString.replace('Hola', 'Adios'));


// SPLIT -> Convierte un STRING en un ARRAY
console.log(miString.split(' ')); // Se monta el array separando por espacios. Toma por referencia lo que haya entre los parentesis del split.

console.log(miString.split('a')); // imprime "Hol , Mundo Mundo!". Expluye el valor indicado.

console.log(miString.split('')); // Imprime cada caracter como valores de variable

console.log(miString.split('', 4)) // Crea el array pero seteando un maximo de valores, Se queda solo con H O L A


// SLICE -> Cortar una parte de un string. -> Hay que decirle donde empieza y donde termina

console.log(miString.slice(2, 6)); // imprime desde el primer valor hasta el 5, ya que el ultimo valor lo excluye.

console.log(miString.slice(4)); // Si solo se le indica un valor corta desde la posicion indicada, en este caso 4





